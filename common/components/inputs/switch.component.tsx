import { FC } from "react"
import { BasicInputProps } from "./types/basic-input.type"

const Switch: FC<BasicInputProps> = ({
  name,
  placeholder,
  className = "",
  labelClassName = "",
  wrapperClassName = "",
  value,
  ...rest
}) => {
  return (
    <div
      className={`${"relative inline-block w-14 mr-2 align-middle select-none transition duration-200 ease-in"} ${wrapperClassName}`}
    >
      <input
        id={name}
        type="checkbox"
        name={name}
        className={`${"toggle-checkbox absolute block w-7 h-7 rounded-full bg-gray-500 border-4 border-gray-300 appearance-none cursor-pointer transition duration-200 ease-in"} ${className}`}
        {...rest}
      />
      <label
        htmlFor={name}
        className="toggle-label block overflow-hidden h-7 rounded-full bg-gray-300 cursor-pointer"
      />
    </div>
  )
}

export default Switch
