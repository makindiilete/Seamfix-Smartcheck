import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import PublicAreaBase from "../BaseLayout/PublicAreaBase";

const PublicAreaRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        return (
          <PublicAreaBase>
            <Component {...matchProps} />
          </PublicAreaBase>
        );
      }}
    />
  );
};

export default PublicAreaRoute;
