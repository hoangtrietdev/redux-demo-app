import React, { FC } from "react";
import { Switch, useRouteMatch, Route } from "react-router";
import NotFound from "../../components/NotFound";
import AddEditPage from "./pages/AddEdit";
import MainPage from "./pages/Main";

const Photo: FC = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Photo;
