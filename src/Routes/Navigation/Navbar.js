import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../../Components/Cart-Icon/cart-icon.component';
import CartDropdown from '../../Components/Cart-DropDown/cart-dropdown.component';

import { userContext } from '../../Contexts/User.context';
import { cartOpenContext } from '../../Contexts/CartOpen.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navbar = () => {
  const { currentUser } = useContext(userContext);
  const { open, setOpen } = useContext(cartOpenContext);

  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
          <CartIcon onClick={() => setOpen((open) => !open)} />
        </div>
        {open && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
