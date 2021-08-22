import { FC } from "react"
import NextHead from "next/head"
import type { HeadProps } from "./types/head.type"

import { SEO_DEFAULT } from "@/common/constants/config.constant"

const Head: FC<HeadProps> = ({
  seoTitle = SEO_DEFAULT.title,
  seoDescription = SEO_DEFAULT.description,
  seoImage = SEO_DEFAULT.image,
  seoUrl = SEO_DEFAULT.url,
  favicon = SEO_DEFAULT.favicon,
  additionalContent = SEO_DEFAULT.additionalContent,
}) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta name="twitter:site" content={seoUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={seoImage} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {additionalContent && additionalContent}
    </NextHead>
  )
}

export default Head
