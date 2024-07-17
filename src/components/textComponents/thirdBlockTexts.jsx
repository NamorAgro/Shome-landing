"use client"

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { useTranslations } from 'next-intl';

export default function ThirdBlockText() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    const t = useTranslations('Index')
  return (
    <div className="lg:w-4/6 mb-10">
                <p 
                 ref={ref}
                 style={{
                     transform: isInView ? "none" : "translateX(100px)",
                     opacity: isInView ? 1 : 0,
                     transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                 }}
                className="text-white my-7">{t('thirdText1')}</p>
                <p 
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                className="text-white">{t('thirdText2')}</p>
    </div>

  )
}