import { FC } from "react"
import { BasicInputProps } from "./types/basic-input.type"

const TextField: FC<BasicInputProps> = ({
  label,
  name,
  placeholder,
  type = "text",
  className = "",
  labelClassName = "",
  wrapperClassName = "",
  value,
  ...rest
}) => {
  return (
    <div
      className={`${"border border-gray-300 rounded-lg p-3"} ${wrapperClassName}`}
    >
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`${"w-full bg-transparent placeholder-gray-300 outline-none font-light"} ${className}`}
        {...rest}
      />
    </div>
  )
}

export default TextField
