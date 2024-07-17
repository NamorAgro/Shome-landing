"use client"


import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { useTranslations } from 'next-intl';

export default function SecondScreenText() {
  const t = useTranslations('Index')

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})

  return (
    <div
        className=" w-full lg:w-6/12"
    >
      <p className="mb-5"
      ref={ref}
      style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      }}>{t('second1')}</p>
      <p 
      ref={ref}
      style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>{t('second2')}</p>
    </div>
  )
}
