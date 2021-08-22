import { FC } from "react"
import ErrorPage from "@/pages/_error"
import DefaultContainer from "./container.component"
import Head from "./head.component"
import Footer from "./footer.component"

import type { LayoutProps } from "./types/layout.type"

const Layout: FC<LayoutProps> = ({
  children,
  error,
  headProps = {},
  Container = DefaultContainer,
}): JSX.Element => {
  return (
    <>
      <Head {...headProps} />
      <main>
        {error ? (
          <ErrorPage statusCode={500} err={error} />
        ) : (
          <Container>{children}</Container>
        )}
      </main>
      <Footer />
    </>
  )
}

export default Layout
