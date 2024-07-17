import Image from "next/image"
import sheld from '../../public/sheld.png'
import SafetyText from './textComponents/safetyText'

export default function SafetyBlock() {
  return (
    <div id="safe" className="bg-dark-bg w-full lg:px-32 sm:px-5 pb-12 pt-12 overflow-x-hidden">
        <SafetyText></SafetyText>
      <div className="relative w-full safeImage">
            <Image src={sheld} alt="" className="imageBackground rounded-3xl" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
        
        </div>
    </div>
  )
}
