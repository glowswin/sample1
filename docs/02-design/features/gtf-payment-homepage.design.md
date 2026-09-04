# Global Tax Free (GTF) 해외 간편결제 서비스 홈페이지 상세 설계서 (Design)

> **Summary**: 코스닥 상장법인 글로벌텍스프리(GTF) 해외 간편결제 서비스 반응형 웹사이트 UI/UX 컴포넌트, 컬러 팔레트, 인터랙션 상세 설계
>
> **Project**: gtf-payment-homepage
> **Version**: 1.0.0
> **Author**: bkit:starter-guide
> **Date**: 2026-09-04
> **Status**: Completed (Approved)

---

## 1. Design Tokens & Visual Hierarchy

### 1.1 Color Palette
- **Primary GTF Orange**: `#FF5500` ~ `#E64A19` (브로셔의 핵심 오렌지 액센트)
- **Secondary Dark Navy**: `#0B192C` ~ `#1E3E62` (신뢰감, 금융/PG사의 안정성)
- **Neutral Backgrounds**:
  - Light Gray: `#F8FAFC`
  - Pure White: `#FFFFFF`
  - Border Gray: `#E2E8F0`
- **Text Hierarchy**:
  - Headings: `#0F172A` (Slate 900)
  - Body: `#334155` (Slate 700)
  - Muted: `#64748B` (Slate 500)
  - Light on Dark: `#F1F5F9` (Slate 100)

### 1.2 Typography
- Primary: Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- Responsive Heading Scale:
  - Hero Title: `text-3xl md:text-5xl lg:text-6xl font-black`
  - Section Title: `text-2xl md:text-4xl font-extrabold`
  - Card Title: `text-lg md:text-xl font-bold`

---

## 2. Page Sections & Layout Breakdown

### [1] GNB (Global Navigation Bar)
- **Left**: GTF 로고 (Global Tax Free, 코스닥 상장법인 배지 포함)
- **Center**:
  - 서비스 강점 (`#benefits`)
  - 9대 결제수단 (`#payment-methods`)
  - 병원 홍보 마케팅 (`#marketing`)
  - STFM & 장비 지원 (`#hardware-sw`)
  - 수수료 계산기 (`#calculator`)
  - 도입 절차 (`#process`)
- **Right**: [전화 문의: 02-518-0837] + [도입 상담 신청 (무료) CTA]
- **Mobile**: 햄버거 메뉴 오버레이 슬라이드

### [2] Hero Section
- **Badge**: `KOSDAQ 상장법인 글로벌텍스프리(주)`
- **Main Heading**:
  - `광고비 없이, 외국인 환자에게 병원을 노출합니다`
  - `업계 최저 수수료와 강력한 마케팅 지원으로 시작하는 해외 간편결제`
- **3대 핵심 혜택 하이라이트 배지**:
  1. 🏷️ **업계 최저 수수료** (타사 대비 압도적 마진 보호)
  2. 📢 **무료 마케팅 홍보 지원** (쇼핑플러스, GTF 매거진, 알리/위챗 인앱 광고)
  3. 🖥️ **결제 장비 & STFM SW 무상 지원** (단말기, 스캐너, 전용 프로그램 100% 무료)
- **Hero Visual & CTAs**:
  - [무료 도입 상담 신청하기]
  - [실시간 수수료 절감 계산기 체험]
  - 브로셔 원본 포스터 및 결제 스캔 비주얼 쇼케이스

### [3] Section: 4대 핵심 도입 효과 (Core Advantages)
- 4-Grid Cards:
  1. 🛡️ **안전한 결제환경**: 검증된 글로벌 보안 시스템으로 안심 거래 지원
  2. 📈 **매출 증대 효과**: 결제 편의성 향상으로 외국인 환자 구매 전환율 극대화
  3. 🌐 **글로벌 경쟁력 강화**: 자국 결제 수단 제공으로 브랜드 만족도 및 가치 제고
  4. 💳 **편리한 결제 경험**: 환전/카드 수수료 걱정 없이 자국 앱 그대로 1초 결제

### [4] Section: 아시아 6개국 9대 간편결제수단 (Payment Methods)
- **Filter Tabs**: [전체보기] / [중국] / [일본 & 홍콩] / [동남아 4개국]
- **9개 결제수단 카드 리스트**:
  1. **WeChat Pay (위챗페이)**: 중국 1위 메신저(13억 유저) 기반 결제
  2. **Alipay (알리페이)**: 중국 1위 모바일 결제 플랫폼
  3. **PayPay (페이페이)**: 일본 1위 모바일 간편결제
  4. **Alipay HK (알리페이 홍콩)**: 홍콩 거주자 대상 1위 간편결제
  5. **GCash (지캐시)**: 필리핀 1위 모바일 전자지갑
  6. **TrueMoney (트루머니)**: 태국 대표 전자결제 수단
  7. **Touch 'n Go (터치앤고)**: 말레이시아 1위 전자지갑
  8. **ez-link (이지링크)**: 싱가포르 대표 교통·결제 카드
  9. **MoMo (모모페이)**: 베트남 1위 모바일 지갑
- **특징 요약**: 안전하고 빠른 원화(KRW) 정산, PC & 모바일 통합 프로그램 지원

### [5] Section: 병의원 특화 4대 무료 마케팅 채널 (Free Marketing Channels)
- 2x2 Grid 또는 인터랙티브 탭:
  1. **쇼핑플러스 (쇼핑 정보 플랫폼)**: 100% 외국인 관광객 접속, 병원 브랜드/진료과목/쿠폰 홍보
  2. **GTF 매거진**: 영문+중문 고품격 매거진, 공항/특급호텔/백화점/시내환급처 23개소 (연 6만부 배포)
  3. **알리페이 가맹점 마케팅**: 한국 사업자 중 유일하게 알리페이 방한 유저 대상 인앱 배너/게시물 광고
  4. **위챗페이 병/의원 전용 우대환율 쿠폰**: 위챗페이 본사 공식 환율우대 쿠폰 발행, 병원 전용 홍보페이지 (월 5만 이용자 스캔)

### [6] Section: 무상지원 소프트웨어 & 하드웨어 (STFM & Devices)
- **STFM 5단계 결제 프로세스 타임라인**:
  - `STEP 1` 병원 방문 & 상담
  - `STEP 2` 결제 QR 제시 (환자 제시형 or 병원 QR 스캔)
  - `STEP 3` 핸드스캐너 초고속 결제
  - `STEP 4` 영수증 및 원화 승인내역 자동 발급
  - `STEP 5` 시술 및 진료 진행
- **핵심 차별점 Callout**:
  - 🇨🇳 **중국 현지 사전 예약금(MPM) 수납 지원**: 환자가 한국 입국 전, 중국 현지에서 병원 QR코드로 예약금을 결제하여 No-Show 완벽 방지!
- **무상 지원 하드웨어 쇼케이스**:
  - 코세스 KTC-K501 유선 단말기
  - KPN MPOS-1901AE (멀티패드, 서명패드, 바코드)
  - 다우데이터 SCS-4200 단말기
  - 유선 핸드형 2D 바코드 스캐너 (Plug & Play, 즉시 사용)
  - 고급 아크릴 탁상용 QR 스탠드

### [7] Section: 실시간 수수료 절감 계산기 (Fee Savings Simulator)
- 외국인 월 결제액 슬라이더/인풋 (예: 500만원 ~ 1억원)
- 기존 일반 PG 수수료 (평균 3.8%) vs GTF 최저 수수료 비교
- 연간 예상 절감 비용 및 무료 마케팅 가치 환산액 자동 산출 인터랙션

### [8] Section: 도입 절차 & FAQ
- **4단계 간편 절차**: 1. 상담 신청 -> 2. 계약 및 가맹 심사 -> 3. 장비/SW 무상 배송 및 설치 -> 4. 결제 오픈 및 무료 마케팅 시작
- **FAQ 아코디언**: 정산 주기(익일 정산 등), 수수료율, 취소/환불 방법, 장비 고장 AS 안내

### [9] Section: 가맹 / 도입 상담 신청 폼
- 인풋: 병의원/가맹점명, 담당자 이름, 연락처, 이메일, 진료 과목/업종, 문의사항
- 제출 시 감사 모달 및 즉각적인 접수 피드백 제공 (로컬 스토리지에 문의 내역 저장)
- 직접 유선 연결 배너 (`02-518-0837`)

### [10] Footer
- 상호명: 글로벌텍스프리(주) | 코스닥상장법인 (KOSDAQ: 204620)
- 주소: 서울특별시 중구 퇴계로 131, 신일빌딩 9층
- 문의: gtf45@gtf-group.co.kr | 대표전화: 02-518-0837
- 공식 홈페이지: www.global-taxfree.com
- 브로셔 원본 보기 모달 트리거 지원

---

## 3. Interaction & JavaScript Logic

- `initTabs()`: 결제수단 국가별 필터링
- `initCalculator()`: 월 매출 입력에 따른 실시간 절감액 계산 및 애니메이션
- `initBrochureModal()`: 브로셔 4개 원본 이미지를 고해상도로 확대해 볼 수 있는 갤러리 모달
- `initConsultationForm()`: 폼 유효성 검사 및 전송 시뮬레이션
- `initScrollSpy()` & `initMobileMenu()`: 네비게이션 동작
