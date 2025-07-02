# Learning React!

## 250701

**`./ch01`**

- `create-react-app` 으로 리액트 프로젝트 구성
- `App.tsx` 파일 편집 후 npm start로 웹팩 핫 리로딩 확인
- `Chance`, `Luxon` 패키지와 모듈 TS 파일을 활용해 가짜 데이터로 구성된 페이지 구성 실습 : Javascript로 구현된 패키지를 타입스크립트에서 사용할 때에는 `@types/{패키지}`도 개발 의존성으로 함께 설치해주어야 한다.

## 250702

**`./ch02`**

- DOM 객체에 대한 이해
- 물리 DOM 렌더링 : `createElement()` 로 HTML DOM 요소 객체를 생성하고, 생성된 DOM 객체를 `appendChild()`를 통해 웹 브라우저 화면에 출력한다.
- 가상 DOM 렌더링 : `React.createElement()` 를 통해 HTML 요소를 가상 DOM 트리 구조로 구현한 다음, render 함수를 호출할 때 가상 DOM 트리를 물리 DOM 트리로 변환한다.
