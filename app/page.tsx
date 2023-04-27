import Header from './components/Header';
import Hero from './components/Hero';
import Walkthrough from './components/Walkthrough';
import Products from './components/Products';

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}

      <Header />

      <Hero />

      <Walkthrough />

      {/* @ts-expect-error Async Server Component */}
      <Products />
    </>
    //  <Footer />
  );
}

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM5ODQ2MDdiNWE0NTAwMjFiNWY1MDEiLCJpYXQiOjE2ODE0OTEwNDB9.M9Mdl9O9jqyO1Nxy0Jaw0rXoa_k07fo_hE7-Rv3eKvY`,
};
