import { Routes, Route } from 'react-router-dom';

import Home from './Routes/Home/Home';
import Navbar from './Routes/Navigation/Navbar';
import Auth from './Routes/Auth/auth';
import Shop from './Routes/Shop/Shop.component';
import Checkout from './Routes/Checkout/Checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
