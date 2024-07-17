
import ThirdScreenImage from "./imagesCompoents/thirdScreenImage"
import ThirdBlockTitle from '../components/textComponents/thirdBlockTitle'
import ThirdBlockText from '../components/textComponents/thirdBlockTexts'
import ThirdButton from "./textComponents/thirdBlockButton"


export default function ThirdBlock() {
  return (
    <section id="app" className="relative lg:section-screen sm:mobile-screen bg-cover flex items-center overflow-x-hidden">
      <ThirdScreenImage></ThirdScreenImage>
        <div className="absolute lg:top-1/2 sm:top-10 lg:transform lg:-translate-y-1/2 lg:w-3/6 sm:w-10/12 flex-col items-center justify-center lg:pl-32 sm:pl-5">
            <ThirdBlockTitle></ThirdBlockTitle>
            <ThirdBlockText></ThirdBlockText>
            <ThirdButton></ThirdButton>
        </div>
    </section>
  )
}