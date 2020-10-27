import React from 'react';
import { Switch } from "react-router-dom";


import { RestrictedRoutes } from "./components/Routes/RestrictedRoutes";
import { UnrestrictedRoutes } from "./components/Routes/UnrestrictedRoutes";


export const App = () => {
  return (
    <div className="App">
        <Switch>
          <UnrestrictedRoutes exact />

          <RestrictedRoutes />
      </Switch>
    </div>
  );
}

