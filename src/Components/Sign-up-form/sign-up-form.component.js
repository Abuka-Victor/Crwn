import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { createUserFromAuth } from '../../utils/firebase/firebase.utils';

import FormInput from '../Form-Input/form-input.component';
import Button from '../Button/Button.component';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  cpassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, cpassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== cpassword) return alert('Passwords do not match');

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserFromAuth(user, { displayName: name });
      resetFormFields();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('User creation failed!', err.message);
      }
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          name="name"
          onChange={changeHandler}
          value={name}
          required
        />

        <FormInput
          label="email"
          type="email"
          name="email"
          onChange={changeHandler}
          value={email}
          required
        />

        <FormInput
          label="password"
          type="password"
          name="password"
          onChange={changeHandler}
          value={password}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="cpassword"
          onChange={changeHandler}
          value={cpassword}
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
