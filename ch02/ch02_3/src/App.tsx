import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent'
import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
const children = [
  <FunctionComponent href="http://www.google.com" text="go to Google" key="fc" />,
  <ClassComponent href="https://twitter.com" text="go to Twitter" key="cc" />
]
export default function App() {
  return (
    <ul>
      {/* <FunctionComponent /> */}
      {children}
    </ul>
  )
}
