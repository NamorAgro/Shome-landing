'use client'

import Image from "next/image"
import background from '../../../public/discount-card.jpg'
import background_mobile from '../../../public/discount-card_mobile.jpg'

import { useState, useEffect } from "react";

export default function ThirdScreenImage() {

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
    <Image src={isMobile?background_mobile : background} alt="" className="absolute w-full h-full mix-blend-overlay object-cover object-center">
      
    </Image>
  )
}
