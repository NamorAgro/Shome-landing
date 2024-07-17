import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Список поддерживаемых локалей
  locales: ['lv', 'ru'],

  // Используется, когда нет совпадающих локалей
  defaultLocale: 'lv'
});

export const config = {
  // Соответствует только интернационализированным путям
  matcher: ['/', '/(lv|ru)/:path*']
};