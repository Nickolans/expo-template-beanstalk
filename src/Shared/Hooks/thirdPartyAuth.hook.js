// Auth Services
import appleAuth from '@invertase/react-native-apple-authentication';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { authService } from '../Services/auth.service';
import config from '../../../config.json';

const useThirdPartyAuth = () => {
  const handleAppleSignIn = async () => {
    try {
      //  1. Perform request
      const response = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      console.log(response);

      // 2. Log in with auth service
      authService.loginWithApple(response);
    } catch (error) {
      switch (error.code) {
        case (appleAuth.Error.CANCELED):
          console.error('Apple Auth Error: Cancelled');
          break;
        default:
          console.error('Apple Auth Error: Failed', error);
          break;
      }
    }
  };

  const handleGoogleSignIn = async () => {
    // 1. Configure TODO: move this somewhere else
    GoogleSignin.configure({
      iosClientId: config.googleiOSClientId,
    });

    // 2. Sign in
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      // 3. Log in with auth service
      await authService.loginWithGoogleToken(userInfo);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  const handleGoogleSignOut = () => {
    try {
      GoogleSignin.signOut();
    } catch (error) {
      console.error('Error signing out with Google', error);
    }
  };

  return { handleAppleSignIn, handleGoogleSignIn, handleGoogleSignOut };
};

export default useThirdPartyAuth;
