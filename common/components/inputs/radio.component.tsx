import { FC } from "react"
import { RadioProps } from "./types/radio.type"

const Radio: FC<RadioProps> = ({
  label,
  id,
  name,
  type = "radio",
  className = "",
  labelClassName = "",
  wrapperClassName = "",
  checked,
  value,
  noDot = false,
  children,
  ...rest
}) => {
  return (
    <div
      className={`flex items-center rounded-md cursor-pointer ${
        noDot && checked
          ? "bg-gray-100 border border-white"
          : noDot && !checked
          ? "bg-gray-300 border border-gray-300"
          : ""
      } ${wrapperClassName}`}
    >
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        className={`${noDot && "hidden"} ${className}`}
        {...rest}
      />
      <label
        htmlFor={id}
        className={`cursor-pointer py-1 px-3 ${labelClassName}`}
      >
        {label}
      </label>
    </div>
  )
}

export default Radio
