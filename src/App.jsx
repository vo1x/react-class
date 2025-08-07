import Home from './pages/Home';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Toaster } from 'sonner';

import Orders from './pages/Orders';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="min-h-screen ">
        <Router>
          <Searchbar
            setSearchResults={setSearchResults}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <Navbar />
          <Routes>
            <Route
              path="/home"
              element={<Home searchResults={searchResults} isLoading={isLoading} />}
            />

            <Route path="/product/:id/user/:userid" element={<ProductDetails />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Router>
      </div>
      <Toaster position="top-right" richColors={true} />
    </>
  );
}

export default App;
