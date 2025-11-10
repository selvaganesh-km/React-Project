import Userimg from "../../assets/img/team-2.jpg";
import Userimg1 from "../../assets/img/small-logos/logo-spotify.svg";
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navlogo from "../../../assets/img/bizconvo-logo.png";
import DashboardLayout from "../../../layouts/DashboardLayout";
import TopNav from "../../../shared/TopNav";
import Footer from "../../../shared/Footer";

function Chatbot() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [mediabot, setMediabot] = useState(false);
  const [simplebot, setSimplebot] = useState(false);
  const [advancedbot, setAdvancedbot] = useState(false);
  const [replybutton1, SetReplybuttonradio] = useState(true);
  const [replybutton2, SetReplybuttonradio1] = useState(false);
  const [replybutton3, SetReplybuttonradio2] = useState(false);

  const navigate = useNavigate();

  const handleBacktoSadmin = (e: any) => {
    e.preventDefault();
    navigate("/dashboard", { replace: true });
  };
  const [modalMode, setModalMode] = useState("create");
  const openModal = (mode: any) => {
    setModalMode(mode);
  };
  const handleSubmit = () => {
    if (modalMode === "create") {
    }
  };
  const handleLogin = (e: any) => {
    e.preventDefault();
    navigate("/vendor-dashboard", { replace: true });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };
  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  const handleSimpleBot = () => {
    setSimplebot(true);
    setMediabot(false);
    setAdvancedbot(false);
  };

  const handleMediaBot = () => {
    setMediabot(true);
    setSimplebot(false);
    setAdvancedbot(false);
  };

  const handleAdvancedBot = () => {
    setMediabot(true);
    setSimplebot(true);
    setAdvancedbot(true);
  };

  const Replybuttonradio = () => {
    SetReplybuttonradio(true);
    SetReplybuttonradio1(false);
    SetReplybuttonradio2(false);
  };
  const Replybuttonradio1 = () => {
    SetReplybuttonradio(false);
    SetReplybuttonradio1(true);
    SetReplybuttonradio2(false);

  };
  const Replybuttonradio2 = () => {
    SetReplybuttonradio(false);
    SetReplybuttonradio1(false);
    SetReplybuttonradio2(true);
  };

  return (
    <DashboardLayout>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <TopNav />
        <div className="row vendor-breadcrumbs container-fluid py-1 px-3">
          <div className="col-md-6">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <Link className="opacity-5 text-dark" to={"/vendor/dashboard"}>Dashboard</Link>
                </li>
                <li
                  className="breadcrumb-item text-sm text-dark active"
                  aria-current="page"
                >
                  Chat Bots
                </li>
              </ol>
              <h6 className="text-start font-weight-bolder mb-0">Chat Bots</h6>
            </nav>
          </div>
          <div className="col-md-6 text-end dropdown">
            <button
              className="vendor-crt-btn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => openModal("create")}
            >
              <span>Create Bot</span>{" "}
              <i
                className={`font-size-dash-arrow-1 fa-solid fa-chevron-${isDropdownOpen ? "up" : "down"
                  } `}
              ></i>
            </button>
            &nbsp;
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#vendorcreate"
                  onClick={handleSimpleBot}
                >
                  Simple Bot Reply
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#vendorcreate"
                  onClick={handleMediaBot}
                >
                  Media Bot Reply
                </button>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#vendorcreate"
                  onClick={handleAdvancedBot}
                >
                  Advanced Interactive Bot Reply
                </a>
              </li>
            </ul>
            <button
              className="vendor-crt-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Help
            </button>
          </div>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="exampleModal"
            tab-Index="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    What are the Bots Replies and How to use it?
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-start">
                  <h6>Whats are Bots</h6>
                  <p>
                    Bots are instructions given to the system so when you get
                    message you can set reply message so it will get triggered
                    automatically.
                  </p>
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vendor-maincontent container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center justify-content-center mb-0">
                      <thead>
                        <tr className="vendor-table-mainhead">
                          <th className="chatbot-table-head vendor-table-head text-xxs font-weight-bolder opacity-7 ps-3">
                            Name
                          </th>
                          <th className="chatbot-table-head vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                            Bot Type
                          </th>
                          <th className="chatbot-table-head vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                            Trigger Type
                          </th>
                          <th className="chatbot-table-head vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                            Trigger Subject
                          </th>
                          <th className="chatbot-table-head vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                            Status
                          </th>
                          <th className="chatbot-table-head vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                            Created At
                          </th>
                          <th className="chatbot-table-head vendor-table-head text-xxs font-weight-bolder text-center opacity-7 ps-2">
                            Action
                          </th>
                          {/*<th></th>*/}
                        </tr>
                      </thead>
                      <tbody className="text-start">
                        <tr >
                          <td>
                            <div className="d-flex px-2">
                              <div className="align-middle text-start text-sm my-auto">
                                <span>Spotify</span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle text-start text-sm">
                            <span>Simple</span>
                          </td>
                          <td className="align-middle text-start text-sm">
                            <span>Start With</span>
                          </td>
                          <td className="align-middle text-start text-sm">
                            <span>Start With</span>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-1 is-filled">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </td>
                          <td className="text-sm">
                            <span>Thursday 22nd August 2024 6:00:11 am</span>
                          </td>

                          <td className="align-middle vendor-login-td">
                            <button
                              className="btn-3 vendorbtn-view"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#vendordelete1"
                            >
                              <span className="btn-inner--icon text-secondary">
                                <i className="fa-solid fa-clone"></i>
                              </span>
                            </button>
                            &nbsp;
                            <button
                              className="btn-3 vendorbtn-edit"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#vendorcreate"
                              onClick={() => openModal("edit")}
                            >
                              <span className="btn-inner--icon">
                                <i className="fa-regular fa-pen-to-square"></i>
                              </span>
                            </button>
                            &nbsp;
                            <button
                              className="btn-3 vendorbtn-danger"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#vendordelete"
                            >
                              <span className="btn-inner--icon">
                                <i className="fa-regular fa-trash-can"></i>
                              </span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div className="align-middle text-start text-sm my-auto">
                                <span>Swiggy</span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle text-start text-sm">
                            <span>Simple</span>
                          </td>
                          <td className="align-middle text-start text-sm">
                            <span>Start With</span>
                          </td>
                          <td className="align-middle text-start text-sm">
                            <span>Start With</span>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-1 is-filled">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </td>
                          <td className="text-sm">
                            <span>Thursday 22nd August 2024 6:00:11 am</span>
                          </td>

                          <td className="align-middle vendor-login-td">
                            <button
                              className="btn-3 vendorbtn-view"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#vendordelete1"
                            >
                              <span className="btn-inner--icon text-secondary">
                                <i className="fa-solid fa-clone"></i>
                              </span>
                            </button>
                            &nbsp;
                            <button
                              className="btn-3 vendorbtn-edit"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#vendorcreate"
                              onClick={() => openModal("edit")}
                            >
                              <span className="btn-inner--icon">
                                <i className="fa-regular fa-pen-to-square"></i>
                              </span>
                            </button>
                            &nbsp;
                            <button
                              className="btn-3 vendorbtn-danger"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#vendordelete"
                            >
                              <span className="btn-inner--icon">
                                <i className="fa-regular fa-trash-can"></i>
                              </span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />

        </div>
      </main>
      <div
        className="modal fade"
        id="vendorcreate"
        tab-Index="-1"
        aria-labelledby="vendorcreateLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content vendorcreate-modal-content">
            <div className="modal-header vendorcreate-modal-header">
              <h5
                className="modal-title vendorcreate-modal-title"
                id="vendorcreateLabel"
              >
                {modalMode === "create" ? "Create Bot" : "Edit Bot"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="row modal-container-size modal-body vendorcreate-modal-body">
              <div className="row">
                <div className="col-md-12 login-input-group">
                  <div className="vendor-create-container">
                    <input
                      type="text"
                      id="vendor-crt-input"
                      className="vendor-crt-input"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="vendor-crt-input" className="vendor-crt-label">
                      <i className="fa-solid fa-user"></i> Name
                    </label>
                  </div>
                </div>
                <div className="col-md-6 login-input-group">
                  <div className="dropdown vendor-create-container">
                    <input
                      type="text"
                      id="vendor-crt-input"
                      className="vendor-crt-input"
                      placeholder=" "
                      required
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />
                    <label htmlFor="vendor-crt-input" className="vendor-crt-label">
                      <i className="fa-solid fa-shapes"></i> Trigger Type
                    </label>
                    <i
                      className={`dropdown-icon font-size-dash-arrow fa-solid fa-chevron-${isDropdownOpen2 ? "up" : "down"
                        }`}
                    ></i>
                    <ul className="dropdown-menu dropdown-increase-size">
                      <li>
                        <a className="dropdown-item" href="#">
                          Welcome
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Is
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Start With
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Ends With
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Contains Whole word
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Contains
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Stop Promotional
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Start Promotional
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 login-input-group">
                  <div className="vendor-create-container">
                    <input
                      type="text"
                      id="vendor-crt-input"
                      className="vendor-crt-input"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="vendor-crt-input" className="vendor-crt-label">
                      <i className="fa-solid fa-shapes"></i> Reply Trigger Subject
                    </label>
                  </div>
                </div>
                <div className="col-md-12 login-input-group">
                  {simplebot && (
                    <div>
                      <div className="vendor-create-container">
                        <textarea
                          id="vendor-crt-input"
                          className="vendor-crt-input create-bot-textarea"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="vendor-crt-input"
                          className="vendor-crt-label"
                        >
                          <i className="fa-solid fa-message"></i> Reply
                          Message
                        </label>
                      </div>
                      <div>
                        <p className="text-start bot-create-textarea">
                          <i className="fa-solid fa-triangle-exclamation danger-icon-create-bot"></i>
                          You are free to use the following dynamic variables
                          for reply text, which will get replaced with the
                          contact's concerned field value.
                        </p>
                        <p className="text-start bot-create-textarea-2">
                          {
                            "{first_name} {last_name} {full_name} {phone_number} {email} {country} {language_code} {DOB} {Address} {loyalty_rs}"
                          }
                        </p>
                      </div>
                    </div>
                  )}

                  {mediabot && (
                    <div className="vendor-create-container dropdown">
                      <input
                        type="text"
                        id="vendor-crt-input"
                        className="vendor-crt-input"
                        placeholder=" "
                        required
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <label
                        htmlFor="vendor-crt-input"
                        className="vendor-crt-label"
                      >
                        <i className="fa-solid fa-message"></i> Header Type
                      </label>
                      <i className="dropdown-icon font-size-dash-arrow fa-solid fa-chevron-down"></i>
                      <ul className="dropdown-menu dropdown-increase-size">
                        <li>
                          <a className="dropdown-item" href="#">
                            Image
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Video
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Document
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Audio
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}

                  {advancedbot && (
                    <div>
                      <div className="d-flex gap-4 mt-2">
                        <div
                          className="form-check text-start"
                          onClick={Replybuttonradio}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />{" "}
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Reply Buttons
                          </label>
                        </div>
                        <div
                          className="form-check text-start"
                          onClick={Replybuttonradio1}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />{" "}
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            CTA URL Button
                          </label>
                        </div>
                        <div
                          className="form-check text-start"
                          onClick={Replybuttonradio2}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          />{" "}
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            List Message
                          </label>
                        </div>
                      </div>
                      <div>
                        {replybutton1 && (
                          <div className="text-start">
                            <div className="row">
                              <div className="col-md-12 login-input-group">
                                <div className="vendor-create-container">
                                  <input
                                    type="text"
                                    id="vendor-crt-input"
                                    className="vendor-crt-input"
                                    placeholder=" "
                                    required
                                  />
                                  <label
                                    htmlFor="vendor-crt-input"
                                    className="vendor-crt-label"
                                  >
                                    <i className="fa-solid fa-user"></i>{" "}
                                    Button 1 Label
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-12 login-input-group">
                                <div className="vendor-create-container">
                                  <input
                                    type="text"
                                    id="vendor-crt-input"
                                    className="vendor-crt-input"
                                    placeholder=" "
                                    required
                                  />
                                  <label
                                    htmlFor="vendor-crt-input"
                                    className="vendor-crt-label"
                                  >
                                    <i className="fa-solid fa-user"></i>{" "}
                                    Button 2 Label (optional)
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-12 login-input-group">
                                <div className="vendor-create-container">
                                  <input
                                    type="text"
                                    id="vendor-crt-input"
                                    className="vendor-crt-input"
                                    placeholder=" "
                                    required
                                  />
                                  <label
                                    htmlFor="vendor-crt-input"
                                    className="vendor-crt-label"
                                  >
                                    <i className="fa-solid fa-user"></i>{" "}
                                    Button 3 Label (optional)
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-12 login-input-group">
                                <div className="vendor-create-container">
                                  <input
                                    type="text"
                                    id="vendor-crt-input"
                                    className="vendor-crt-input"
                                    placeholder=" "
                                    required
                                  />
                                  <label
                                    htmlFor="vendor-crt-input"
                                    className="vendor-crt-label"
                                  >
                                    <i className="fa-solid fa-user"></i>{" "}
                                    Footer Text (optional)
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {replybutton2 && (
                          <div>
                            <div className="row">
                              <div className="col-md-12 login-input-group">
                                <div className="vendor-create-container">
                                  <input
                                    type="text"
                                    id="vendor-crt-input"
                                    className="vendor-crt-input"
                                    placeholder=" "
                                    required
                                  />
                                  <label
                                    htmlFor="vendor-crt-input"
                                    className="vendor-crt-label"
                                  >
                                    <i className="fa-solid fa-user"></i> CTA
                                    Button Display Text
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-12 login-input-group">
                                <div className="vendor-create-container">
                                  <input
                                    type="text"
                                    id="vendor-crt-input"
                                    className="vendor-crt-input"
                                    placeholder=" "
                                    required
                                  />
                                  <label
                                    htmlFor="vendor-crt-input"
                                    className="vendor-crt-label"
                                  >
                                    <i className="fa-solid fa-user"></i> CTA
                                    Button URL
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-12 login-input-group">
                                <div className="vendor-create-container">
                                  <input
                                    type="text"
                                    id="vendor-crt-input"
                                    className="vendor-crt-input"
                                    placeholder=" "
                                    required
                                  />
                                  <label
                                    htmlFor="vendor-crt-input"
                                    className="vendor-crt-label"
                                  >
                                    <i className="fa-solid fa-user"></i>{" "}
                                    Footer Text (optional)
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {replybutton3 && (
                          <div>
                            <div className="row">
                              <div className="col-md-12 login-input-group">
                                <div className="vendor-create-container">
                                  <input
                                    type="text"
                                    id="vendor-crt-input"
                                    className="vendor-crt-input"
                                    placeholder=" "
                                    required
                                  />
                                  <label
                                    htmlFor="vendor-crt-input"
                                    className="vendor-crt-label"
                                  >
                                    <i className="fa-solid fa-user"></i> Button Label
                                  </label>
                                </div>
                                <div className="text-start">
                                  <button className="vendor-crt-btn" >Add section</button>
                                </div>
                              </div>
                              <div className="col-md-12 login-input-group">
                                <div className="vendor-create-container">
                                  <input
                                    type="text"
                                    id="vendor-crt-input"
                                    className="vendor-crt-input"
                                    placeholder=" "
                                    required
                                  />
                                  <label
                                    htmlFor="vendor-crt-input"
                                    className="vendor-crt-label"
                                  >
                                    <i className="fa-solid fa-user"></i> Footer Text (optional)
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    {mediabot ? (
                      <p className="text-start bot-create-textarea">
                        You can have comma-separated multiple triggers.
                      </p>
                    ) : (
                      <div>
                        {/* <p className="text-start bot-create-textarea">
                            <i className="fa-solid fa-triangle-exclamation danger-icon-create-bot"></i>
                            You are free to use the following dynamic variables
                            for reply text, which will get replaced with the
                            contact's concerned field value.
                          </p>
                          <p className="text-start bot-create-textarea-2">
                            {
                              "{first_name} {last_name} {full_name} {phone_number} {email} {country} {language_code} {DOB} {Address} {loyalty_rs}"
                            }
                          </p> */}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-check form-switch ms-1 is-filled text-start active">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />{" "}
                    <span> Status</span>
                  </div>
                  <div className="form-check form-switch ms-1 is-filled text-start mt-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />{" "}
                    <span>Validate Bot Reply by Sending Test Message</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer vendorcreate-modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                {modalMode === "create" ? "Create" : "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*Vendor Login Modal*/}
      <div
        className="modal fade"
        id="vendorlogin"
        tab-Index="-1"
        aria-labelledby="vendorloginLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content vendor-delete-content">
            <div className=" vendor-delete-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body vendor-delete-body">
              <div className="row">
                <div className="vendor-login-icon">
                  <img src={Navlogo} />
                </div>
                <h4>Are You Sure !</h4>
                <h6>You want to login this vendor ?</h6>
                <div></div>
              </div>
            </div>
            <div className="modal-footer text-center vendor-delete-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleLogin}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*Vendor Delete Modal*/}
      <div
        className="modal fade"
        id="vendordelete"
        tab-Index="-1"
        aria-labelledby="vendordeleteLabel"
        aria-hidden="true"
      >
        <div className="text-center modal-dialog modal-dialog-centered">
          <div className="modal-content vendor-delete-content">
            <div className=" vendor-delete-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body vendor-delete-body">
              <div className="row">
                <div className="vendor-delete-icon">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <h4>Are You Sure !</h4>
                <h6>You want to delete this vendor ?</h6>
                <div></div>
              </div>
            </div>
            <div className="modal-footer text-center vendor-delete-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              &nbsp;
              <button type="button" className="btn btn-primary">
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="vendordelete1"
        tab-Index="-1"
        aria-labelledby="vendordeleteLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content vendor-delete-content">
            <div className=" vendor-delete-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body vendor-delete-body">
              <div className="row">
                <div className="vendor-delete-icon">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <h4>Are You Sure !</h4>
                <h6>You want to duplicate this Bot Reply?</h6>
                <div></div>
              </div>
            </div>
            <div className=" text-center vendor-delete-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              &nbsp;
              <button type="button" className="btn btn-primary">
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Chatbot;  