import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Userimg from "../../../assets/img/team-2.jpg";
import Userimg1 from "../../../assets/img/small-logos/logo-spotify.svg";
import DashboardLayout from "../../../layouts/DashboardLayout";
import TopNav from "../../../shared/TopNav";
import Footer from "../../../shared/Footer";

function CreateSms() {
    const navigate = useNavigate();
    return (
        <DashboardLayout>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <TopNav />
                <div className="vendor-breadcrumbs container-fluid py-1 px-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                            <li className="breadcrumb-item text-sm"><Link className="opacity-5 text-dark" to={"/vendor/sms"}>Template Management</Link></li>
                            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Create SMS</li>
                        </ol>
                        <h6 className="text-start font-weight-bolder mb-0">Create SMS</h6>
                    </nav>
                </div>
                <div className="myprofile-maincontent container-fluid py-4">
                    <div className="row myprofile-content">
                        <div className="col-md-12">
                            <h5 className="text-start">Add SMS Template</h5>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="edit-container">
                                        <input type="text" id="vendor-crt-input-1" className="vendor-crt-input" placeholder=" " required />
                                        <label htmlFor="vendor-crt-input-1" className="vendor-crt-label">
                                            <i className="fa-solid fa-user"></i> Template Name
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="edit-container">
                                        <input type="text" id="vendor-crt-input-2" className="vendor-crt-input" placeholder=" " required />
                                        <label htmlFor="vendor-crt-input-2" className="vendor-crt-label">
                                            <i className="fa-regular fa-id-badge"></i> Enter Template ID
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 login-input-group">
                                    <div className="vendor-create-container dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                        <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-share"></i> Sender ID</label>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">John</a></li>
                                            <li><a className="dropdown-item" href="#">Berlin</a></li>
                                            <li><a className="dropdown-item" href="#">Tokyo</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 login-input-group">
                                    <div className="vendor-create-container dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                        <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-comment-sms"></i> Sms Type</label>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">John</a></li>
                                            <li><a className="dropdown-item" href="#">Berlin</a></li>
                                            <li><a className="dropdown-item" href="#">Tokyo</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 login-input-group">
                                    <div className="vendor-create-container dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                        <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-language"></i> English</label>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">John</a></li>
                                            <li><a className="dropdown-item" href="#">Berlin</a></li>
                                            <li><a className="dropdown-item" href="#">Tokyo</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12 login-input-group">
                                    <div className="edit-container sms-template-content">
                                        <textarea id="vendor-crt-input-5 " className="vendor-crt-input" placeholder=" " required></textarea>
                                        <label htmlFor="vendor-crt-input-5" className="vendor-crt-label">
                                            <i className="fa-solid fa-text-width"></i> Template Content
                                        </label>
                                    </div>
                                    <p className="text-start" style={{ fontSize: "12px", color: "#555" }}>
                                        Template message content with (#var#) variables in it, which will be replaced by our (#var#) keyboard or normal text (#var#).
                                    </p>
                                </div>
                                <div className="col-md-6 login-input-group">
                                    <div className="edit-container">
                                        <input type="text" id="vendor-crt-input-6" className="vendor-crt-input" placeholder=" " required maxLength={20} />
                                        <label htmlFor="vendor-crt-input-6" className="vendor-crt-label">
                                            <i className="fa-solid fa-mobile-screen-button"></i> Enter Test Mobile Number
                                        </label>
                                    </div>
                                    <p className="text-start" style={{ fontSize: "12px", color: "#555" }}>
                                        (Comma-separated. Max 20 characters)
                                    </p>
                                </div>
                                <div className="modal-footer vendorcreate-modal-footer border-0">
                                    <button type="button" className="btn btn-secondary me-3" onClick={() => { navigate("/vendor/sms") }}>Close</button>
                                    <button type="button" className="btn btn-primary">Submit Template</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>

        </DashboardLayout>
    );

}

export default CreateSms;