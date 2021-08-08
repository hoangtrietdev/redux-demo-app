import firebase from "firebase";
import React, { useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

const SignInScreen = () => {
  const history = useHistory();
  const { current } = useSelector((state: any) => state.user);
  const { id } = current;

  useEffect(() => {
    if (id) {
      history.push("/photos");
    }
  }, [current]);

  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default SignInScreen;
