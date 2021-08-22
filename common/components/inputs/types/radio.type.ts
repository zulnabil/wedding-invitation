import { ReactNode } from "react"
import { BasicInputProps } from "./basic-input.type"

export type RadioProps = Omit<BasicInputProps, "label"> & {
  label: string | ReactNode | HTMLElement
  noDot?: boolean
}
