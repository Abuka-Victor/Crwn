import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../../Components/Cart-Icon/cart-icon.component';
import CartDropdown from '../../Components/Cart-DropDown/cart-dropdown.component';

// import { userContext } from '../../Contexts/User.context';
import { cartContext } from '../../Contexts/Cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from './navigation.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../Store/reducers/user/user.selector';
import { selectCartOpen } from '../../Store/reducers/cart/cart.selector';
import { setOpen } from '../../Store/reducers/cart/cart.action';

const Navbar = () => {
  // const { currentUser } = useContext(userContext);
  const currentUser = useSelector(selectCurrentUser);
  // const { open, setOpen } = useContext(cartContext);
  const open = useSelector(selectCartOpen);
  const dispatch = useDispatch();

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
          <CartIcon onClick={() => dispatch(setOpen(!open))} />
        </NavLinks>
        {open && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
