import { Routes, Route } from 'react-router-dom';

import Home from './Routes/Home/Home';
import Navbar from './Routes/Navigation/Navbar';
import Auth from './Routes/Auth/auth';
import Shop from './Routes/Shop/Shop.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
