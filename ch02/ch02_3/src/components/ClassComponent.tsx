import {Component} from 'react'

type ClasssComponentProps = {
  href: string
  text: string
}
// 클래스 컴포넌트는 반드시 react 패키지가 제공하는 Component클래스를 상속해야 한다.
export default class ClassComponent extends Component<ClasssComponentProps> {
  // Component를 상속한 클래스 컴포넌트는 render라는 이름의 메서드를 포함해야 한다.
  render() {
    // render 메서드는 null이나 React.createElement 호출로 얻은 반환값, 또는 JSX 문 등으로 **가상 DOM 객체**를 반환해야 한다.
    let isLoading = false
    const {href, text} = this.props
    // setTimeout(() => (isLoading = false), 3000) //* 값이 바뀌면 어떻게 되나 궁금해서 추가한 부분 - 그런데 이미 setTimeout의 콜백이 실행될 때는 render 함수가 종료되었으므로 반영되지 않는다...
    //* 1번 방법
    // if (isLoading) return <p>loading...</p>
    // return (
    //   <ul>
    //     <li>
    //       <a href="http://www.google.com">
    //         <p>go to Google</p>
    //       </a>
    //     </li>
    //   </ul>
    // )
    //* 2번 방법
    // const children = (
    //   <li>
    //     <a href="http://www.google.com">
    //       <p>go to Google</p>
    //     </a>
    //   </li>
    // )
    // return (
    //   <div>
    //     {/* {isLoading && <p>loading...</p>}
    //     {!isLoading && <ul>{children}</ul>} */}
    //   </div>
    // )
    //* 3번 방법
    const children = isLoading ? (
      <p>loading...</p>
    ) : (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    )
    return <div>{children}</div>
  }
}
