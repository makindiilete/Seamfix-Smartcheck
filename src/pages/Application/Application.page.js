import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/all";
import { Input, Select, Table } from "antd";
import excel from "../../assets/images/xls.svg";
import pdf from "../../assets/images/PDF.svg";
import critical from "../../assets/images/triangle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

const { Option } = Select;

const columns = [
  {
    title: "S/N",
    dataIndex: "key",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "APPLICATION NAME",
    dataIndex: "application",
    render: (text, record) => (
      <div className="d-flex align-items-center">
        <div className={record?.key === "5" ? "down" : "live"} />
        <p className="padding-none ml-3">Application name goes here</p>
      </div>
    ),
  },
  {
    title: "APPLICATION TYPE",
    dataIndex: "mapped",
    render: (text) => <p>Application type</p>,
  },
  {
    title: "APPLICATION DCSC",
    dataIndex: "key",
    render: (text) => <p>Application desc</p>,
  },
  {
    title: "APPLICATION PORT",
    dataIndex: "status",
    render: (text) => <p>Application port</p>,
  },
  {
    title: "END POINT",
    dataIndex: "status",
    render: (text) => <p>End point</p>,
  },
  {
    title: "HOST SERVER",
    dataIndex: "status",
    render: (text) => <p>10.1.101.53</p>,
  },
  {
    title: "ACTION",
    dataIndex: "key",
    render: (text) => (
      <div className="d-flex align-items-center">
        <button className="btn btn-primary btn-sm">Edit</button>
        <FontAwesomeIcon
          icon={icons.faEllipsisV}
          size=""
          className="text-muted ml-3"
        />
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    currentStatus: "live",
    application: "Application name goes here",
    mapped: "3 Servers",
    date: "11/12/20 3: 57:29 PM",
    status: "Healthy",
  },
  {
    key: "2",
    currentStatus: "live",
    application: "Application name goes here",
    mapped: "2 Servers",
    date: "11/12/20 3: 57:29 PM",
    status: "Healthy",
  },
  {
    key: "3",
    currentStatus: "live",
    application: "Application name goes here",
    mapped: "2 Servers",
    date: "11/12/20 3: 57:29 PM",
    status: "Healthy",
  },
  {
    key: "4",
    currentStatus: "live",
    application: "Application name goes here",
    mapped: "3 Servers",
    date: "11/12/20 3: 57:29 PM",
    status: "Critical",
  },
  {
    key: "5",
    currentStatus: "down",
    application: "Application name goes here",
    mapped: "3 Servers",
    date: "11/12/20 3: 57:29 PM",
    status: "Healthy",
  },
];

const ApplicationPage = (props) => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <section className="home">
      <div className="container-fluid">
        <div className="home__content bg-white">
          <div className="d-flex justify-content-md-between">
            <div className="d-flex">
              <div style={{ width: "39.7rem" }} className="mr-3 mb-4 mb-md-0">
                <Input
                  name="search"
                  placeholder="Enter a search keyword"
                  prefix={
                    <AiOutlineSearch className="text-muted" size="2rem" />
                  }
                />
              </div>
              <Select
                defaultValue="all"
                onChange={handleChange}
                className="mr-3 select mb-4 mb-md-0"
              >
                <Option value="all">Active</Option>
                <Option value="Inactive">Inactive</Option>
                <Option value="2">All</Option>
              </Select>
            </div>
            <button className="btn btn-primary">Add Application</button>
          </div>
          <br />
          <Table
            columns={columns}
            dataSource={data}
            bordered
            scroll={{ x: 500 }}
            title={() => (
              <div className="d-flex justify-content-end">
                <div className="d-flex align-items-center">
                  <img src={excel} alt="" className="img-fluid mr-3" />
                  <img src={pdf} alt="" className="img-fluid mr-5" />
                  <p className="padding-none">Showing 5 of 5000 Entries</p>
                </div>
              </div>
            )}
          />
        </div>
      </div>
      <br />
    </section>
  );
};

export default ApplicationPage;
