# Global Tax Free (GTF) 해외 간편결제 서비스 홈페이지 기획서 (Plan)

> **Summary**: 코스닥 상장법인 글로벌텍스프리(GTF)의 해외 간편결제 PG 서비스 및 병의원 대상 무료 마케팅/단말기 무상지원 올인원 홈페이지 구축
>
> **Project**: gtf-payment-homepage
> **Version**: 1.0.0
> **Author**: bkit:starter-guide
> **Date**: 2026-09-04
> **Status**: Completed (Approved)

---

## Executive Summary

| Perspective | Content |
|-------------|---------|
| **Problem** | 외국인 환자 및 관광객 유치 병의원들이 해외 결제 연동(환율, 수수료, 단말기 비용)의 높은 진입장벽과 고액의 해외 마케팅 비용으로 인해 결제 이탈 및 홍보의 어려움을 겪고 있음. |
| **Solution** | 중국 및 동남아 6개국 9대 결제수단을 하나로 묶고, 업계 최저 수수료 + 전용 의료결제 SW(STFM) 및 하드웨어 무상지원 + 무료 마케팅(쇼핑플러스, GTF매거진, 알리/위챗 배너) 혜택을 한눈에 제시하는 고전환형 랜딩페이지/홈페이지 구축. |
| **Function/UX Effect** | 반응형 모바일/데스크톱 UI, 국가별 결제수단 인터랙티브 탭, 실시간 수수료 절감액 시뮬레이터, STFM 5단계 프로세스 시각화, 사전 예약금(MPM) 결제 안내, 가맹/상담 신청 모달. |
| **Core Value** | "광고비 없이, 외국인 환자에게 병원을 노출하고 결제 수단과 장비까지 한 번에 무상 지원"하는 GTF PG만의 독보적 차별점 각인 및 가맹 전환율 극대화. |

---

## Context Anchor

| Key | Value |
|-----|-------|
| **WHY** | 리플릿 자료에 담긴 9대 결제수단, 무상 장비/소프트웨어, 무료 마케팅 혜택을 전문적이고 설득력 있는 디지털 웹 경험으로 전환 |
| **WHO** | 외국인 관광객/환자를 유치하는 국내 병의원(성형외과, 피부과, 치과, 안과 등) 및 일반 사후면세 가맹점 원장/실장/마케팅 담당자 |
| **RISK** | 복잡한 금융/결제 용어로 인한 이해도 저하 방지 -> 직관적인 인포그래픽, 단계별 프로세스 카드, 실시간 수수료 시뮬레이터 제공 |
| **SUCCESS** | 브로셔 4개 페이지의 모든 정보 100% 반영, 모바일/PC 완벽 반응형 구현, 직관적인 상담 접수 폼 구비, 빠른 로딩 속도 |
| **SCOPE** | 단일 페이지 웹사이트 (Hero, 4대 강점, 9대 결제수단, 무료 마케팅 4채널, 무상 SW/HW, 수수료 계산기, 도입절차, 상담폼, Footer) |

---

## 1. Overview & Requirements

### 1.1 배경 및 목적
제공된 4종의 GTF(Global Tax Free) 해외간편결제 서비스 제안 브로셔 자료를 완벽히 분석하여, 실제 가맹점 문의 및 전환으로 이어질 수 있는 고품질 기업 랜딩페이지를 제작한다.

### 1.2 소스 자료 분석 (브로셔 4면)
1. **P1 (표지)**:
   - 해외 간편결제 서비스 제안
   - 업계 최저 수수료, 무료 마케팅 홍보, 결제 장비 무료 (3대 특장점)
   - 코스닥 상장법인 GLOBAL TAX FREE 신뢰도
2. **P2 (마케팅 지원)**:
   - "광고비 없이, 외국인 환자에게 병원을 노출합니다."
   - 쇼핑플러스 플랫폼 (100% 외국인 관광객 접속)
   - GTF 매거진 (연 6만부, 국내 공항/호텔/시내환급창구 23개소 배포)
   - 알리페이 한국 방문객 타겟 배너/게시물 마케팅 (국내 유일)
   - 위챗페이 병/의원 전용 우대 환율 쿠폰 & 전용 페이지 (월 5만 스캔)
3. **P3 (소프트웨어 & 하드웨어 무상지원)**:
   - "결제 수단과 장비까지, 한 번에 지원합니다."
   - 4대 도입 효과 (안전한 결제환경, 매출 증대, 글로벌 경쟁력, 편리한 결제)
   - 독자 개발 병의원 맞춤형 의료 결제 프로그램 **STFM** 5단계 스캔 결제
   - 중국 현지 사전 예약금 결제(MPM) 지원 (노쇼 방지)
   - 유선 단말기(코세스 KTC-K501, SCS-4200, KPN MPOS-1901AE) 및 2D 핸드스캐너 무상 제공
4. **P4 (9대 결제수단 & 기업정보)**:
   - 중국: 위챗페이(WeChat Pay), 알리페이(Alipay)
   - 일본: 페이페이(PayPay)
   - 홍콩: 알리페이HK(Alipay HK)
   - 필리핀: 지캐시(GCash)
   - 태국: 트루머니(TrueMoney)
   - 말레이시아: 터치앤고(Touch 'n Go)
   - 싱가포르: 이지링크(ez-link)
   - 베트남: 모모페이(MoMo)
   - 고객센터 및 본사 정보 (서울 중구 퇴계로 131 신일빌딩 9층, 02-518-0837, gtf45@gtf-group.co.kr)

---

## 2. Tech Stack & Architecture

- **Project Level**: Starter Level (Static Web / Vibe Coding)
- **Structure**:
  - `index.html`: 시맨틱 HTML5 마크업, SEO 최적화, 오픈그래프 메타태그
  - `css/style.css`: 테일윈드 유틸리티 확장, 글래스모피즘, 브랜드 컬러(GTF 오렌지/레드 `#E65100`, 딥네이비 `#0F172A`)
  - `js/main.js`: 국가별 결제수단 필터링 탭, 실시간 수수료 절감 계산기, 상담 문의 모달 및 유효성 검사, 스무스 스크롤링
  - `images/`: 원본 브로셔 이미지 및 최적화 에셋
- **Design System**:
  - Primary Accent: Tangerine Orange (`#FF6B00` ~ `#E65100`)
  - Sub Accent: Trust Navy (`#0A192F` ~ `#1E293B`)
  - Background: Clean Warm White (`#FAFAFA`) & Slate Light (`#F8FAFC`)
  - Typography: Pretendard / Apple SD Gothic Neo / Inter

---

## 3. Implementation Milestones

- [x] Phase 1: Plan (요구사항 정의 및 분석 기획서)
- [ ] Phase 2: Design (UI/UX 레이아웃, 와이어프레임 및 인터랙션 설계서)
- [ ] Phase 3: Do (HTML, CSS, JS, 컴포넌트 풀 구현)
- [ ] Phase 4: Check / Analysis (브로셔 대비 갭 분석 및 품질 검증)
- [ ] Phase 5: Act / Report (최종 PDCA 완료 보고서 작성)
