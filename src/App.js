import Home from './Routes/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Routes/Navigation/Navbar';
import SignIn from './Routes/Sign-In/sign-in';

const Shop = () => {
  return <div> I am SHOP</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
