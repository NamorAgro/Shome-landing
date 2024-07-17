import Image from "next/image"
import background from '../../public/green-shop.png'
import card from '../../public/hands-and-card.png'

import GreenShopText from '../components/textComponents/greenShopText'
import GreenShopImage from "./imagesCompoents/greenShopImage"

export default function GreenShopBlock() {
  return (
    <>
      <section className="overflow-x-hidden relative section-screen bg-cover bg-center">
        <Image src={background} alt="" className="w-full h-full object-cover"></Image>
          <GreenShopText/>
          <GreenShopImage></GreenShopImage>
      </section>
    </>
  )
}
