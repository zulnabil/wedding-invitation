import { ReactElement } from "react"

export type HeadProps = {
  /**
   * Title of the page. (SEO)
   *
   * Displayed in the browser tab.
   */
  seoTitle?: string

  /**
   * Description of the page. (SEO)
   *
   * Used as Open Graph and twitter description.
   */
  seoDescription?: string

  /**
   * Url of the page. (SEO)
   *
   * Used as Open Graph url.
   */
  seoUrl?: string

  /**
   * Image associated with the page. (SEO)
   *
   * Used as Open Graph and twitter image.
   */
  seoImage?: string

  /**
   * Favicon.
   *
   * Websites usually use the same favicon for all their pages.
   */
  favicon?: string

  /**
   * Additional links and scripts HTML elements.
   *
   * Can be used to load 3rd party scripts and such.
   * It is recommended to use a "<Fragment>" as wrapper.
   */
  additionalContent?: ReactElement
}
