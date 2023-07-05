import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  createUserFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';

import { Routes, Route } from 'react-router-dom';

import Home from './Routes/Home/Home';
import Navbar from './Routes/Navigation/Navbar';
import Auth from './Routes/Auth/auth';
import Shop from './Routes/Shop/Shop.component';
import Checkout from './Routes/Checkout/Checkout.component';
import { setCurrentUser } from './Store/reducers/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
