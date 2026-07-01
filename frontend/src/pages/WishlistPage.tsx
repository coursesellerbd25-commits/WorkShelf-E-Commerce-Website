import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WishlistItem from '../components/WishlistItem';

const WishlistPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          {/* Heading */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Wishlist
            </h1>

            <p className="mt-2 text-slate-500">
              3 Items
            </p>
          </div>

          {/* Wishlist Items */}
          <div className="mt-10 space-y-6">

            <WishlistItem />
            <WishlistItem />
            <WishlistItem />

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default WishlistPage;