import ReactDOM from 'react-dom/client'
import * as D from './data'

const children = D.makeArray(10).map((_, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} alt="randomAvatar" />
  </div>
))

const rootVirtualDOM = <div>{children}</div>
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)

//* React.createElement() 호출로 구현 */
// import React from 'react'
// import ReactDOM from 'react-dom/client'

// const CE = React.createElement //* 리액트 팀은 이런 식으로 createElement 함수를 작성하기 쉬운 이름으로 고쳐서 사용할 것을 권함.

// const rootVirtualDOM = CE('ul', null, [
//   CE('li', null, [
//     CE('a', {href: 'http://www.google.com', target: '_blank'}, [
//       CE('p', null, 'go to google')
//     ])
//   ])
// ])
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(rootVirtualDOM)

//* React.createElement() 호출로 구현 */
// import ReactDOM from 'react-dom/client'
// const hello = 'Hello World!'
// const targetBlank = '_blank'

// const rootVirtualDOM = (
//   <ul>
//     <li>
//       <a href="http://www.google.com" target={targetBlank}>
//         <p>go to Google</p>
//       </a>
//     </li>
//     <li>
//       <p>{/* string must be wrapped by Text */}</p>
//       {/* <p>{// 이런 주석은?}</p> - Error: Parsing error: '}' expected */}
//       <p>{hello}</p>
//     </li>
//   </ul>
// )

// const children = [
//   <li>
//     <a href="http://www.google.com" target="_blank">
//       <p>go to Google</p>
//     </a>
//   </li>,

//   <li>
//     <a href="http://www.facebook.com" target="_blank">
//       <p>go to Facebook</p>
//     </a>
//   </li>,

//   <li>
//     <a href="http://www.twitter.com" target="_blank">
//       <p>go to Twitter</p>
//     </a>
//   </li>
// ]

//* children은 map 등 배열 메서드를 활용해서 만들 수도 있다.
// const children = [0, 1, 2].map(n => <h3>Hello, World! {n}</h3>) // 키가 있어야 함.
// const rootVirtualDOM = <ul>{children}</ul>

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(rootVirtualDOM)
// reportWebVitals();
