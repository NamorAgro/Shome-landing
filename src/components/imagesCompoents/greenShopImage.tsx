"use client"

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import Image from 'next/image';

import card from '../../../public/hands-and-card.png'

export default function GreenShopImage() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})

  return (
    <div 
    ref={ref}
      style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      }}
    className="absolute lg:w-6/12 lg:h-2/4 backdrop-blur-md bottom-0 right-0 z-60 sm:h-1/3 sm:w-full sm:px-5 sm:pt-4">
              <div className="w-full h-full relative">
                  <Image 
                   ref={ref}
                   style={{
                       transform: isInView ? "none" : "translateX(-100px)",
                       opacity: isInView ? 1 : 0,
                       transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                   }}
                  src={card} alt="" className="h-5/6 sm:h-full w-auto absolute bottom-0 inset-x-1/4"></Image>
              </div>
          </div>

  )
}
