import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import useMobile from "../../hooks/useMobile";
import { Form, Input } from "antd";
import "../../assets/css/healthCheck.css";
import Checkbox from "antd/es/checkbox/Checkbox";

const DefineApplication = ({ visible, onCancel }) => {
  let location = useLocation();
  const [form] = Form.useForm();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const mobile = useMobile();
  const [checkAll, setCheckAll] = useState(false);
  const [checkedData, setCheckedData] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });
  const [data, setData] = useState({
    applicationName: "",
    applicationType: "",
    applicationDcsc: "",
    applicationPort: "",
    endPoint: "",
    hostServer: "",
  });

  const handleSubmit = async (values) => {
    let errorDetected = false;
    await form.validateFields();
    const response = form.getFieldsError();
    for (let i = 0; i < response?.length; i++) {
      if (response[i].errors?.length > 0) {
        errorDetected = true;
      }
    }
    if (!errorDetected) {
      form.submit();
      onCancel();
    }
  };

  useEffect(() => {
    form.resetFields();
    setCheckAll(false);
  }, [visible]);

  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handleCheckedAll = () => {
    setCheckAll(!checkAll);
  };

  useEffect(() => {
    if (checkAll) {
      setCheckedData({
        first: true,
        second: true,
        third: true,
        fourth: true,
      });
    } else {
      setCheckedData({
        first: false,
        second: false,
        third: false,
        fourth: false,
      });
    }
  }, [checkAll]);

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
        overflow: "scroll",
        paddingBottom: 0,
      }}
    >
      <div className="py-5">
        <h4>Create a server</h4>
        <br />
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <p>Enter Server Details</p>
            <Form form={form} layout="vertical" scrollToFirstError>
              <Form.Item
                className="mb-3 mb-md-0 mt-2"
                initialValue=""
                name="applicationName"
                label="Application Name"
                rules={[
                  {
                    required: true,
                    message: "Required field",
                  },
                ]}
              >
                <Input
                  onChange={(e) =>
                    handleChange("applicationName", e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item
                className="mb-3 mb-md-0 mt-2"
                initialValue=""
                name="applicationType"
                label="Application Type"
                rules={[
                  {
                    required: true,
                    message: "Required field",
                  },
                ]}
              >
                <Input
                  onChange={(e) =>
                    handleChange("applicationType", e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item
                className="mb-3 mb-md-0 mt-2"
                initialValue=""
                name="applicationDcsc"
                label="Application Dcsc"
                rules={[
                  {
                    required: true,
                    message: "Required field",
                  },
                ]}
              >
                <Input
                  onChange={(e) =>
                    handleChange("applicationDcsc", e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item
                className="mb-3 mb-md-0 mt-2"
                initialValue=""
                name="applicationPort"
                label="Application Port"
                rules={[
                  {
                    required: true,
                    message: "Required field",
                  },
                ]}
              >
                <Input
                  onChange={(e) =>
                    handleChange("applicationPort", e.target.value)
                  }
                />
              </Form.Item>
              <Form.Item
                className="mb-3 mb-md-0 mt-2"
                initialValue=""
                name="endPoint"
                label="End Point"
                rules={[
                  {
                    required: true,
                    message: "Required field",
                  },
                ]}
              >
                <Input
                  onChange={(e) => handleChange("endPoint", e.target.value)}
                />
              </Form.Item>
              <br />
              <div className="d-flex align-items-center">
                <p className="font-weight-bold text-dark mr-5 padding-none">
                  Host/Server
                </p>
                <Checkbox
                  checked={checkAll}
                  onChange={() => handleCheckedAll()}
                >
                  All Servers
                </Checkbox>
              </div>
              <br />
              <p>Select Application</p>
              <div className="d-flex justify-content-center">
                <div className="health__check__card content__health">
                  <div className="health__check__card-item pl-3">
                    <Checkbox
                      onChange={() =>
                        setCheckedData({
                          ...checkedData,
                          first: !checkedData.first,
                        })
                      }
                      checked={checkedData.first}
                    >
                      10.1.101.53
                    </Checkbox>
                  </div>
                  <div className="health__check__card-item pl-3">
                    <Checkbox
                      onChange={() =>
                        setCheckedData({
                          ...checkedData,
                          second: !checkedData.second,
                        })
                      }
                      checked={checkedData.second}
                    >
                      10.1.101.54
                    </Checkbox>
                  </div>
                  <div className="health__check__card-item pl-3">
                    <Checkbox
                      onChange={() =>
                        setCheckedData({
                          ...checkedData,
                          third: !checkedData.third,
                        })
                      }
                      checked={checkedData.third}
                    >
                      10.1.101.55
                    </Checkbox>
                  </div>
                  <div className="health__check__card-item pl-3">
                    <Checkbox
                      onChange={() =>
                        setCheckedData({
                          ...checkedData,
                          fourth: !checkedData.fourth,
                        })
                      }
                      checked={checkedData.fourth}
                    >
                      10.1.101.56
                    </Checkbox>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-end">
          <div className="d-flex align-items-center">
            <p className="padding-none mr-4 cursor" onClick={onCancel}>
              Cancel
            </p>
            <button className="btn btn-primary" onClick={() => handleSubmit()}>
              Create
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DefineApplication;
