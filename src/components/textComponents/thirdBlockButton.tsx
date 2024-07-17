"use client"

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { useTranslations } from 'next-intl';

export default function ThirdButton() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    const t = useTranslations('Index')
  return (
    <button className="btn-green"
    ref={ref}
      style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
      }}
    >{t('thirdButton')}</button>
  )
}