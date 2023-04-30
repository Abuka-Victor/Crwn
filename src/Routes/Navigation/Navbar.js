import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../../Components/Cart-Icon/cart-icon.component';
import CartDropdown from '../../Components/Cart-DropDown/cart-dropdown.component';

import { userContext } from '../../Contexts/User.context';
import { cartContext } from '../../Contexts/Cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from './navigation.styles';

const Navbar = () => {
  const { currentUser } = useContext(userContext);
  const { open, setOpen } = useContext(cartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN-IN</NavLink>
          )}
          <CartIcon onClick={() => setOpen((open) => !open)} />
        </NavLinks>
        {open && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
