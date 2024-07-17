"use client"

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { useTranslations } from 'next-intl';


export default function EcoText() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})

    const t = useTranslations('Index')

  return (

    <div className="lg:pl-32 sm:px-5 absolute w-full mt-20">
                <h1 
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                }}
                className="text-white">{t('ecoTitle')}</h1>
                <div className="lg:w-4/12 sm:w-8/12">
                    <p 
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                    className="my-7">{t('ecoText1')}</p>
                    <p
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                    }}
                    >{t('ecoText2')}</p>
                </div>
            </div>
    

  )
}