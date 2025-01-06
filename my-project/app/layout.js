import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import './globals.css';
import Footer from './components/Footer/Footer';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'react-i18next';
// import '../config/i18n';
// export async function generateMetadata({ locale }) {
//   // بارگذاری ترجمه‌ها برای زبان انتخابی
//   const translations = await serverSideTranslations(locale, ['common']);

//   return {
//     props: {
//       ...translations,
//     },
//   };
// }
export default function RootLayout({ children }) {
  // const { t } = useTranslation();
  return (
    <html lang="fa" dir='rtl'>
      <head>
        {/* <title>{t('welcome')}</title> */}
        <title>فولاد مرکزی بافق</title>
            <meta name="description" content="فولاد آلیاژی مرکزی بافق، تولیدکننده برتر انواع فولاد آلیاژی در ایران. با ما تماس بگیرید برای مشاوره رایگان." />
        </head>
      <body>
        <header >
        
          <Header />
        </header>
        <main >{children}</main>
        <footer >
          <Footer />
        </footer>
      </body>
    </html>
  );
}
