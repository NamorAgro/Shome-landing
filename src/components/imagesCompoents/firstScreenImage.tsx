'use client'

import { useState, useEffect } from "react"
import Image from "next/image";
import background from '../../../public/girl_with_card.jpg'
import backgroundMobile from '../../../public/girl_with_card_mobile.jpg'

export default function FirstScreenImage() {

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
        <Image src={isMobile?backgroundMobile:background} alt="" className="absolute w-full h-full mix-blend-overlay object-cover object-right"></Image>
    )
}
