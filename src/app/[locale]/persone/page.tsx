import { useTranslations } from 'next-intl';

export default function Privacy(){
    const t = useTranslations('Persone');

    

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
                    <p className=''>{t('blocks.transfer.texts.point2')}</p>
                    <p className=''>{t('blocks.transfer.texts.point3')}</p>
                    <p className=''>{t('blocks.transfer.texts.point4')}</p>
                    <p className=''>{t('blocks.transfer.texts.point5')}</p>
                    <p className=''>{t('blocks.transfer.texts.point6')}</p>
                    <p className=''>{t('blocks.transfer.texts.point7')}</p>
                </div>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.atbildiba.title')}</h2>
                    <p className=''>{t('blocks.atbildiba.texts.point1')}</p>
                    <p className=''>{t('blocks.atbildiba.texts.point2')}</p>
                    <p className=''>{t('blocks.atbildiba.texts.point3')}</p>
                </div>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.nosacijumi.title')}</h2>
                    <p className=''>{t('blocks.nosacijumi.texts.point1')}</p>
                    <p className=''>{t('blocks.nosacijumi.texts.point2')}</p>
                </div>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.noteikumi.title')}</h2>
                    <p className=''>{t('blocks.noteikumi.texts.point1')}</p>
                    <p className=''>{t('blocks.noteikumi.texts.point2')}</p>
                    <p className=''>{t('blocks.noteikumi.texts.point3')}</p>
                </div>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.kontakti.title')}</h2>
                    <p className=''>{t('blocks.kontakti.texts.point1')}</p>
                </div>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.atgriesanas.title')}</h2>
                    <p className=''>{t('blocks.atgriesanas.texts.point1')}</p>
                    <p className=''>{t('blocks.atgriesanas.texts.point2')}</p>
                    <p className=''>{t('blocks.atgriesanas.texts.point3')}</p>
                </div>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.politika.title')}</h2>
                    <p className=''>{t('blocks.politika.texts.point1')}</p>
                    <p className=''>{t('blocks.politika.texts.point2')}</p>
                </div>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.programma.title')}</h2>
                    <p className=''>{t('blocks.programma.texts.point1')}</p>
                    <p className=''>{t('blocks.programma.texts.point2')}</p>
                    <p className=''>{t('blocks.programma.texts.point3')}</p>
                </div>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.dati.title')}</h2>
                    <p className=''>{t('blocks.dati.texts.point1')}</p>
                    <p className=''>{t('blocks.dati.texts.point2')}</p>
                    <p className=''>{t('blocks.dati.texts.point3')}</p>
                </div>
                <div className='pt-10'>
                    <h2 className='text-white'>{t('blocks.dalibas.title')}</h2>
                    <p className=''>{t('blocks.dalibas.texts.point1')}</p>
                    <p className=''>{t('blocks.dalibas.texts.point2')}</p>
                    <p className=''>{t('blocks.dalibas.texts.point3')}</p>
                </div>
                <div className='pt-10'>
                    <p className='text-white'>{t('blocks.jur.title')}</p>
                </div>
            </div>
        </>
    );
}