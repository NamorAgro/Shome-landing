'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import botsBack from '../../../public/bots.png'
import botsBackMobile from '../../../public/bots_mobile.jpg'


export default function ShomeBotImage() {
    const [isMobile, setIsMobile] = useState(false)
    
    useEffect(() => {
        function handleResize(){
            setIsMobile(window.innerWidth < 1024)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    }, [])
  return (
    <>
      <Image src={isMobile ? botsBackMobile : botsBack} alt="" className="absolute w-full h-full object-cover object-top rounded-3xl"></Image>
    </>
  )
}
