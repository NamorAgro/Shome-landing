'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';


export default function FirstBlockText(){
    const t = useTranslations('Index')
    return(
        <>
            <AnimatePresence mode='wait'>
                <motion.p 
                    initial={{opacity:0,x:35}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:0.1}}
                className="text-green mb-4">{t('smallTitle')}</motion.p>
                    <motion.h1 
                    initial={{opacity:0,x:35}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:0.3}}
                    className="text-white leading-none mb-10">
                        {t('title')}<span className="text-green">shome</span>.
                    </motion.h1>
                <motion.p 
                    initial={{opacity:0,x:35}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:0.5}}
                className='text-white xl:w-8/12 sm:w-100'>
                    {t('textForMain')}
                </motion.p>
            </AnimatePresence>
        </>
    )
}