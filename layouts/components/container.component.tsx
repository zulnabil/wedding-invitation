import { FC, ReactNode } from "react"
import styles from "../styles/container.module.css"

type Props = {
  children: ReactNode
}

const Container: FC<Props> = ({ children }): JSX.Element => {
  return <div className={styles.container}>{children}</div>
}

export default Container
