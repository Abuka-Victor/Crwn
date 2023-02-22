import {
  createUserFromAuth,
  SignInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import Button from '../../Components/Button/Button.component';
import FormInput from '../../Components/Form-Input/form-input.component';
import { useState } from 'react';

import './sign-in-form.styles.scss';

const defaultFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    const response = await SignInWithGooglePopup();
    const userRef = await createUserFromAuth(response.user);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const signInUserWithEmailAndPasswordHandler = async () => {
    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password');
          break;
        case 'auth/user-not-found':
          alert('There is no user associated with this email');
          break;
        default:
          console.log('User could not sign in', err.message);
      }
    }
  };

  return (
    <div className="auth">
      <div className="sign-in-container">
        <h2>Already Have an acoount?</h2>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={changeHandler}
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={changeHandler}
          value={password}
          required
        />
        <div className="buttons-container">
          <Button onClick={signInUserWithEmailAndPasswordHandler}>
            Sign In
          </Button>
          <Button buttonType="google" onClick={logGoogleUser}>
            Sign In With Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
