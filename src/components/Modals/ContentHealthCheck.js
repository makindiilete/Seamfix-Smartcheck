import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import useMobile from "../../hooks/useMobile";
import "../../assets/css/healthCheck.css";
import Checkbox from "antd/es/checkbox/Checkbox";

const ContentHealthCheck = ({ visible, onCancel }) => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const mobile = useMobile();

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Modal
      centered
      visible={visible}
      onCancel={onCancel}
      width={mobile ? "100vw" : "50vw"}
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
        <h4>Conduct Health Check</h4>
        <br />
        <div className="d-flex align-items-center ml-5">
          <p className="font-weight-bold text-dark mr-5 padding-none">
            Applications
          </p>
          <Checkbox onChange={onChange}>All Applications</Checkbox>
        </div>
        <br />
        <p style={!mobile ? { marginLeft: "10.5rem" } : null}>
          Select Application
        </p>
        <div className="d-flex justify-content-center">
          <div className="health__check__card content__health">
            <div className="health__check__card-item pl-3">
              <Checkbox onChange={onChange}>App Name 1</Checkbox>
            </div>
            <div className="health__check__card-item pl-3">
              <Checkbox onChange={onChange}>App Name 2</Checkbox>
            </div>
            <div className="health__check__card-item pl-3">
              <Checkbox onChange={onChange}>App Name 3</Checkbox>
            </div>
            <div className="health__check__card-item pl-3">
              <Checkbox onChange={onChange}>App Name 4</Checkbox>
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex align-items-center ml-5">
          <p className="font-weight-bold text-dark mr-5 padding-none">Server</p>
          <Checkbox onChange={onChange}>All Servers</Checkbox>
        </div>
        <br />
        <p style={!mobile ? { marginLeft: "10.5rem" } : null}>Select Server</p>
        <div className="d-flex justify-content-center">
          <div className="health__check__card content__health">
            <div className="health__check__card-item pl-3">
              <Checkbox onChange={onChange}>Server 1</Checkbox>
            </div>
            <div className="health__check__card-item pl-3">
              <Checkbox onChange={onChange}>Server 2</Checkbox>
            </div>
            <div className="health__check__card-item pl-3">
              <Checkbox onChange={onChange}>Server 3</Checkbox>
            </div>
            <div className="health__check__card-item pl-3">
              <Checkbox onChange={onChange}>Server 4</Checkbox>
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-end">
          <div className="d-flex align-items-center">
            <p className="padding-none mr-4 cursor" onClick={onCancel}>
              Cancel
            </p>
            <button
              className="btn btn-primary"
              onClick={() => onCancel("continue")}
            >
              Check Health Status
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContentHealthCheck;
