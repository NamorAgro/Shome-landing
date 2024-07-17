import Image from "next/image"
import backImage from '../../public/people_ir_rest.png'

import SecondBlockIcons from "./textComponents/secondBlockIcons"

import SecondScreenText from "./textComponents/secondScreenText"
import SecondButtonBlock from "./textComponents/secondButton"

export default function SecondBlock() {
  return (
    <section id="card" className="bg-gradient-to-b from-dark-blue to-blue w-screen lg:pl-32 lg:pr-32 lg:pt-20 lg:pb-20 sm:pl-5 sm:pt-20 sm:pr-5 sm:pb-16 overflow-x-hidden">
        <div className="">
            <div className="flex flex-col lg:flex-row  justify-between mb-12">
               <SecondScreenText></SecondScreenText>
                <div className="flex items-end sm:mt-10">
                    <SecondButtonBlock></SecondButtonBlock>
                </div>
            </div>
            <div className="relative section-screen w-full h-40 rounded-xl">
                <Image className="absolute object-cover rounded-3xl" src={backImage} alt="" fill={true}></Image>
                <div className="relative h-full w-full">
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-11/12 border-t border-white border-opacity-40">
                        <SecondBlockIcons></SecondBlockIcons>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
