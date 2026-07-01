import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AddressCard from '../components/AddressCard';
import { useState } from 'react';
import AddressForm from '../components/AddressForm';

const AddressPage = () => {
    const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-8">

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">
                My Addresses
              </h1>

              <p className="mt-2 text-slate-500">
                Manage your shipping addresses
              </p>
            </div>

            <button
                onClick={() => setShowForm(true)}
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
                + Add Address
            </button>
            {showForm && (
                <AddressForm
                onClose={() => setShowForm(false)}
            />
            )}
          </div>

          <div className="mt-10 space-y-6">
            <AddressCard />
            <AddressCard />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default AddressPage;