import SignUpForm from '../../Components/Sign-up-form/sign-up-form.component';

import SignIn from '../../Components/Sign-In/sign-in';

import './auth.scss';

const Auth = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUpForm />
    </div>
  );
};

export default Auth;
