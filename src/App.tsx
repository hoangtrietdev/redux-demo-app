import React, { FC, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

const Photo = React.lazy(() => import("./features/Photo"));

const App: FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
