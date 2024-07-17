"use client"


import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { useTranslations } from 'next-intl';

export default function SafetyText() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    const t = useTranslations('Index')
  
    return (
    
    <div className="lg:w-2/6 sm:w-full pb-12"> 
        <h1 
        ref={ref}
        style={{
            transform: isInView ? "none" : "translateX(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}
        className="text-white">{t('safetyTitle')}</h1>
        <p
        ref={ref}
        style={{
            transform: isInView ? "none" : "translateX(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        >{t('safetyText')}</p>   
    </div>

  )
}