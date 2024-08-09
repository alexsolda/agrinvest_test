import { ReactElement } from 'react'

type ITitleProps = {
  text: string
}

const Title = ({ text }: ITitleProps): ReactElement => {
  return <p className="mb-12 text-2xl font-bold">{text}</p>
}

export default Title
