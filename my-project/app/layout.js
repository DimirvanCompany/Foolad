import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body>
        <header >
          <Header />
        </header>
        <main >{children}</main>
        <footer >© 2024 My Website</footer>
      </body>
    </html>
  );
}
