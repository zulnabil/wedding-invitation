import { FC } from "react"
import type { LoveWordsProps } from "./types/love-words.type"

const SectionLoveWords: FC<LoveWordsProps> = ({ text }) => {
  return (
    <section className="bg-green-gradient relative text-center p-32">
      <p className="font-medium text-4xl leading-normal text-white">{text}</p>
      <hr className="w-3/4 m-auto mt-10 opacity-50" />
    </section>
  )
}

export default SectionLoveWords
