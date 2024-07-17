import { useTranslations } from 'next-intl';

export default function Cookie(){
    const t = useTranslations('Cookie');

    

    return (
        <>
            <div className='sm:p-10 lg:p-48 bg-greendark'>
                <h1 className='text-white'>{t('title')}</h1>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.intro.title')}</h2>
                    <p className=''>{t('blocks.intro.text')}</p>
                </div>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.data.title')}</h2>
                    <p className=''>{t('blocks.data.texts.point1')}</p>
                    <p className=''>{t('blocks.data.texts.point2')}</p>
                    <p className=''>{t('blocks.data.texts.point3')}</p>
                    <p className=''>{t('blocks.data.texts.point4')}</p>
                </div>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.usage.title')}</h2>
                    <p className=''>{t('blocks.usage.texts.point1')}</p>
                    <p className=''>{t('blocks.usage.texts.point2')}</p>
                    <p className=''>{t('blocks.usage.texts.point3')}</p>
                    <p className=''>{t('blocks.usage.texts.point4')}</p>
                </div>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.safe.title')}</h2>
                    <p className=''>{t('blocks.safe.texts.point1')}</p>
                    <p className=''>{t('blocks.safe.texts.point2')}</p>
                    <p className=''>{t('blocks.safe.texts.point3')}</p>
                </div>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.transfer.title')}</h2>
                    <p className=''>{t('blocks.transfer.texts.point1')}</p>
                </div>
                
            </div>
        </>
    );
}