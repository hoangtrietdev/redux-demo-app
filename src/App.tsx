import React, { FC, Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import firebase from "firebase";
import SignIn from "features/Auth/pages/SignIn";
import { useDispatch } from "react-redux";
import { getMe } from "app/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const Photo = React.lazy(() => import("./features/Photo"));

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};

firebase.initializeApp(config);

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        console.log(user?.displayName);
        const token = user?.getIdToken();
        console.log(token);
        const action = await dispatch(getMe());
        await unwrapResult(action);
      });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
