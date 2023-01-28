import Home from './Routes/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Routes/Navigation/Navbar';

const Shop = () => {
  return <div> I am SHOP</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
