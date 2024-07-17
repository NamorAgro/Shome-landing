import {useTranslations} from 'next-intl';
import FirstBlock from '@/components/firstBlock';
import SecondBlock from '@/components/secondBlock';
import ThirdBlock from '@/components/thirdBlock';
import GreenShopBlock from '@/components/greenShopBlock';
import EcoBlock from '@/components/eco';
import PhoneApp from '@/components/phoneApp';
import ShomeBots from '@/components/shomeBots';
import SafetyBlock from '@/components/safety';
import Form from '@/components/form'

export default function Index() {
  const t = useTranslations('Index');
  return (
  <>
    <FirstBlock/>
    <SecondBlock/>
    <ThirdBlock/>
    <GreenShopBlock/>
    <PhoneApp/>
    <ShomeBots/>
    <SafetyBlock/>
    <EcoBlock/>
  </>
  
)
}