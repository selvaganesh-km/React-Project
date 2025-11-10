import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navlogo from "../../../assets/img/bizconvo-logo.png";
import DashboardLayout from "../../../layouts/DashboardLayout";
import TopNav from "../../../shared/TopNav";
import Footer from "../../../shared/Footer";

function ChatbotFlow() {
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
        <>
            <DashboardLayout>
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                    <TopNav />
                    <div className="row vendor-breadcrumbs container-fluid py-1 px-3">
                        <div className="col-md-6">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                    <li className="breadcrumb-item text-sm">
                                        <a className="opacity-5 text-dark" href="javascript:;">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-sm text-dark active"
                                        aria-current="page"
                                    >
                                        Flows
                                    </li>
                                </ol>
                                <h6 className="text-start font-weight-bolder mb-0">Flows</h6>
                            </nav>
                        </div>
                        <div className="col-md-6 text-end dropdown">
                            <button
                                className="vendor-crt-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                <span>Create Flow</span>
                            </button>
                        </div>
                        {/* <!-- Modal --> */}
                        <div
                            className="modal fade"
                            id="exampleModal"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header border-0">
                                        <h5
                                            className="modal-title vendorcreate-modal-title"
                                            id="vendorcreateLabel"
                                        >
                                            {modalMode === "create" ? "Add New Bot Flow" : "Edit Bot Flow"}
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
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
                                                        <i className="fa-brands fa-battle-net"></i> Title
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
                                                        <i className="fa-solid fa-shapes"></i> Start Trigger
                                                        Subject
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button type="button" className="btn btn-primary">
                                            Submit
                                        </button>
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
                                                        <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7">
                                                            Title
                                                        </th>
                                                        <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                            Start Trigger Subject
                                                        </th>
                                                        <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                            Status
                                                        </th>
                                                        <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder text-center opacity-7 ps-2">
                                                            Action
                                                        </th>
                                                        {/*<th></th>*/}
                                                    </tr>
                                                </thead>
                                                <tbody className="text-start">
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex px-2">
                                                                <div className="align-middle text-start text-sm my-auto">
                                                                    <span>Swiggy</span>
                                                                </div>
                                                            </div>
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
                                                        <td className="text-center align-middle vendor-login-td">
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
                                                                data-bs-target="#exampleModal"
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
                                                        <td>
                                                            <div className="form-check form-switch ms-1 is-filled">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    id="flexSwitchCheckDefault"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center vendor-login-td">
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
                                                                data-bs-target="#exampleModal"
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
                    </div>
                    <Footer />

                </main>

                {/*Vendor Delete Modal*/}
                <div
                    className="modal fade"
                    id="vendordelete"
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
                            <div className="modal-body vendor-delete-body text-center">
                                <div className="row">
                                    <div className="vendor-delete-icon">
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                    </div>
                                    <h4>Are You Sure !</h4>
                                    <h6>You want to delete this Flow ?</h6>
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
                            <div className="modal-body vendor-delete-body text-center">
                                <div className="row">
                                    <div className="vendor-delete-icon">
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                    </div>
                                    <h4>Are You Sure !</h4>
                                    <h6>You want to duplicate this Flow?</h6>
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
            </DashboardLayout>
        </>
    );
}

export default ChatbotFlow;
