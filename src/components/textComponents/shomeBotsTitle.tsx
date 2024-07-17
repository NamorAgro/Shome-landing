"use client"
import Image from "next/image"

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { useTranslations } from 'next-intl';

import logo from '../../../public/logoBot.svg'

export default function ShomeBotsTitle() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    const t = useTranslations('Index')
  return (

    <div 
    ref={ref}
             style={{
                 transform: isInView ? "none" : "translateX(100px)",
                 opacity: isInView ? 1 : 0,
                 transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
             }}
    className="landingText lg:w-4/12 sm:w-8/12 pl-7 pt-7 lg:pb-80 sm:pb-96 ">
        <h1 className=" text-white">{t('helpersTitle')}</h1>
        <Image className="lg:w-28 sm:w-40" src={logo} alt=""></Image>
        <p className="mt-7">{t('helpers1')}</p>
        <p className="mt-7">{t('helpers2')}</p>
    </div>


  )
}