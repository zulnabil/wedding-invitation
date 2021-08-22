import { FC } from "react"
import { BasicInputProps } from "./types/basic-input.type"

const Checkbox: FC<BasicInputProps> = ({
  label,
  name,
  type = "checkbox",
  className = "",
  labelClassName = "",
  wrapperClassName = "",
  value,
  ...rest
}) => {
  return (
    <div className={wrapperClassName}>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        className={`m-1 ${className}`}
        {...rest}
      />
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
