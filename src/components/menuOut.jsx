import Link from "next/link";
import { useTranslations } from 'next-intl';
import styles from './header.module.css';
import { motion } from 'framer-motion';
import { menuSlide } from './anim';

export default function MenuOut({onClose}) {
    const t = useTranslations('Navigation');
    return (
        <motion.div 
            variants={menuSlide}
            animate='enter'
            exit='exit'
            initial='initial'
            className={styles.mobileMenu}
        >
            <div className={styles.menuBody}>
                <Link href='/'>{t('main')}</Link>
                <Link href='/#card'>{t('card')}</Link>
                <Link href='/#app'>{t('app')}</Link>
                <Link href='/#safe'>{t('safe')}</Link>
                <Link href='/#eco'>{t('eco')}</Link>
                <button className="btn-green mt-20" onClick={onClose}>
                    Оформить карту
                </button>
            </div>
        </motion.div>
    );
}