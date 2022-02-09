import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import useMobile from "../../hooks/useMobile";
import { Form, Input } from "antd";
import "../../assets/css/healthCheck.css";

const CreateServer = ({ visible, onCancel }) => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const mobile = useMobile();
  const [data, setData] = useState({
    serverName: "",
    serverIp: "",
    cpu: "",
    storage: "",
  });

  const handleSubmit = (values) => {};

  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };
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
        <h4>Create a server</h4>
        <br />
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <p>Enter Server Details</p>
            {/*
                           serverName: "",
        serverIp: "",
        cpu: "",
        storage: ""
                        */}
            <Form layout="vertical" scrollToFirstError onFinish={handleSubmit}>
              <Form.Item
                className="mb-3 mb-md-0 mt-2"
                initialValue=""
                name="serverName"
                label="Server Name"
                rules={[
                  {
                    required: true,
                    message: "Required field",
                  },
                ]}
              >
                <Input
                  onChange={(e) => handleChange("serverName", e.target.value)}
                />
              </Form.Item>

              <Form.Item
                className="mb-3 mb-md-0 mt-2"
                initialValue=""
                name="serverIp"
                label="Server IP"
                rules={[
                  {
                    required: true,
                    message: "Required field",
                  },
                ]}
              >
                <Input
                  onChange={(e) => handleChange("serverIp", e.target.value)}
                />
              </Form.Item>

              <Form.Item
                className="mb-3 mb-md-0 mt-2"
                initialValue=""
                name="cpu"
                label="CPU"
                rules={[
                  {
                    required: true,
                    message: "Required field",
                  },
                ]}
              >
                <Input onChange={(e) => handleChange("cpu", e.target.value)} />
              </Form.Item>

              <Form.Item
                className="mb-3 mb-md-0 mt-2"
                initialValue=""
                name="storage"
                label="Storage"
                rules={[
                  {
                    required: true,
                    message: "Required field",
                  },
                ]}
              >
                <Input
                  onChange={(e) => handleChange("storage", e.target.value)}
                />
              </Form.Item>
            </Form>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-end">
          <div className="d-flex align-items-center">
            <p className="padding-none mr-4 cursor" onClick={onCancel}>
              Cancel
            </p>
            <button className="btn btn-primary" onClick={onCancel}>
              Create
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateServer;
