//* ~ React17
// import type {FC, ReactNode} from 'react'

// export type PProps = {
//   children?: ReactNode
// }

// const P: FC<PProps> = props => {
//   return <p {...props} />
//   //   const {children} = props
//   //   return <p children={children} />
// }

//* React18~
import type {FC, PropsWithChildren} from 'react'

export type PProps = {}

const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props} />
}

export default P
