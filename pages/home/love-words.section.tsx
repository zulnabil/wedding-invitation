import { FC } from "react"
import type { LoveWordsProps } from "./types/love-words.type"

const SectionLoveWords: FC<LoveWordsProps> = ({ text }) => {
  return (
    <section className="bg-green-gradient relative text-center p-8 md:p-32 sm:p-16">
      <p className="font-medium text-xl d:text-4xl sm:text-2xl leading-snug sm:leading-normal text-white">
        {text}
      </p>
      <hr className="w-3/4 m-auto md:mt-10 mt-5 opacity-50" />
    </section>
  )
}

export default SectionLoveWords
