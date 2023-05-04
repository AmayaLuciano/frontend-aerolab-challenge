import Header from './components/Header';
import Hero from './components/Hero';
import Walkthrough from './components/Walkthrough';
import Products from './components/Products';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* @ts-expect-error Server Component */}

      <Header />

      <Hero />

      <Walkthrough />

      {/* @ts-expect-error Async Server Component */}
      <Products />
      <Footer />
    </div>
  );
}
