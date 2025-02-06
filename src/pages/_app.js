import MainLayout from '../layouts/MaindLayout';
import '../styles/globals.scss'; // Mantenha isso para o estilo global
import '../components/summary/index.scss';
import '../components/skills/index.scss';
import '../components/navbar/index.scss';
import '../components/footer/index.scss';
import '../components/cards/index.scss';


function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
