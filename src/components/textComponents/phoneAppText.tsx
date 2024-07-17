"use client"

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { useTranslations } from 'next-intl';

export default function PhoneAppText() {
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
             className="lg:pl-32 pt-20 sm:pl-5">
                <h1 className="text-white">{t('phoneAppTitle')}</h1>
                <p>{t('phoneAppText')}</p>
            </div>


  )
}
