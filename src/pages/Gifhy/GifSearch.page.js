import React, { useContext, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useMobile from "../../hooks/useMobile";
import { Input, message } from "antd";
import { fetchGifs } from "../../services/searchService";
import routes from "../../routes";
import "../../assets/css/gif.css";
import { GifContext } from "../../Utils/context";
import logo from "../../assets/images/Smartcheck Logo.svg";

const { Search } = Input;
const GifSearchPage = (props) => {
  let location = useLocation();
  const history = useHistory();
  const mobile = useMobile();
  const { gifData, setGifData } = useContext(GifContext);
  const [isLoading, setIsLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const onSearch = async (value) => {
    setIsLoading(true);
    const response = await fetchGifs(value);
    setIsLoading(false);
    if (response.ok) {
      setGifs(response.data?.data);
    } else {
      message.error(response.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <section className="gif">
        <br />
        <br />
        {isLoading ? (
          <div
            id={"flex-container"}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="box">
              <img
                src={logo}
                alt=""
                className="img-fluid"
                style={{ width: "20rem" }}
              />
              <br />
              <p className="text-center">Loading......</p>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <Search
                  placeholder="Search all gifs and stickers"
                  onSearch={onSearch}
                  enterButton
                />
                <br />
                <div>
                  <div className="thumbnailGridContainer">
                    {gifs?.map((item) => (
                      <div
                        className="position-relative cursor"
                        onClick={() => {
                          history.push(`${routes.GIF_DETAILS}/${item?.id}`);
                          setGifData(item);
                        }}
                        key={item?.id}
                      >
                        <img
                          src={item?.images?.downsized?.url}
                          alt=""
                          className="galleryImgThumbnail"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default GifSearchPage;
