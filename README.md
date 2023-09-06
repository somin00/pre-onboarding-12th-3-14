# 프리온보딩 3주차 과제

## 실행 방법

```
npm install
npm start
```

## 프로젝트 구조

```
📦src
┣ 📂 apis
┣ 📂 components
┃ ┣ 📂  RecommendedTerm # 추천 검색어 리스트 아이템 컴포넌트
┃ ┣ 📂 SearchBox # 검색창 컴포넌트
┃ ┣ 📂 SearchResult # 추천 검색어 리스트를 감싸는 컴포넌트
┃ ┣ 📂 SearchSection # SeachBox, SearchResult 컴포넌트를 감싸는 컴포넌트
┣ 📂 constants # 상수 파일
┣ 📂 hooks
┃ ┣ 📂  useDebounce # 디바운싱 커스텀 훅
┃ ┣ 📂 useFetch # api 요청 커스텀 훅
┃ ┣ 📂 useKeyDown # 리스트 탐색 키보드 이벤트 커스텀 훅
┣ 📂 store # 리코일 상태 관리 폴더
┣ 📂 utils # 캐싱 유틸 함수 포함 폴더
┣ 📂 App
┗ 📂 .eslintrc # 코드 스타일 통일을 위한 esLint 설정 파일
┗ 📂 .prettierrc # 코드 포맷팅을 위한 prettier 설정 파일
```

## 사용한 기술

<img src="https://img.shields.io/badge/REACT-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/STYLED COMPONENTS-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/RECOIL-3578E5?style=flat-square&logo=recoil&logoColor=white"/> <img src="https://img.shields.io/badge/AXIOS-5A29E4?style=flat-square&logo=AXIOS&logoColor=white"/>

## 구현 기능

사용자가 입력한 검색어에 따라 추천 검색어를 보여주는 기능을 구현했습니다.
![기능](https://github.com/somin00/pre-onboarding-12th-3-14/assets/61578822/9dccc3dc-c47f-496f-a21f-5e5b668499cb)

<br/>

## 구현 기능 설명

### **[ 검색창 기능 ]**

사용자가 검색어를 입력할 수 있습니다.

<br/>

### **[ 검색어 추천 기능 ]**

입력한 검색어에 따라 API 호출을 통해 추천 검색어를 보여줍니다.

검색어가 없거나 검색 결과가 없는 경우 ‘검색어 없음’ 문구를 보여줍니다.

<br/>

### **[ API 호출 횟수 줄이기 ]**

API 호출 횟수를 줄이기 위해 `디바운싱`을 사용했습니다. 사용자의 입력이 언제 끝날지 모르기때문에 연이어 호출되는 함수들 중 마지막 호출을 감지하는 것이 맞다고 판단하여 디바운싱을 선택했습니다.

<br/>

### **[ API 호출별로 로컬 캐싱 구현하기]**

로컬 캐싱은 Cache Storage API를 사용하여 구현했습니다.

참고: [https://web.dev/i18n/ko/cache-api-quick-guide/#캐시-생성-및-열기](https://web.dev/i18n/ko/cache-api-quick-guide/#%EC%BA%90%EC%8B%9C-%EC%83%9D%EC%84%B1-%EB%B0%8F-%EC%97%B4%EA%B8%B0)

선택한 이유

1. 브라우저 내장 기능이라 추가적인 라이브러리를 다운받지 않고 사용할 수 있다.
2. 로컬스토리지, 세션스토리지는 5MB 크기의 문자열만 저장 가능하기 때문에 적절하지 않다고 판단했다.

사용자가 입력한 검색어에 대한 API response를 Cache Storage에 저장합니다. 만료 시간 기능을 위해 데이터를 저장시 header에 fetch-date를 현재 시간으로 설정합니다. API를 호출하기 전 검색어에 해당하는 데이터가 Cache Storage에 존재하면 캐싱되어 있는 데이터를 사용합니다. 데이터 저장시 지정한 시간과 현재 시간의 차이와 설정한 expire time을 비교하여 만료 여부를 판단합니다.

<br/>

![스크린샷 2023-09-06 오후 11 26 48](https://github.com/somin00/pre-onboarding-12th-3-14/assets/61578822/c7316e2e-abc6-4175-b905-a2c1397c2a44)

## 어려웠던 점

keyDown 이벤트가 두번 발생하는 문제가 있었습니다. 크롬 브라우저에서 한글 입력시 글자 아래 생기는 검은 밑줄이 있는 상황에 키보드 이벤트 핸들러가 두번 호출되어 발생하는 문제였습니다. 한글의 경우 자음과 모음의 조합 문자이기 때문에 글자가 조합 중인지, 조합이 끝난 상태인지를 알 수 없기 때문에 생기는 문제로 입력 문자가 조합 문자인지 아닌지를 boolean 값으로 반환하는 isComposing 값을 사용했습니다.

<br/>

![어려운점](https://github.com/somin00/pre-onboarding-12th-3-14/assets/61578822/1fb78c52-d032-46d2-99e1-42283b6a51bf)
