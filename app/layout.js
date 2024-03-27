import MainHeader from '@/components/main-header/main-header.js';
import './globals.css';

export const metadata = {
  title: 'Next Level Food',
  description: 'Comidas deliciosas e no próximo nível! Para dar um level up no seu paladar.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
