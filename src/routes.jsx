import React from "react";
import { Switch, Route } from "react-router-dom";

import New from "./views/New";
import Feed from "./views/Feed";

export default _ => (
  <Switch>
    <Route path="/" exact component={Feed}></Route>
    <Route path="/new" component={New}></Route>
  </Switch>
);
