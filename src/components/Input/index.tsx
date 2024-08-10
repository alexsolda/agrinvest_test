import { forwardRef, InputHTMLAttributes } from 'react'

type IInputProps = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      className="p-2 rounded-md outline-none bg-white dark:bg-black-900 border border-zinc-400 dark:border-neutral-800 focus:border-green"
      {...props}
    />
  )
})

export default Input
