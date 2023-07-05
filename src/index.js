import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';

// import { UserProvider } from './Contexts/User.context';
// import { CategoriesProvider } from './Contexts/Categories.context';
import { CartOpenProvider } from './Contexts/Cart.context';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import { store, persistor } from './Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          {/*<UserProvider>*/}
          {/*<CategoriesProvider>*/}
          {/*<CartOpenProvider>*/}
          <App />
          {/*</CartOpenProvider>*/}
          {/*</CategoriesProvider>*/}
          {/* </UserProvider>*/}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
