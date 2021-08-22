import { FC } from "react"
import { ButtonProps } from "./types/button.type"

const Button: FC<ButtonProps> = ({ children, className = "", ...rest }) => {
  return (
    <button
      className={`bg-green text-white py-3 px-8 rounded-full jost inline-flex justify-center items-center gap-2 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
