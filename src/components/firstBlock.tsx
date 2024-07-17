
import FirstScreenImage from "./imagesCompoents/firstScreenImage"

import FirstBlockText from "./textComponents/firstScreetText"

export default function FirstBlock() {


  return (
    <>
      <section id="main" className='overflow-x-hidden lg:bg-gradient-to-r from-black-4 via-black-2 to-black-0 relative section-screen '>
        <FirstScreenImage></FirstScreenImage>
        <div className="absolute sm:top-20 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-3/6 sm:w-10/12 flex-col items-center justify-center lg:pl-20 sm:pl-5">
          <FirstBlockText></FirstBlockText>
        </div>
    </section>
    </>
  )
}
