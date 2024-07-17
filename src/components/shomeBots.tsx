import Image from "next/image"

import logo from '../../public/logoBot.svg'
import withBoy from '../../public/withBoy.png'
import pig from '../../public/pig.png'

import ShomeBotImage from "./imagesCompoents/shomeBotImage"

import ShomeBotsTitle from "./textComponents/shomeBotsTitle"
import ChildText from "./textComponents/childText"
import PigText from "./textComponents/pigText"

export default function ShomeBots() {
  return (
    <section className="bg-dark-bg w-full lg:px-32 lg:pb-12 sm:px-5 overflow-x-hidden">
        <div className="relative w-full lg:h-full sm:h-screen">
           <ShomeBotImage></ShomeBotImage>
            <ShomeBotsTitle></ShomeBotsTitle>
        </div>
        <div className="flex lg:flex-row sm:flex-col gap-12 pt-12 w-full">
            <div className="relative w-full  pb-60">
                <Image src={withBoy} alt="" className="imageBackground rounded-3xl" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
                <ChildText></ChildText>
            </div>
            <div className="relative w-full pb-60">
                <Image src={pig} alt="" className="imageBackground rounded-3xl" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
                <PigText></PigText>
            </div>
        </div>
    </section>
  )
}
