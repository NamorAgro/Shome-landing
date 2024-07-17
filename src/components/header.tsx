'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './local-switcher';
import Image from 'next/image';
import logoShome from '../../public/logo_shome_white.svg';
import styles from './header.module.css';
import { AnimatePresence } from 'framer-motion';
import {usePathname } from 'next/navigation';
import { useLocale } from 'use-intl';
import FormOpen from './formOpen';

import MenuOut from './menuOut'

const Header: React.FC = () => {
  const t = useTranslations('Navigation');
  const [isFixed, setIsFixed] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const locale = useLocale();
  
  const [isActive, setIsActive] = useState(false);

  const handleCloseMenu = () => {
    setIsActive(false)
  }
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
        setIsShrunk(true);
      } else {
        setIsFixed(false);
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isFixed ? styles.fixed : ''} ${isShrunk ? styles.shrunk : ''}`}>
      <Link href={`/${locale}`}>
        <Image src={logoShome} alt="Logo" className="lg:w-40 sm:w-24" />
      </Link>
      <nav className="lg:flex items-center justify-between gap-8 sm:hidden">
        <Link className='text-white' href={`/${locale}`}>{t('main')}</Link>
        <Link className='text-white' href={`/${locale}/#card`}>{t('card')}</Link>
        <Link className='text-white' href={`/${locale}/#app`}>{t('app')}</Link>
        <Link className='text-white' href={`/${locale}/#safe`}>{t('safe')}</Link>
        <Link className='text-white' href={`/${locale}/#eco`}>{t('eco')}</Link>
      </nav>
      <div className='flex'>
        <LocaleSwitcher />
        <FormOpen/>
      </div>
      <button className={styles.menu} onClick={() => setIsActive(!isActive)}>
        <span className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}>
        
        </span>
      </button>
      <AnimatePresence mode='wait'>
        {isActive && <MenuOut onClose={handleCloseMenu}/>}
      </AnimatePresence>
    </header>
  );
};

export default Header;