import { forwardRef, InputHTMLAttributes } from 'react'

type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ error, ...props }, ref) => {
    return (
      <div className={`${error && 'mb-2'} relative flex flex-col gap-1 w-full`}>
        <input
          type="text"
          ref={ref}
          className="p-2 min-w-[250px] max-h-[44px] rounded-md outline-none bg-white dark:bg-black-900 border border-zinc-400 dark:border-neutral-800 focus:border-green dark:focus:border-green"
          {...props}
        />
        <p
          className={`absolute bottom-[-20px] text-red-400 ${
            error ? 'opacity-1' : 'opacity-0'
          }`}
        >
          {error ?? 'error'}
        </p>
      </div>
    )
  }
)

export default Input
