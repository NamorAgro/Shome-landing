import Image from "next/image"
import mobile from '../../public/phone.png'
import PhoneAppText from "./textComponents/phoneAppText"

import { useTranslations } from 'next-intl';

export default function PhoneApp() {
    const t = useTranslations('Index')
  return (
    <section className="overflow-x-hidden w-screen lg:h-screen bg-dark-bg relative">
        <Image src={mobile} alt="" className="absolute w-6/12 h-4/6 object-contain left-1/2 transform -translate-x-1/2 lg:translate-y-1/3 sm:translate-y-14"></Image>
        <div className="flex flex-col w-full min-h-full">
            <PhoneAppText></PhoneAppText>
            <div className="lg:flex-auto sm:h-60"></div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-9 sm:gap-4 rounded-3xl px-12 pb-12">
                <div className=" lg:p-6 sm:p-3 backdrop-blur-xl bg-blur-blue rounded-3xl sm:text-center lg:text-left lg:h-60 sm:h-28">
                    <p className="lg:text-3xl">{t('appChild1')}</p>
                    <p className="absolute bottom-5 right-5 opacity-10 text-2xl">01</p>
                </div>
                <div className=" lg:p-6 sm:p-3 backdrop-blur-xl bg-blur-yellow rounded-3xl sm:text-center lg:text-left lg:h-60 sm:h-28">
                    <p className="lg:text-3xl">{t('appChild2')}</p>
                    <p className="absolute bottom-5 right-5 opacity-10 text-2xl">02</p>
                </div>
                <div className=" lg:p-6 sm:p-3 backdrop-blur-xl bg-blur-green rounded-3xl sm:text-center lg:text-left lg:h-60 sm:h-28">
                    <p className="lg:text-3xl">{t('appChild3')}</p>
                    <p className="absolute bottom-5 right-5 opacity-10 text-2xl">03</p>
                </div>
                <div className=" lg:p-6 sm:p-3 backdrop-blur-xl bg-blur-red rounded-3xl sm:text-center lg:text-left lg:h-60 sm:h-28">
                    <p className="lg:text-3xl">{t('appChild4')}</p>
                    <p className="absolute bottom-5 right-5 opacity-10 text-2xl">04</p>
                </div>
            </div>
        </div>
    </section>
  )
}
