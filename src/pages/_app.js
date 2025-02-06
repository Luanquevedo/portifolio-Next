import MainLayout from '../layouts/MaindLayout';
import '../styles/globals.scss'; // Mantenha isso para o estilo global
import '../src/components/summary/index.scss';
import '../src/components/skills/index.scss';
import '../src/components/navbar/index.scss';
import '../src/components/footer/index.scss';
import '../components/cards/index.scss';


function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
