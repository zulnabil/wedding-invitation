import { ButtonHTMLAttributes } from "react"

export interface ButtonCustomProps {
  variant?: string
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonCustomProps
