import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import useMobile from "../../hooks/useMobile";
import "../../assets/css/healthCheck.css";

const HealthCheckResultDouble = ({ visible, onCancel }) => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const mobile = useMobile();
  return (
    <Modal
      centered
      visible={visible}
      onCancel={onCancel}
      width={mobile ? "100vw" : "60vw"}
      closable
      footer={null}
      closeIcon={
        <FontAwesomeIcon
          icon={icons.faTimesCircle}
          className="text-dark"
          size="lg"
        />
      }
      style={{
        overflow: "hidden",
        paddingBottom: 0,
      }}
    >
      <div className="py-5">
        <h4>Health Check Result</h4>
        <br />
        <div className="d-block d-md-flex justify-content-md-around position-relative">
          <div className="health__check__card mr-md-3 mb-3 mb-md-0">
            <div className="health__check__card-item">
              <p className="padding-none mr-4">App Name 1</p>
              <div className="health__check__card-live" />
            </div>
            <div className="health__check__card-item">
              <p className="padding-none mr-4">Endpoint</p>
            </div>{" "}
            <div className="health__check__card-item pl-3">
              <FontAwesomeIcon
                icon={icons.faArrowRight}
                size=""
                className="mr-4"
              />
              <p className="padding-none mr-5">Server 1</p>
              <div className="health__check__card-live" />
            </div>
            <div className="health__check__card-item pl-3">
              <FontAwesomeIcon
                icon={icons.faArrowRight}
                size=""
                className="mr-4"
              />
              <p className="padding-none mr-5">Server 2</p>
              <FontAwesomeIcon
                icon={icons.faTimes}
                size=""
                className="text-danger"
              />
            </div>
            <div className="health__check__card-item pl-3">
              <FontAwesomeIcon
                icon={icons.faArrowRight}
                size=""
                className="mr-4"
              />
              <p className="padding-none mr-5">Server 3</p>
              <FontAwesomeIcon icon={icons.faCheck} size="" />
            </div>
            <div className="health__check__card-item pl-3">
              <FontAwesomeIcon
                icon={icons.faArrowRight}
                size=""
                className="mr-4"
              />
              <p className="padding-none mr-5">Server 4</p>
              <FontAwesomeIcon icon={icons.faCheck} size="" />
            </div>
          </div>
          {mobile && (
            <p
              className="primary-text text-right mt-3 cursor"
              style={
                !mobile ? { marginRight: "10rem", position: "absolute" } : null
              }
            >
              <FontAwesomeIcon icon={icons.faRedo} size="" className="mr-4" />
              Refresh
            </p>
          )}
          <div className="health__check__card">
            <div className="health__check__card-item">
              <p className="padding-none mr-4">App Name 1</p>
              <div className="health__check__card-live" />
            </div>
            <div className="health__check__card-item">
              <p className="padding-none mr-4">Endpoint</p>
            </div>{" "}
            <div className="health__check__card-item pl-3">
              <FontAwesomeIcon
                icon={icons.faArrowRight}
                size=""
                className="mr-4"
              />
              <p className="padding-none mr-5">Server 1</p>
              <div className="health__check__card-live" />
            </div>
            <div className="health__check__card-item pl-3">
              <FontAwesomeIcon
                icon={icons.faArrowRight}
                size=""
                className="mr-4"
              />
              <p className="padding-none mr-5">Server 2</p>
              <FontAwesomeIcon
                icon={icons.faTimes}
                size=""
                className="text-danger"
              />
            </div>
            <div className="health__check__card-item pl-3">
              <FontAwesomeIcon
                icon={icons.faArrowRight}
                size=""
                className="mr-4"
              />
              <p className="padding-none mr-5">Server 3</p>
              <FontAwesomeIcon icon={icons.faCheck} size="" />
            </div>
            <div className="health__check__card-item pl-3">
              <FontAwesomeIcon
                icon={icons.faArrowRight}
                size=""
                className="mr-4"
              />
              <p className="padding-none mr-5">Server 4</p>
              <FontAwesomeIcon icon={icons.faCheck} size="" />
            </div>
          </div>
        </div>
        {!mobile && (
          <p
            className="primary-text text-right mt-3 cursor"
            style={
              !mobile ? { marginRight: "10rem", position: "absolute" } : null
            }
          >
            <FontAwesomeIcon icon={icons.faRedo} size="" className="mr-4" />
            Refresh
          </p>
        )}
        <p
          className="primary-text text-right mt-3 cursor"
          style={
            !mobile
              ? { marginRight: "10rem", position: "absolute", right: "0" }
              : null
          }
        >
          <FontAwesomeIcon icon={icons.faRedo} size="" className="mr-4" />
          Refresh
        </p>
        <br />
        <br />
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default HealthCheckResultDouble;
