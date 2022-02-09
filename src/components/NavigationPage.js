import React, { useEffect, useState } from "react";
import "../assets/css/Navigation.css";
import logo from "../assets/images/Smartcheck Logo White@0.75x.svg";
import server from "../assets/images/Group 42581.svg";
import app from "../assets/images/noun_application_967926.svg";
import home from "../assets/images/noun_Home_2079957.svg";
import { useHistory, useLocation } from "react-router-dom";
import routes from "../routes";
import ContentHealthCheck from "./Modals/ContentHealthCheck";
import HealthCheckResultDouble from "./Modals/healthCheckResultDouble";
const NavigationPage = (props) => {
  const history = useHistory();
  let location = useLocation();
  const { pathname } = location;
  const current = pathname.split("/")[1];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [path, setPath] = useState(0);
  const [checkHealthStatus, setCheckHealthStatus] = useState(false);
  const [viewResult, setViewResult] = useState(false);

  useEffect(() => {
    switch (current) {
      case "home":
        setPath(0);
        break;
      case "server":
        setPath(1);
        break;
      case "app":
        setPath(2);
        break;
      // default:
      //   setPath(0);
    }
  }, [location.pathname]);
  return (
    <section className="nav">
      <div className="nav__blue">
        <img src={logo} alt="" className="img-fluid" />
      </div>
      <div className="nav__white position-relative">
        <div className="d-flex">
          <div
            className="d-flex flex-column justify-content-around nav__item"
            onClick={() => history.push(routes.HOME)}
          >
            <div className="d-flex align-items-center">
              <img src={home} className="img-fluid nav__icon" alt="" />
              <p className="text-dark padding-none">Home</p>
            </div>
            {path === 0 && <div className="nav__underline" />}
          </div>
          <div
            className="d-flex flex-column justify-content-around nav__item"
            onClick={() => history.push(routes.Server)}
          >
            <div className="d-flex align-items-center">
              <img src={server} className="img-fluid nav__icon" alt="" />
              <p className="text-dark padding-none">Server</p>
            </div>
            {path === 1 && <div className="nav__underline" />}
          </div>

          <div
            className="d-flex flex-column justify-content-around nav__item"
            onClick={() => history.push(routes.APPLICATION)}
          >
            <div className="d-flex align-items-center">
              <img src={app} className="img-fluid nav__icon" alt="" />
              <p className="text-dark padding-none">Application</p>
            </div>
            {path === 2 && (
              <div className="nav__underline nav__underline-app" />
            )}
          </div>
        </div>
        <div className="nav__btn__container mt-2 mt-md-0">
          <button
            className="btn btn-primary"
            onClick={() => setCheckHealthStatus(true)}
          >
            Check Health Status
          </button>
        </div>
      </div>
      <ContentHealthCheck
        visible={checkHealthStatus}
        onCancel={(arg) => {
          if (arg === "continue") {
            setCheckHealthStatus(false);
            setViewResult(true);
          } else {
            setCheckHealthStatus(false);
          }
        }}
      />

      <HealthCheckResultDouble
        visible={viewResult}
        onCancel={() => setViewResult(false)}
      />
    </section>
  );
};

export default NavigationPage;
