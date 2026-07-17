import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import BestSellers from '../components/BestSellers';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
  <Helmet>
    <title>
      WorkShelf | Books, Office & Business Supplies
    </title>

    <meta
      name="description"
      content="Shop books, office supplies and business essentials at WorkShelf."
    />

    <meta
      name="keywords"
      content="books, office supplies, business products, stationery"
    />
  </Helmet>
      <Navbar />
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <BestSellers />
      <Footer />
    </>
  );
};

export default HomePage;