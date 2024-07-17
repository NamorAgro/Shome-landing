'use clien t'
import { useState } from "react";
import { useTranslations } from 'next-intl';
import Form from "./form";

export default function FormOpen (){

    const [isOpened, setIsOpened] = useState(false)
    const t = useTranslations('Navigation');

    const toogleOpened = () => {
        setIsOpened(false)
    }

    return(
        <>
        <button className="text-white lg:px-2 bg-green rounded-lg lg:block sm:hidden" onClick={() => {setIsOpened(!isOpened)}}>{t('button')}</button>
        <Form isOpened={isOpened} close={toogleOpened}/>
        </>
    )
}