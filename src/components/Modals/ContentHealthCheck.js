import React, { useEffect, useState } from "react";
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

  const [appCheckAll, setAppCheckAll] = useState(false);
  const [checkedAllApps, setCheckedAllApps] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });
  const [serverCheckAll, setServerCheckAll] = useState(false);
  const [checkedAllServer, setCheckedAllServer] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  const mobile = useMobile();

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const handleCheckedAllApps = () => {
    setAppCheckAll(!appCheckAll);
  };
  const handleCheckedAllServer = () => {
    setServerCheckAll(!serverCheckAll);
  };

  useEffect(() => {
    if (appCheckAll) {
      setCheckedAllApps({
        first: true,
        second: true,
        third: true,
        fourth: true,
      });
    } else {
      setCheckedAllApps({
        first: false,
        second: false,
        third: false,
        fourth: false,
      });
    }
  }, [appCheckAll]);

  useEffect(() => {
    if (serverCheckAll) {
      setCheckedAllServer({
        first: true,
        second: true,
        third: true,
        fourth: true,
      });
    } else {
      setCheckedAllServer({
        first: false,
        second: false,
        third: false,
        fourth: false,
      });
    }
  }, [serverCheckAll]);

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
          <Checkbox
            checked={appCheckAll}
            onChange={() => handleCheckedAllApps()}
          >
            All Applications
          </Checkbox>
        </div>
        <br />
        <p style={!mobile ? { marginLeft: "10.5rem" } : null}>
          Select Application
        </p>
        <div className="d-flex justify-content-center">
          <div className="health__check__card content__health">
            <div className="health__check__card-item pl-3">
              <Checkbox
                onChange={() =>
                  setCheckedAllApps({
                    ...checkedAllApps,
                    first: !checkedAllApps.first,
                  })
                }
                checked={checkedAllApps.first}
              >
                App Name 1
              </Checkbox>
            </div>
            <div className="health__check__card-item pl-3">
              <Checkbox
                onChange={() =>
                  setCheckedAllApps({
                    ...checkedAllApps,
                    second: !checkedAllApps.second,
                  })
                }
                checked={checkedAllApps.second}
              >
                App Name 2
              </Checkbox>
            </div>
            <div className="health__check__card-item pl-3">
              <Checkbox
                onChange={() =>
                  setCheckedAllApps({
                    ...checkedAllApps,
                    third: !checkedAllApps.third,
                  })
                }
                checked={checkedAllApps.third}
              >
                App Name 3
              </Checkbox>
            </div>
            <div className="health__check__card-item pl-3">
              <Checkbox
                onChange={() =>
                  setCheckedAllApps({
                    ...checkedAllApps,
                    fourth: !checkedAllApps.fourth,
                  })
                }
                checked={checkedAllApps.fourth}
              >
                App Name 4
              </Checkbox>
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex align-items-center ml-5">
          <p className="font-weight-bold text-dark mr-5 padding-none">Server</p>
          <Checkbox
            checked={serverCheckAll}
            onChange={() => handleCheckedAllServer()}
          >
            All Servers
          </Checkbox>
        </div>
        <br />
        <p style={!mobile ? { marginLeft: "10.5rem" } : null}>Select Server</p>
        <div className="d-flex justify-content-center">
          <div className="health__check__card content__health">
            <div className="health__check__card-item pl-3">
              <Checkbox
                onChange={() =>
                  setCheckedAllServer({
                    ...checkedAllServer,
                    first: !checkedAllServer.first,
                  })
                }
                checked={checkedAllServer.first}
              >
                Server 1
              </Checkbox>
            </div>
            <div className="health__check__card-item pl-3">
              <Checkbox
                onChange={() =>
                  setCheckedAllServer({
                    ...checkedAllServer,
                    second: !checkedAllServer.second,
                  })
                }
                checked={checkedAllServer.second}
              >
                Server 2
              </Checkbox>
            </div>
            <div className="health__check__card-item pl-3">
              <Checkbox
                onChange={() =>
                  setCheckedAllServer({
                    ...checkedAllServer,
                    third: !checkedAllServer.third,
                  })
                }
                checked={checkedAllServer.third}
              >
                Server 3
              </Checkbox>
            </div>
            <div className="health__check__card-item pl-3">
              <Checkbox
                onChange={() =>
                  setCheckedAllServer({
                    ...checkedAllServer,
                    fourth: !checkedAllServer.fourth,
                  })
                }
                checked={checkedAllServer.fourth}
              >
                Server 4
              </Checkbox>
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
