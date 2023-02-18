import SignUpForm from '../../Components/Sign-up-form/sign-up-form.component';
import {
  createUserFromAuth,
  SignInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await SignInWithGooglePopup();
    const userRef = await createUserFromAuth(response.user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
