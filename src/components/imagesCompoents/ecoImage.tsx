'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import botsBack from '../../../public/logo_as_greenpice.png'
import botsBackMobile from '../../../public/3d-logo-mobile.png'



export default function EcoImage() {
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
    <Image src={isMobile?botsBackMobile:botsBack} alt="" className="absolute w-full h-full object-cover"></Image>
  )
}
