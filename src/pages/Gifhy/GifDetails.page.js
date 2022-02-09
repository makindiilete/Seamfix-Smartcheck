import React, { useContext, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useMobile from "../../hooks/useMobile";
import { GifContext } from "../../Utils/context";
import routes from "../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

const GifDetailsPage = (props) => {
  let location = useLocation();
  const history = useHistory();
  const mobile = useMobile();
  const { gifData, setGifData } = useContext(GifContext);

  useEffect(() => {
    console.log("gif data = ", gifData);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <br />
      <br />
      <div className="container">
        <h4
          className="secondary-text cursor"
          onClick={() => history.push(routes.SEARCH)}
        >
          <FontAwesomeIcon icon={icons.faArrowLeft} size="" className="mr-3" />
          Back
        </h4>
        <h4>{gifData?.title}</h4>
        {gifData?.source && (
          <p>
            Source :{" "}
            <span
              className="cursor primary-text"
              onClick={() => window.open(gifData?.source, "_blank")}
            >
              {gifData?.source}
            </span>{" "}
          </p>
        )}
        <img
          src={gifData?.images?.downsized_large?.url}
          alt=""
          className="img-fluid"
        />
      </div>
    </>
  );
};

export default GifDetailsPage;
