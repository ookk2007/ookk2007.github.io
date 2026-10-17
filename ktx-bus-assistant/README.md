# 자리ON — KTX & 버스 예매 도우미

`https://ookk2007.github.io/ktx-bus-assistant/`에 배포되는 정적 프론트엔드 프로토타입입니다.

## 포함된 기능

- KTX, 고속버스(KOBUS), 시외버스(Tmoney)별 검색 흐름
- 데모 시간표 및 상태별 결과 카드
- 브라우저 `localStorage` 기반 모니터 조건 저장·일시 중지·삭제
- 빈자리 발견/임시 좌석 확보 상황 시뮬레이션
- 공식 예매 사이트 이동과 알림톡 미리보기
- 모바일 반응형 화면, 키보드 탭 조작, 상태 텍스트 및 `aria-live`

## 중요한 범위

이 폴더에는 서버가 없습니다. 따라서 실제 실시간 조회, 브라우저가 닫힌 동안의 polling, 쿠키 세션 유지, 좌석 선점·해제, 카카오 알림톡 발송을 수행하지 않습니다. 전화번호, 계정, 카드 정보도 입력받지 않습니다.

참고한 `railway-timetable`은 KTX 공개 계획 시간표 조회 전용이며 실시간 잔여석·자동 재조회·예약을 제공하지 않습니다. `express-bus-booking`과 `intercity-bus-booking`은 공식 HTTP 흐름을 통한 조회·임시 선점·공식 결제 페이지 인계를 참고했으며 최종 결제는 사용자 몫입니다.

## 실제 서비스로 확장할 때

정적 페이지와 분리된 HTTPS 백엔드가 필요합니다.

1. 운송사별 어댑터를 완전히 분리합니다: `korail`, `kobus`, `tmoney-intercity`.
2. 작업 큐와 스케줄러가 사용자별 조건을 저빈도로 확인하고, rate limit·차단 신호에서 즉시 멈춥니다.
3. `seat-detected`와 `hold-succeeded`를 다른 상태로 저장합니다.
4. 실제 hold 식별자를 검증한 뒤에만 알림을 발송합니다.
5. 포기·만료·테스트 hold는 공식 해제 흐름으로 정리합니다.
6. 비밀키와 세션은 secret store에 보관하며 프론트엔드나 `VITE_*` 환경변수에 넣지 않습니다.
7. 공급자가 만료 시각을 반환할 때만 결제 카운트다운을 표시합니다.

## 참고 자료

- [railway-timetable](https://github.com/NomaDamas/k-skill/tree/main/railway-timetable)
- [express-bus-booking](https://github.com/NomaDamas/k-skill/tree/main/express-bus-booking)
- [intercity-bus-booking](https://github.com/NomaDamas/k-skill/tree/main/intercity-bus-booking)

이 프로토타입은 코레일·KOBUS·Tmoney와 제휴 또는 공식 지원 관계가 아닙니다.
