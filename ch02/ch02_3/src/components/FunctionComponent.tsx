import type {FC} from 'react'

export type FunctionComponentProps = {
  href: string
  text: string
}

//* 일반 함수
// export default function FunctionComponent() {
//   return <h1>Hello function component</h1>
// }

//* 화살표 함수
const FunctionComponent: FC<FunctionComponentProps> = props => {
  const {href, text} = props
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  )
}
export default FunctionComponent
