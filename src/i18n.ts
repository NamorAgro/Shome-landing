import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Список поддерживаемых локалей
const locales = ['lv', 'ru'];

// Функция для получения сообщений
export async function getMessages(locale: string) {
  if (!locales.includes(locale)) notFound();

  return (await import(`../messages/${locale}.json`)).default;
}

// Экспортируем конфигурацию запроса
export default getRequestConfig(async ({ locale }) => {
  return {
    messages: await getMessages(locale)
  };
});