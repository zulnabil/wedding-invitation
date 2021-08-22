import { FC, ReactNode } from "react"
import { HeadProps } from "./head.type"

export type LayoutProps = {
  /**
   * Content to display within the layout
   *
   * The page's content
   */
  children: ReactNode

  /**
   * Props forwarded to the Head component.
   *
   * Essentially, SEO metadata, etc.
   * Will use sane defaults if not specified.
   */
  headProps?: HeadProps

  /**
   * Wrapper container for the page
   */
  Container?: FC

  /**
   * Only defined if there was an error
   */
  error?: Error
}
