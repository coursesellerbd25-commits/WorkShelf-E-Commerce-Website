import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';

import AddressPage from './pages/AddressPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';

import AdminLayout from './layouts/AdminLayout';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminProductsPage from './pages/AdminProductsPage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import AdminUsersPage from './pages/AdminUsersPage';
import AdminAddProductPage from './pages/AdminAddProductPage';
import ProfilePage from './pages/ProfilePage';

import { useEffect } from 'react';
import toast from 'react-hot-toast';

import { socket } from './lib/socket';
import NotificationToast from './components/NotificationToast';

function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected:', socket.id);
    });

    return () => {
      socket.off('connect');
    };
  }, []);

  useEffect(() => {
    socket.on('notification', (message) => {
      toast.custom(() => (
        <NotificationToast message={message} />
      ));
    });

    return () => {
      socket.off('notification');
    };
  }, []);
  
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />}/>

        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/addresses" element={<AddressPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />

          <Route path="products" element={<AdminProductsPage />} />
          <Route path="orders" element={<AdminOrdersPage />} />
          <Route path="/admin/customers" element={<AdminUsersPage />} />
          <Route path="/admin/products/new" element={<AdminAddProductPage />} />
        </Route>
      </Routes>
  );
}

export default App;