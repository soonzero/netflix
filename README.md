# 라이징 테스트 WEB Netflix

## 2022.03.19 진행 상황

- 메인 페이지 화면 구현
- 메인 페이지 이메일 input 유효성 검사 구현
- '시작하기' 버튼 클릭 시 회원 가입 페이지 이동 구현
- 회원 가입 페이지 구현 중

## 2022.03.20 진행 상황

- 회원가입 프로세스 화면 구현 완료
- 로그인 페이지 구현 완료

## 2022.03.21 진행 상황

- 기획서 수정 - 회원가입 프로세스 중 멤버십 선택 및 결제 카드 입력 페이지와 기능 추가
- 회원가입 프로세스 중 추가된 페이지 구현
- 카드 결제 정보 입력 중 선택했던 멤버십 변경 가능한 페이지 추가 구현
- redux 사용해서 이메일 주소 및 멤버십 선택값 저장 후 불러오기 기능 구현
- 회원 가입 시 약관 동의 선택 기능 구현
- 카드 정보 입력 시 약관 동의 선택 기능 구현(전체 선택 기능 포함)

## 2022.03.22 진행 상황

- 웹 폰트 다운로드 후 createGlobalStyle로 전역에 적용
- 로그인 페이지에서 조건에 만족하는 값 입력 시 browse 페이지로 이동 구현
- 회원가입 프로세스 중 마지막 단계인 결제 정보 입력 및 약관 동의 끝나면 로그인 상태로 browse로 이동 구현
- browse(메인 컨텐츠 페이지) 구현 시작
- 메인 컨텐츠 페이지 내비게이션 바 account profile dropdown 퍼블리싱 완료

## 2022.03.23 진행 상황

- 로그인 성공 시 프로필 선택 페이지로 이동(프로필 선택 페이지에서 header 간소화 적용)
- 프로필 관리 버튼 클릭 시 프로필 관리 페이지로 이동(아직 프로필 관리 기능은 구현 미완료)
- 프로필 선택 시 메인 컨텐츠 화면으로 이동
- 프로필 정보 redux로 저장 후 header나 프로필 선택 페이지에서 정보 불러올 수 있도록 구현
- header에서 선택한 프로필에 해당하는 프로필 이미지 불러오려고 했으나 오류 떠서 보류한 상태
- 금일 받은 피드백 중 홈페이지 FAQ 답변 펼치는 기능 구현 완료
- 헤더 드롭다운 메뉴 중 '넷플릭스에서 로그아웃' 버튼 누르면 나오는 로그아웃 페이지 구현 완료

## 2022.03.24 진행 상황

- 내가 찜한 콘텐츠 레이아웃 구현 완료
- 요즘 대세 콘텐츠 레이아웃 구현 완료
- 내가 찜한 콘텐츠와 요즘 대세 콘텐츠 페이지 더미 데이터로 구현 완료
- 회원가입 페이지와 로그인 페이지 api 적용 완료 (보완 필요)
- 시리즈 페이지 더미 데이터로 구현 완료

## 2022.03.25 진행 상황

- 영화 페이지 더미 데이터로 구현 완료
- 프로필 추가 화면 구현 및 기능 구현 완료
- 세션 스토리지에 로그인 시 받은 토큰 값 저장하여 새로고침하더라도 로그인 유지 구현
- 전체 프로필 정보 조회 api 연동하여 선택한 프로필 이외의 프로필들만 드롭다운 메뉴에 표시
- 프로필 선택 후 헤더에 프로필 이미지 불러오는 기능 구현 완료(새로고침 시에도 유지할 수 있도록 보완 필요)

## 2022.03.26 진행 상황

- 헤더 프로필 이미지 새로고침 시에도 유지할 수 있도록 보완 완료
- 계정 상세 조회 및 관리 페이지 구현 완료
- 로그인 시 계정에 멤버십 가입 안 됐을 경우 browse로 이동 불가능하도록 설정
- 계정 상세 페이지 api 연동 후 구현 완료
- 계정 관리 페이지 프로필 별 상세 메뉴 오픈 기능 구현
- 메인 컨텐츠, 시리즈, 영화 페이지 중 상단 section api 연동 시도했으나 400 오류 발생(보완 필요)

## 2022.03.27 진행 상황

- 특정 프로필 정보 api 연동 후 로딩 화면 구현
- 컴포넌트의 효율적 재사용을 위해 메인 컨텐츠 화면 row컨테이너(컨텐츠 테마)별로 나눠서 api 적용
- styled components 재사용 가능한 것들만 우선 styled.js에서 선언 후 import 및 export하여 사용
- 컨텐츠에 마우스 오버 했을 때 생기는 mini 모달창 구현 시작

## 2022.03.28 진행 상황

- mini 모달 더미데이터로 구현 완료
- 메인 페이지 상단 section api 연동 완료 (api 수정)
- mini 모달 및 상세 정보 클릭 시 생기는 detail 모달 더미 데이터로 구현 완료
- 특정 콘텐츠 찜하기 기능 api 연동 완료
- 찜한 콘텐츠 모아보기 api 연동 완료
- 구현했던 로딩 화면 오류 발생으로 인해 보류
