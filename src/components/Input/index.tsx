import { forwardRef, InputHTMLAttributes } from 'react'

type IInputProps = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      className="p-2 rounded-md outline-none border border-neutral-800 focus:border-green"
      {...props}
    />
  )
})

export default Input
