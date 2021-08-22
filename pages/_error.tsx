import { FC } from "react"
import NextError from "next/error"

type ErrorPageProps = {
  err: Error
  statusCode: number
  children?: React.ReactElement
}

const ErrorPage: FC<ErrorPageProps> = (props): JSX.Element => {
  const { statusCode, err, children = null } = props
  return (
    <>
      {
        // Render the children if provided, or return the native NextError component from Next
        children ? (
          children
        ) : (
          <NextError
            statusCode={statusCode}
            // When "null" is provided, it'll fallback to Next.js default message (based on the statusCode)
            title={err?.message}
          />
        )
      }
    </>
  )
}

export default ErrorPage
