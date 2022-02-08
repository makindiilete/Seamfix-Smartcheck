import React, { useEffect } from "react";
import NavigationPage from "../components/NavigationPage";

const PublicAreaBase = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);
  return (
    <div>
      <NavigationPage />
      {children}
    </div>
  );
};

export default PublicAreaBase;
