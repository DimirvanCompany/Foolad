/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'fa'], // زبان‌ها
        defaultLocale: 'fa',   // زبان پیش‌فرض
        localeDetection: false, // شناسایی خودکار زبان
    },
};

export default nextConfig;
