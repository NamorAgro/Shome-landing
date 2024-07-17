"use client"

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { useTranslations } from 'next-intl';

export default function GreenShopText() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    const t = useTranslations('Index')
  return (
    <div 
    ref={ref}
        style={{
            transform: isInView ? "none" : "translateX(100px) translateY(100py)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}
    className="absolute lg:p-32 lg:w-6/12 lg:h-2/4 backdrop-blur-md sm:top-10 sm:h-1/3 sm:w-full sm:px-5 sm:pt-4 lg:top-0 z-50 ">
        <h1 
        ref={ref}
        style={{
            transform: isInView ? "none" : "translateX(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className="text-white leading-none mb-7">{t('fisicCardTitle')}</h1>
        <p
        ref={ref}
        style={{
            transform: isInView ? "none" : "translateX(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
        }}
        >{t('fisicCardText')}</p>
    </div>

  )
}