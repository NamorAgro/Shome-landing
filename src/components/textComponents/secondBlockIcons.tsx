"use client"

import Image from 'next/image';

import bag from '../../../public/dots/bag.svg'
import qr from '../../../public/dots/qr.svg'
import birka from '../../../public/dots/birka.svg'
import up from '../../../public/dots/up.svg'
import procent from '../../../public/dots/procent.svg'

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function SecondBlockIcons() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})

  return (
    <div className="flex justify-between lg:px-20 py-16 sm:px-8">
        <Image 
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
            }}
        src={procent} alt="" className="hidden md:block lg:block"></Image>
        <Image 
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
        src={birka} alt=""></Image>
        <Image 
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
        src={bag} alt=""></Image>
        <Image 
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
            }}
        src={qr} alt=""></Image>
        <Image 
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
            }}
        src={up} alt="" className="hidden md:block lg:block"></Image>
    </div>
  )
}
