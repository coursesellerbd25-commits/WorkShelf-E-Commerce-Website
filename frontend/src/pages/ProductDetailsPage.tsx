import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import RelatedProducts from '../components/RelatedProducts';

const ProductDetailsPage = () => {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

          <Link
            to="/products"
            className="text-blue-600 hover:underline"
          >
            ← Back
          </Link>

          <div className="mt-8 grid gap-16 lg:grid-cols-2">

            <ProductGallery />

            <ProductInfo />

          </div>

          <div className="mt-20">
            <RelatedProducts />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductDetailsPage;