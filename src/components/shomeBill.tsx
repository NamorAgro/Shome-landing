import Image from "next/image"
import withBoy from '../../public/withBoy.png'
import pig from '../../public/pig.png'

export default function ShomeBill() {
  return (
    <div className="gap-12 px-32 pb-12 back bg-dark-bg w-full overflow-x-hidden">
        <div className="relative w-full h-full">
            <Image src={withBoy} alt="" className="imageBackground rounded-3xl" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
            <div className="landingText w-6/12 pl-7 pt-7 pb-20">
                <p className="">Наши роботы помощники помогут вам проанализировать вашу статистику и потребности.</p>
            </div>
        </div>
        <div className="relative w-full h-3/6">
            <Image src={pig} alt="" className="imageBackground rounded-3xl" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
            <div className="landingText w-6/12 pl-7 pt-7 pb-20">
                <p className="">Наши роботы помощники помогут вам проанализировать вашу статистику и потребности.</p>
            </div>
        </div>
    </div>
  )
}
