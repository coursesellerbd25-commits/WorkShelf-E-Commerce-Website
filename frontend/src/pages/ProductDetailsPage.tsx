import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import RelatedProducts from '../components/RelatedProducts';
import ProductCard2 from '../components/ProductCard2';

import { getRecommendations } from '../services/recommendationService';
import type { Product } from '../types/product';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const {
    data: recommendations = [],
    isLoading,
  } = useQuery<Product[]>({
    queryKey: ['recommendations', id],
    queryFn: () => getRecommendations(id!),
  });
  
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
        {recommendations.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-bold">
            You May Also Like
          </h2>

          {isLoading ? (
            <p>Loading recommendations...</p>
          ) : (
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {recommendations.map((product) => (
                <ProductCard2
                  key={product._id}
                  product={product}
                />
              ))}
            </div>
            )}
        </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ProductDetailsPage;