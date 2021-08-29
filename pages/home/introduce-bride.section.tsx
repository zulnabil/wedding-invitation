import { FC } from "react"
import Image from "next/image"
import type { IntroduceBrideProps } from "./types/introduce-bride.type"

const SectionIntroduceBride: FC<IntroduceBrideProps> = ({ male, female }) => {
  return (
    <section className="introduce-bride text-center p-8 md:p-32 sm:p-16">
      <h1 className="text-2xl sm:text-6xl leading-snug sm:leading-normal">
        we are getting <span className="text-green">married</span>
      </h1>
      <p className="jost text-gray-400 text-sm sm:text-base">
        and build our new live
      </p>
      <div className="bride-wrapper mt-4 sm:mt-16 flex justify-around">
        <div className="bride-card m-6">
          <Image alt="female" src={female.photo} height={345} width={371} />
          <p className="text-2xl sm:text-4xl mt-4 sm:mt-10">{female.name}</p>
          <div className="jost text-gray-400 mt-1 sm:mt-3 text-sm sm:text-base">
            <p>{female.childOrder}</p>
            <p>{female.parents}</p>
          </div>
        </div>
        <div className="bride-card m-6">
          <Image alt="male" src={male.photo} height={345} width={371} />
          <p className="text-2xl sm:text-4xl mt-4 sm:mt-10">{male.name}</p>
          <div className="jost text-gray-400 mt-1 sm:mt-3 text-sm sm:text-base">
            <p>{male.childOrder}</p>
            <p>{male.parents}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionIntroduceBride
