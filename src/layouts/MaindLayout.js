import Head from 'next/head';

export default function MainLayout({ children }) {
    return (
        <>
            <Head>
                <html lang="pt-br" />
                <title>Luan Meira Quevedo - Portfólio</title>
                <meta name="description" content="Portfólio de Luan Meira Quevedo, desenvolvedor web." />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main>{children}</main>

        </>
    );
}
