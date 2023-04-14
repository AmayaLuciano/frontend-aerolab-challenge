import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Button } from '@/components/Button';
import Header from '@/components/Header';
import { AppContainer } from '@/components/styled/AppContainer.styled';
import Hero from '@/components/Hero';
import Walkthrough from '@/components/Walkthrough';
import Products from './products';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <AppContainer>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Hero />
      <Walkthrough />
      <Products />
    </AppContainer>
  );
}
