import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/all";
import useMobile from "../../hooks/useMobile";
import "../../assets/css/Home.css";
import { Input, Select, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import critical from "../../assets/images/triangle.svg";
import excel from "../../assets/images/xls.svg";
import pdf from "../../assets/images/PDF.svg";
import HealthCheckResult from "../../components/Modals/healthCheckResult";

const { Option } = Select;

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

const HomePage = (props) => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const [viewResult, setViewResult] = useState(false);

  const columns = [
    {
      title: "S/N",
      dataIndex: "key",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "APPLICATION",
      dataIndex: "application",
      render: (text, record) => (
        <div className="d-flex align-items-center">
          <div className={record?.key === "5" ? "down" : "live"} />
          <p className="padding-none ml-3">{text}</p>
        </div>
      ),
    },
    {
      title: "SERVERS MAPPED",
      dataIndex: "mapped",
      render: (text) => <p className="primary-text">{text}</p>,
    },
    {
      title: "LAST SCAN DATE",
      dataIndex: "date",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (text) => (
        <div className="d-flex">
          {text !== "Healthy" && (
            <img
              src={critical}
              alt=""
              className="img-fluid"
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          )}

          {text === "Healthy" && (
            <p className="primary-text">
              <FontAwesomeIcon
                icon={icons.faCheckCircle}
                size=""
                className={text === "Healthy" && "text-success mr-2"}
              />
              {text}
            </p>
          )}
        </div>
      ),
    },
    {
      title: "ACTION",
      dataIndex: "key",
      render: (text) => (
        <div className="d-flex align-items-center">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setViewResult(true)}
          >
            View Result
          </button>
          <FontAwesomeIcon
            icon={icons.faEllipsisV}
            size=""
            className="text-muted ml-3"
          />
        </div>
      ),
    },
  ];

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <section className="home">
      <div className="container-fluid">
        <br />
        <div className="home__cards">
          <div className="cardz">
            <p className="title">Application Status</p>
            <div className="d-flex justify-content-around">
              <div className="circle white">
                <p className="padding-none">10</p>
              </div>
              <div className="circle green">
                <p className="padding-none">10</p>
              </div>
              <div className="circle red">
                <p className="padding-none">4</p>
              </div>
            </div>
          </div>
          <div className="cardz">
            <p className="title">Servers</p>
            <div className="d-flex justify-content-around">
              <div className="circle white">
                <p className="padding-none">10</p>
              </div>
              <div className="circle green">
                <p className="padding-none">2</p>
              </div>
              <div className="circle yellow">
                <p className="padding-none">2</p>
              </div>
            </div>
          </div>
          <div className="cardz">
            <p className="title">Health check counts </p>
            <h2 className="text-center">60</h2>
            <p className="text-center">Counts</p>
            {/* /.text-center */}
          </div>
        </div>
        <div className="home__content bg-white">
          <div className="d-flex" style={{ flexWrap: "wrap" }}>
            <div style={{ width: "39.7rem" }} className="mr-3 mb-4 mb-md-0">
              <Input
                name="search"
                placeholder="Enter a search keyword"
                prefix={<AiOutlineSearch className="text-muted" size="2rem" />}
              />
            </div>
            <Select
              defaultValue="all"
              onChange={handleChange}
              className="mr-3 select mb-4 mb-md-0"
            >
              <Option value="all">All Application</Option>
              <Option value="1">Application name 1</Option>
              <Option value="2">Application name 2</Option>
            </Select>{" "}
            <Select
              defaultValue="all"
              onChange={handleChange}
              className="mr-3 select mb-4 mb-md-0"
            >
              <Option value="all">All Servers</Option>
              <Option value="1">Server 1</Option>
              <Option value="2">Server 2</Option>
            </Select>{" "}
            <Select
              defaultValue="all"
              onChange={handleChange}
              className="mr-3 select mb-4 mb-md-0"
            >
              <Option value="all">All Status</Option>
              <Option value="1">Healthy</Option>
              <Option value="2">Critical</Option>
            </Select>
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

      <HealthCheckResult
        visible={viewResult}
        onCancel={() => setViewResult(false)}
      />
    </section>
  );
};

export default HomePage;
