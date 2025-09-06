import Head from 'next/head';
import LandingPage from '../src/components/LandingPage';

export default function Home() {
    return (
        <>
            <Head>
                <title>신년 다짐 게시판</title>
                <meta
                    name="description"
                    content="신년 다짐 게시판 - 가족과 함께하는 2026년 목표"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lexend:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <LandingPage />
        </>
    );
}
