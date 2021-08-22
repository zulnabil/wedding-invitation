import type { NextPage } from "next"

import Layout from "@/layouts/components/layout.component"

import SectionAutoPlayVideo from "./home/autoplay-video.section"
import SectionLoveWords from "./home/love-words.section"
import SectionIntroduceBride from "./home/introduce-bride.section"
import SectionPhotoSlider from "./home/photo-slider.section"
import SectionVideoPreview from "./home/video-preview.section"
import SectionCountdown from "./home/count-down.section"
import SectionDatePlace from "./home/date-place.section"
import SectionMapLocation from "./home/map-location.section"
import SectionGuestBook from "./home/guest-book.section"
import SectionWishes from "./home/wishes.section"

import {
  BRIDE,
  DATE,
  TIME,
  LOVE_WORDS,
  PHOTOS,
  VIDEO_PREVIEW_EMBED,
  PLACE,
  MAP_LOCATION_EMBED,
  WISHES,
} from "@/common/constants/config.constant"

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="pb-24">
        <SectionAutoPlayVideo
          maleNickname={BRIDE.male.nickName}
          femaleNickname={BRIDE.female.nickName}
          date={DATE}
          time={TIME}
        />

        <SectionLoveWords text={LOVE_WORDS} />

        <SectionIntroduceBride male={BRIDE.male} female={BRIDE.female} />

        <SectionPhotoSlider images={PHOTOS} />

        <SectionVideoPreview embedHtml={VIDEO_PREVIEW_EMBED} />

        <SectionCountdown />

        <SectionDatePlace place={PLACE} date={DATE} time={TIME} />

        <SectionMapLocation embedHtml={MAP_LOCATION_EMBED} />

        <SectionGuestBook />

        <SectionWishes wishes={WISHES} />
      </div>
    </Layout>
  )
}

export default Home
