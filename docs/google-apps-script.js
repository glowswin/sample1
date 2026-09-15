/**
 * GTF 해외 간편결제 서비스 - 가맹/상담 신청 수신 및 이메일 자동 발송 스크립트
 * 
 * [동작 순서]
 * 1. 웹사이트에서 상담 신청 제출
 * 2. 스팸 봇(Honeypot) 자동 검사 및 차단
 * 3. 구글 스프레드시트에 행 자동 추가
 * 4. 관리자 이메일로 알림 메일 즉시 발송
 */

function doPost(e) {
  try {
    var lock = LockService.getScriptLock();
    lock.waitLock(10000); // 10초 대기 (동시 요청 충돌 방지)

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 데이터 파싱
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    // 1. 봇 트랩(Honeypot) 스팸 차단: 숨겨진 _gotcha 필드에 값이 있으면 차단
    if (data._gotcha && String(data._gotcha).trim() !== '') {
      return ContentService.createTextOutput(JSON.stringify({ result: 'spam_blocked' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 2. 시트 첫 행 헤더가 없으면 자동 생성
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['접수일시', '병의원명/가맹점명', '담당자 성함', '연락처', '진료과목/업종', '문의사항']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#f3f4f6');
      sheet.setFrozenRows(1);
    }

    var now = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');
    var clinicName = data.clinic_name || '';
    var contactName = data.contact_name || '';
    var phone = data.phone || '';
    var specialty = data.specialty || '';
    var message = data.message || '';

    // 필수 항목 검증
    if (!clinicName && !contactName && !phone) {
      return ContentService.createTextOutput(JSON.stringify({ result: 'empty_data' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 3. 구글 스프레드시트에 기록
    sheet.appendRow([now, clinicName, contactName, phone, specialty, message]);

    // 4. 이메일 자동 발송
    // 네이버 등 지정 메일로 발송 (필요 시 수정 가능)
    var recipientEmail = "glowswin@naver.com";
    // var recipientEmail = Session.getActiveUser().getEmail();

    var emailSubject = '[GTF 신규 가맹상담] ' + clinicName + ' (' + contactName + ' 님)';
    var emailBody = 
      '🔔 [GTF 해외 간편결제 서비스] 신규 가맹/상담 신청이 접수되었습니다.\n\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
      '• 접수일시 : ' + now + '\n' +
      '• 병의원명 : ' + clinicName + '\n' +
      '• 담당자명 : ' + contactName + '\n' +
      '• 연 락 처 : ' + phone + '\n' +
      '• 진료과목 : ' + specialty + '\n' +
      '• 문의내용 : ' + (message ? message : '(작성 내용 없음)') + '\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
      '📊 전체 신청 목록 확인 (구글 시트 바로가기):\n' + SpreadsheetApp.getActiveSpreadsheet().getUrl();

    MailApp.sendEmail({
      to: recipientEmail,
      subject: emailSubject,
      body: emailBody
    });

    lock.releaseLock();

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
