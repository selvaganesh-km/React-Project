import React, { useEffect, useRef } from "react";
import AuthLayout from "../../../layout/AuthLayout";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slack from "../../../assets/img/logo-slack.svg";
import Inputs, { InputsOne } from "../../../common/Inputs";

function VendorDetails() {
<<<<<<< HEAD
=======

>>>>>>> 6bf8d67 (react_project)
  return (
    <AuthLayout>
      <div className="position-relative max-height-vh-100 h-100 border-radius-lg ">
        <div className="container-fluid py-1">
          <div className="row">
            <div className="col-md-6">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                  <li className="breadcrumb-item text-sm">
                    <Link
                      className="opacity-5 text-dark"
                      to={"/vendor/dashboard"}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item text-sm text-dark active"
                    aria-current="page"
                  >
                    Vendor
                  </li>
                </ol>
                <h6 className="text-start font-weight-bolder mb-0">
                  Vendor Details
                </h6>
              </nav>
            </div>
            <div className="col-md-6 text-end">
<<<<<<< HEAD
              <button
                className="createButton my-box"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <span className="createButton-decor"></span>
                <div className="createButton-content">
                  <div className="createButton__icon">
                    <svg
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                    >
                      <circle
=======
              <button className="createButton my-box" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span className="createButton-decor"></span>
                <div className="createButton-content">
                  <div className="createButton__icon">
                  <svg viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    >
                    <circle
>>>>>>> 6bf8d67 (react_project)
                        opacity="0.5"
                        cx="25"
                        cy="25"
                        r="23"
                        fill="url(#plus-icon-gradient)"
<<<<<<< HEAD
                      ></circle>

                      <path
                        fill="#fff"
                        d="M22 34v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2z"
                        transform="translate(1 1)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="plus-icon-gradient"
                          x1="25"
                          y1="2"
                          x2="25"
                          y2="48"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" stop-opacity="0.71" />
                          <stop offset="1" stop-color="#fff" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
=======
                    ></circle>

                    <path
                        fill="#fff"
                        d="M22 34v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2z"
                        transform="translate(1 1)"
                    ></path>
                    <defs>
                        <linearGradient
                        id="plus-icon-gradient"
                        x1="25"
                        y1="2"
                        x2="25"
                        y2="48"
                        gradientUnits="userSpaceOnUse"
                        >
                        <stop stop-color="#fff" stop-opacity="0.71" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                    </svg>

>>>>>>> 6bf8d67 (react_project)
                  </div>
                  <span className="createButton__text">Create Vendor</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Dashboard Container --> */}
        <div className="container-fluid py-4">
          {/* <!-- Dashboard Sidebar --> */}
          <div className="dashboard-sidebar">
            <div className="row">
<<<<<<< HEAD
              <div className="col-12">
=======
              
              <div className="col-12">
              
>>>>>>> 6bf8d67 (react_project)
                <div className="card shadow-sm rounded-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-end mb-2 mt-1">
                      <div className="welcome-section">
                        <div className="search-bar d-flex align-items-center">
                          <i className="fas fa-search me-2"></i>
                          <input type="text" placeholder="Search..." />
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive ">
<<<<<<< HEAD
=======
                      
>>>>>>> 6bf8d67 (react_project)
                      <table className="table align-items-center mb-0 mt-2">
                        <thead className="bg-light">
                          <tr>
                            <th className="text-start vendor-table-head text-xxs fw-bold ps-3">
                              Project
                            </th>
                            <th className="text-start vendor-table-head text-xxs fw-bold">
                              Client
                            </th>
                            <th className="text-start vendor-table-head text-xxs fw-bold">
                              Users
                            </th>
                            <th className="vendor-table-head text-xxs fw-bold">
                              Status
                            </th>
                            <th className="text-center vendor-table-head text-xxs fw-bold text-end">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
<<<<<<< HEAD
                          <tr className="text-center align-middle listData-item">
=======
                          <tr className="text-center align-middle">
>>>>>>> 6bf8d67 (react_project)
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={Slack}
                                  className="listAvatar-sm me-2"
                                  alt="Angular"
                                />
                                <h6 className="mb-0 tblData-txt">
                                  Angular Project
                                </h6>
                              </div>
                            </td>
<<<<<<< HEAD
                            <td className="text-start tblData-txt">
                              Albert Cook
                            </td>
=======
                            <td className="text-start tblData-txt">Albert Cook</td>
>>>>>>> 6bf8d67 (react_project)
                            <td>
                              <div className="avatar-group">
                                <img
                                  src={Slack}
                                  className="avatar-xs rounded-circle me-1"
                                  alt="user1"
                                />
                                <img
                                  src={Slack}
                                  className="avatar-xs rounded-circle me-1"
                                  alt="user2"
                                />
                                <img
                                  src={Slack}
                                  className="avatar-xs rounded-circle"
                                  alt="user3"
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-light text-start text-primary fw-semibold">
                                Active
                              </span>
                            </td>
                            <td className="text-end">
                              <ul className="example-2">
                                <li className="icon-content">
<<<<<<< HEAD
                                  <a data-social="viewBtn" aria-label="viewBtn">
                                    <div className="filled"></div>
                                    <svg
                                      className="viewBtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 576 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                                      />
                                    </svg>
=======
                                  <a
                                    data-social="viewBtn"
                                    aria-label="viewBtn"
                                  >
                                    <div className="filled"></div>
                                    <svg className="viewBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path  fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
>>>>>>> 6bf8d67 (react_project)
                                  </a>
                                  <div className="tooltip">View</div>
                                </li>
                                <li className="icon-content">
<<<<<<< HEAD
                                  <a data-social="editBtn" aria-label="editBtn">
                                    <div className="filled"></div>
                                    <svg
                                      className="editBtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                                      />
                                    </svg>{" "}
                                  </a>
=======
                                  <a
                                    data-social="editBtn"
                                    aria-label="editBtn"
                                  >
                                    <div className="filled"></div>
                                    <svg className="editBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>                                  </a>
>>>>>>> 6bf8d67 (react_project)
                                  <div className="tooltip">Edit</div>
                                </li>
                                <li className="icon-content">
                                  <a
                                    data-social="deleteBtn"
                                    aria-label="deleteBtn"
                                  >
                                    <div className="filled"></div>
<<<<<<< HEAD
                                    <svg
                                      className="deletBtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                                      />
                                    </svg>{" "}
                                  </a>
=======
                                    <svg className="deletBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>                                  </a>
>>>>>>> 6bf8d67 (react_project)
                                  <div className="tooltip">Delete</div>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="text-center align-middle">
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={Slack}
                                  className="listAvatar-sm me-2"
                                  alt="Angular"
                                />
                                <h6 className="mb-0 tblData-txt">
                                  Angular Project
                                </h6>
                              </div>
                            </td>
<<<<<<< HEAD
                            <td className="text-start tblData-txt">
                              Albert Cook
                            </td>
=======
                            <td className="text-start tblData-txt">Albert Cook</td>
>>>>>>> 6bf8d67 (react_project)
                            <td>
                              <div className="avatar-group">
                                <img
                                  src={Slack}
                                  className="avatar-xs rounded-circle me-1"
                                  alt="user1"
                                />
                                <img
                                  src={Slack}
                                  className="avatar-xs rounded-circle me-1"
                                  alt="user2"
                                />
                                <img
                                  src={Slack}
                                  className="avatar-xs rounded-circle"
                                  alt="user3"
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-light text-start text-primary fw-semibold">
                                Active
                              </span>
                            </td>
                            <td className="text-end">
                              <ul className="example-2">
                                <li className="icon-content">
<<<<<<< HEAD
                                  <a data-social="viewBtn" aria-label="viewBtn">
                                    <div className="filled"></div>
                                    <svg
                                      className="viewBtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 576 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                                      />
                                    </svg>
=======
                                  <a
                                    data-social="viewBtn"
                                    aria-label="viewBtn"
                                  >
                                    <div className="filled"></div>
                                    <svg className="viewBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path  fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
>>>>>>> 6bf8d67 (react_project)
                                  </a>
                                  <div className="tooltip">View</div>
                                </li>
                                <li className="icon-content">
<<<<<<< HEAD
                                  <a data-social="editBtn" aria-label="editBtn">
                                    <div className="filled"></div>
                                    <svg
                                      className="editBtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                                      />
                                    </svg>{" "}
                                  </a>
                                  <div className="tooltip">Edit</div>
                                </li>
                                <li
                                  className="icon-content"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteModal"
                                >
=======
                                  <a
                                    data-social="editBtn"
                                    aria-label="editBtn"
                                  >
                                    <div className="filled"></div>
                                    <svg className="editBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>                                  </a>
                                  <div className="tooltip">Edit</div>
                                </li>
                                <li className="icon-content" data-bs-toggle="modal" data-bs-target="#deleteModal">
>>>>>>> 6bf8d67 (react_project)
                                  <a
                                    data-social="deleteBtn"
                                    aria-label="deleteBtn"
                                  >
                                    <div className="filled"></div>
<<<<<<< HEAD
                                    <svg
                                      className="deletBtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                                      />
                                    </svg>{" "}
                                  </a>
=======
                                    <svg className="deletBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>                                  </a>
>>>>>>> 6bf8d67 (react_project)
                                  <div className="tooltip">Delete</div>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
<<<<<<< HEAD
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header justify-content-end">
              <button
                type="button"
                className="fw-bold btn float-end border-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="modal-xmark fa-solid fa-xmark fs-5 p-2"></i>
              </button>
            </div>

            <div className="modal-body p-4">
              <h5>Welcome to Teams!</h5>
              <div className="row">
                <div className="col-md-6">
                  <Inputs label="Username" icon="fa-solid fa-file-signature" />
                </div>
                <div className="col-md-6">
                  <Inputs
                    label="Email"
                    icon="fa-solid fa-envelope-circle-check"
                  />
                </div>
                <div className="col-md-6">
                  <Inputs label="Address" icon="fa-solid fa-location-dot" />
                </div>
                <div className="col-md-6">
                  <Inputs label="Phone" icon="fa-solid fa-phone" />
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn-beta"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn-alpha">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="deleteModal"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header justify-content-end">
              <button
                type="button"
                className="fw-bold btn float-end border-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="modal-xmark fa-solid fa-xmark fs-5 p-2"></i>
              </button>
            </div>

            <div className="modal-body text-center">
              <div className="mb-3">
                <i className="fa-solid fa-trash-can btn-omegaIcon"></i>
              </div>
              <h5 className="fw-bold">You are about to delete a product</h5>
              <p className="text-secondary text-sm mb-4">
                This will delete your product from catalog
                <br />
                Are you sure?
              </p>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn-beta"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn-omega">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
=======
        <div className="modal fade"  id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
            <div className="modal-header justify-content-end">
        <button
            type="button"
            className="fw-bold btn float-end border-0"
            data-bs-dismiss="modal"
            aria-label="Close"
        >
            <i className="modal-xmark fa-solid fa-xmark fs-5 p-2"></i>
        </button>
        </div>

            <div className="modal-body p-4">
                <h5>Welcome to Teams!</h5>
                <div className="row">
                    <div className="col-md-6">
                    <Inputs label="Username" icon="fa-solid fa-file-signature"/> 
                    </div>
                    <div className="col-md-6">
                    <Inputs label="Email" icon="fa-solid fa-envelope-circle-check"/>
                    </div>
                    <div className="col-md-6">
                    <Inputs label="Address" icon="fa-solid fa-location-dot"/>
                    </div>
                    <div className="col-md-6">
                    <Inputs label="Phone" icon="fa-solid fa-phone"/>
                    </div>
                </div>
            </div>
            <div className="modal-footer justify-content-center">
                <button type="button" className="btn-beta" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn-alpha">Save changes</button>
            </div>
            </div>
        </div>
        </div>
        <div className="modal fade" id="deleteModal" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header justify-content-end">
        <button
            type="button"
            className="fw-bold btn float-end border-0"
            data-bs-dismiss="modal"
            aria-label="Close"
        >
            <i className="modal-xmark fa-solid fa-xmark fs-5 p-2"></i>
        </button>
        </div>

        <div className="modal-body text-center">
                    <div className="mb-3">
                    <i className="fa-solid fa-trash-can btn-omegaIcon"></i>
                    </div>
                    <h5 className="fw-bold">You are about to delete a product</h5>
                    <p className="text-secondary text-sm mb-4">
                    This will delete your product from catalog<br />
                    Are you sure?
                    </p>
                </div>
            <div className="modal-footer justify-content-center">
                <button type="button" className="btn-beta" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn-omega">Delete</button>
            </div>
            </div>
        </div>
        </div>
        

>>>>>>> 6bf8d67 (react_project)
    </AuthLayout>
  );
}

export default VendorDetails;
