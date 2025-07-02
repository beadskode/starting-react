import React from 'react' // 리액트 개발과 직접 관련된 부분 - 리액트 패키지.
import ReactDOM from 'react-dom/client' // 리액트 개발과 직접 관련된 부분 - 렌더러 패키지. 리액트는 항상 react와 react-dom 패키지를 필요로 한다. (react-dom/server, react-native 등 앱이 동작하는 환경(플랫폼)과 관련이 있다.)
// import ReactDOM from 'react-dom/server' // SSR의 경우
import './index.css'
import App from './App' // 리액트 개발과 직접 관련된 부분 - 컴포넌트.
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement) // 리액트 개발과 직접 관련된 부분
const pVirtualDOM = React.createElement('p', null, 'Hello World!') //* 가상 DOM Element를 생성한다. (아직 가상 DOM 트리에 추가되지 않음.)

root.render(
  pVirtualDOM
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
) // 리액트 개발과 직접 관련된 부분. strict mode는 코드가 잘못되었는지 판단하여 오류메시지를 보여주는 컴포넌트.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals() // 앱의 성능 측정

// 18버전에서는 ReactDOM.render 대신 ReactDOM.createRoot를 우선 사용하고 root.render를 다시 한번 사용해서 렌더링한다.

/* 물리 DOM (physical DOM)
let pPhysicalDOM = document.createElement('p')
pPhysicalDOM.innerText = 'Hello physical DOM world!'
document.body.appendChild(pPhysicalDOM)
*/

/* 가상 DOM (virtual DOM)
const pVirtualDOM = React.createElement('p', null, 'Hello World!') //* 가상 DOM Element를 생성한다. (아직 가상 DOM 트리에 추가되지 않음.)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement) //* #root를 찾아 가상 DOM 객체를 부착할 물리 DOM 객체로 삼고, 변수 root에 할당한다.
root.render(pVirtualDOM) //* 가상 DOM을 물리 DOM으로 전환한다.
 */
