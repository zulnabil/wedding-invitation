import { InputHTMLAttributes } from "react"

export interface BasicInputCustomProps {
  label: string
  labelClassName?: string
  wrapperClassName?: string
}

export type BasicInputProps = InputHTMLAttributes<HTMLInputElement> &
  BasicInputCustomProps
