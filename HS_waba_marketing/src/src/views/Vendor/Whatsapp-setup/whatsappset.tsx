import React, { useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";
import Footer from "../../../shared/Footer";
import general_Logo from "../../../assets/img/bizconvo-logo.png";
import Navlogo from "../../../assets/img/bizconvo-logo.png"

import "./whatsapp-setup.css";
import TopNav from "../../../shared/TopNav";
function Whatsapp_Settings() {
    const [showdata, SetShowData] = useState(false);

    const ShowTernary = () => {
        if (showdata === true) {
            SetShowData(false)
        }
        else {
            SetShowData(true);
        }
    };

    const [showbutton, SetShowButton] = useState(false);
    const ShowButtonData = () => {
        SetShowButton(true);
    }
    const [showbutton1, SetShowButton1] = useState(false);
    const ShowButtonData1 = () => {
        SetShowButton1(true);
    }
    const [showbuttons, SetShowButtons] = useState(false);
    const ShowButtonDatas = () => {
        SetShowButtons(true);
    }
    return (
        <>
            <DashboardLayout>
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                    <TopNav />
                    <div className="container-fluid py-1">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Settings</li>
                            </ol>
                            <h6 className="font-weight-bolder text-start mb-0">Settings</h6>
                        </nav>
                    </div>

                    <div className="dashboard-maincontent container-fluid py-4">
                        <div className="card p-3">
                            <h3>WhatsApp Cloud API Setup</h3>
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="campaign-template">
                                        <h6 className="campaign-temp-head">Connect WhatsApp Manually</h6>
                                        <div className="campaign-template border mt-5  shadow-lg mb-5 ">
                                            <h6 className="campaign-temp-head">Facebook Developer Account & Facebook App <span className="setting-whatsapp-ternary" onClick={ShowTernary}>Click to expand/collapse</span></h6>
                                            {showdata && (
                                                <>
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            To get started you should have Facebook App, you mostly need to select Business as type of your app.
                                                        </div>
                                                        <div className="col-md-4 text-center">
                                                            <h6>Help & More Information <i className="fa-solid fa-arrow-up-right-from-square"></i></h6>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="mt-3 whatapp-button-settings">Create or Select Facebook App <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                                                    </div>
                                                    <div>
                                                        <p className="mt-3">Once you have the Facebook app, add your App ID below, you will find it in App Settings <i className="fa-solid fa-angle-right"></i> Basic</p>
                                                    </div>
                                                    <div>
                                                        {showbutton === true ?
                                                            ""
                                                            :
                                                            <p onClick={ShowButtonData} className="whatsapp-tem-setting-btn">Click Here To Update</p>}
                                                        {showbutton && (
                                                            <>
                                                                <div className="w-30">
                                                                    <div className="vendor-create-container">
                                                                        <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                                                        <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-book-open-reader"></i> Facebook App ID</label>
                                                                    </div>
                                                                    <div className="vendor-create-container mt-3">
                                                                        <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                                                        <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-book-open-reader"></i> Facebook App Secret</label>
                                                                    </div>
                                                                    <div className="text-start">
                                                                        <button className="vendor-crt-btn">Save</button>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>

                                                </>
                                            )}
                                            <div className="mt-2">
                                                <p className="setting-whatsapp-con-tic"><i className="fa-solid fa-check setting-whatapp-tick"></i> CONFIGURED</p>
                                            </div>
                                            <div className="mt-2 ">
                                                <p className="setting-whatsapp-con-tic"><i className="fa-solid fa-check setting-whatapp-tick"></i> WEBHOOK CONFIGURED</p>
                                                <button className="settings-whats-btn-dis">Disconnect Webhook</button>
                                            </div>
                                        </div>
                                        <div className="campaign-template border mt-5  shadow-lg mb-5 ">
                                            <h6 className="campaign-temp-head">WhatsApp Integration Setup  <span className="setting-whatsapp-ternary" onClick={ShowButtonData1}> Click to expand/collapse</span></h6>
                                            {showbutton1 && (
                                                <>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p> You should have whatsapp_business_management and whatsapp_business_messaging permission  </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="mt-3 whatapp-button-settings">Quick Help</button>
                                                    </div>
                                                    <div className="mt-3 mb-4">
                                                        {showbutton === true ?
                                                            ""
                                                            :
                                                            <p onClick={ShowButtonData} className="whatsapp-tem-setting-btn">Click Here To Update</p>}
                                                        {showbutton && (
                                                            <>
                                                                <div className="w-60">
                                                                    <div className="vendor-create-container">
                                                                        <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                                                        <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-book-open-reader"></i> Access Token</label>
                                                                    </div>
                                                                    <div>
                                                                        <small>You can either use Temporary access token or Permanent Access token, as the Temporary token expires in 24 hours its strongly recommended that you should create Permanent token.</small>
                                                                    </div>
                                                                    <div className="vendor-create-container mt-3">
                                                                        <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                                                        <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-book-open-reader"></i> WhatsApp Business Account ID</label>
                                                                    </div>
                                                                    <div className="text-start">
                                                                        <button className="vendor-crt-btn">Save</button>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>

                                                </>
                                            )}
                                            <div className="mt-2">
                                                <p className="setting-whatsapp-con-tic"><i className="fa-solid fa-check setting-whatapp-tick"></i> CONFIGURED</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="campaign-template mt-4">
                                        <h6 className="campaign-temp-head">Access Token Information</h6>
                                        <div>
                                            <h6>Permission scopes</h6>
                                            <p>whatsapp_business_management, whatsapp_business_messaging, public_profile</p>
                                            <h6>Issued at</h6>
                                            <p>Monday 16th September 2024 6:00:34 am</p>
                                            <h6>Expiry at</h6>
                                            <p>N/A</p>
                                            <p className="border"></p>
                                            <button className="setting-whats-share-debug">Debug Token <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                                        </div>
                                    </div>
                                    <div className="campaign-template mt-4">
                                        <h6 className="campaign-temp-head">Access Token Information</h6>
                                        <div>
                                            <div className="vendor-create-container dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                <input
                                                    type="text"
                                                    id="vendor-crt-input"
                                                    className={"vendor-crt-input loginfilled-frame-username"}
                                                    placeholder=" "
                                                    required
                                                    readOnly
                                                />
                                                <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-phone"></i> Select Default Phone Number</label>
                                                <i className="dropdown-icon font-size-dash-arrow fa-solid fa-chevron-down"></i>
                                                <ul className="dropdown-menu storename-dropdown-menu">
                                                    <li >
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        > +91 99999 99999
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-start">
                                                <button className="vendor-crt-btn" data-bs-toggle="modal" data-bs-target="#vendorcreate">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="campaign-template border mt-5  shadow-lg mb-5 ">
                                        <h6 className="campaign-temp-head">Test Contact for Campaign  <span className="setting-whatsapp-ternary" onClick={ShowButtonDatas}> Click to expand/collapse</span></h6>
                                        {showbuttons && (
                                            <>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="vendor-create-container">
                                                            <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                                            <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-book-open-reader"></i> Test Contact Number</label>
                                                        </div>
                                                        <small>WhatsApp number to test, It should be with country code without 0 or +</small>
                                                        <div className="text-start">
                                                            <button className="vendor-crt-btn" data-bs-toggle="modal" data-bs-target="#vendorcreate">Save</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                        )}
                                        <div className="mt-2">
                                            <p className="setting-whatsapp-con-tic"><i className="fa-solid fa-check setting-whatapp-tick"></i> CONFIGURED</p>
                                        </div>
                                    </div>
                                    <div className="m-3">
                                        <h4>It's ready</h4>
                                        <p>In order to send template message you should have created and approved templates for WhatsApp Business.</p>
                                        <div className="d-flex gap-3">
                                            <button className="whatspp-set-btn-1">Manage Template</button>
                                            <button className="whatspp-set-btn-2">Manage Contacts</button>
                                            <button className="whatspp-set-btn-3 bg-dark">Create New Campaign</button>
                                            <button className="whatspp-set-btn-4">Disconnect Account</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="campaign-template">
                                        <h6 className="campaign-temp-head">Default Phone Number</h6>
                                        <div className="campaign-template border mt-5  shadow-lg mb-5 ">
                                            <h6 className="campaign-temp-head">Phone Numbers</h6>
                                            <div className="p-3">
                                                <h6>Phone Number ID</h6>
                                                <p>411364465389042</p>
                                                <h6>Verified Name</h6>
                                                <p>Varunaa Media Solutions</p>
                                                <h6>Display Phone Number</h6>
                                                <p>+91 72001 24979</p>
                                                <h6>Quality Rating</h6>
                                                <p className="text-success">GREEN</p>
                                                <button className="whatsapp-border-btn-0" type="button" data-bs-toggle="modal" data-bs-target="#vendorview"><i className="fa-solid fa-pen"></i> Update Bussiness Profile</button>
                                            </div>
                                            <p className="border"></p>
                                            <div className="d-flex gap-1">
                                                <button className="whatsapp-border-btn-1">Re-sync Phone Numbers</button>
                                                <button className="whatsapp-border-btn-2">Manage Phone Numbers <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                                            </div>
                                        </div>
                                        <div className="campaign-template border mt-5  shadow-lg mb-5 ">
                                            <h6 className="campaign-temp-head">Overall Health </h6>
                                            <div className="p-3">
                                                <h6>WhatsApp Business ID</h6>
                                                <p>439779559212511</p>
                                                <h6>Status as at</h6>
                                                <p>Monday 16th September 2024 6:00:47 am</p>
                                                <h6>Overall Health</h6>
                                                <p>AVAILABLE</p>
                                            </div>
                                        </div>
                                        <div className="campaign-template border mt-5  shadow-lg mb-5 ">
                                            <h6 className="campaign-temp-head">WABA - 439779559212511</h6>
                                            <div>
                                                <h6>Can Send Message</h6>
                                                <p>AVAILABLE</p>
                                            </div>
                                        </div>
                                        <div className="campaign-template border mt-5  shadow-lg mb-5 ">
                                            <h6 className="campaign-temp-head">BUSINESS - 400359989348636</h6>
                                            <div>
                                                <h6>Can Send Message</h6>
                                                <p>AVAILABLE</p>
                                            </div>
                                        </div>
                                        <div className="campaign-template border mt-5  shadow-lg mb-5 ">
                                            <h6 className="campaign-temp-head">APP - 409747581654078</h6>
                                            <div>
                                                <h6>Can Send Message</h6>
                                                <p>AVAILABLE</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="whatsapp-border-btn-3">Refresh Status</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade" id="vendorview" aria-labelledby="vendorviewLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content vendorcreate-modal-content">
                                            <div className="modal-header vendorcreate-modal-header">
                                                <h1 className="modal-title vendorcreate-modal-title fs-6 mb-5 text-center" id="vendorviewLabel">Update Business Profile</h1>
                                            </div>
                                            <div className="p-0 modal-body text-center ">
                                                <div className="row">
                                                    <div className="col-md-12 mt-n3 vendor-login-icon store-view-label">
                                                        <img src={Navlogo} alt="" />
                                                    </div>
                                                </div>
                                                <div className="text-start ms-4 mx-4 campaign-template">
                                                    <h6 className="campaign-temp-head text-center">New Profile Image</h6>
                                                    <div className="row">
                                                        <div className="col-md-12 login-input-group">
                                                            <div className="file-inputs px-4 ps-3">
                                                                <input
                                                                    type="file"
                                                                    name="file-input"
                                                                    id="file-input"
                                                                    className="file-input__input"
                                                                />
                                                                <label className="file-input__label" htmlFor="file-input">
                                                                    <span className="text-center p-2">Select Image</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row ms-4 mx-4">
                                                    <div className="col-md-12 login-input-group">
                                                        <div className="vendor-create-container">
                                                            <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                            <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-location-crosshairs"></i> Address</label>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-12 login-input-group">
                                                        <div className="vendor-create-container">
                                                            <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                            <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-audio-description"></i> Description</label>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-12 login-input-group">
                                                        <div className="vendor-create-container dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <input
                                                                type="text"
                                                                //  onClick={handleGetStoreDrop}
                                                                id="vendor-crt-input"
                                                                className={`vendor-crt-input`}
                                                                //  value={storeName}
                                                                placeholder=" "
                                                                required
                                                                readOnly
                                                            />
                                                            <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-id-card-clip"></i> Industry type</label>
                                                            <i className="dropdown-icon font-size-dash-arrow fa-solid fa-chevron-down"></i>
                                                            <ul className="dropdown-menu storename-dropdown-menu">

                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                    >
                                                                        Other
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12 login-input-group">
                                                        <div className="vendor-create-container">
                                                            <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " value="Hey there! I am using WhatsApp." required />
                                                            <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-regular fa-address-card"></i> About</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 login-input-group">
                                                        <div className="vendor-create-container">
                                                            <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                            <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-regular fa-envelope"></i> Email</label>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-12 login-input-group">
                                                        <div className="vendor-create-container">
                                                            <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                            <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-earth-americas"></i> Website 1</label>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-12 login-input-group">
                                                        <div className="vendor-create-container">
                                                            <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                            <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-earth-americas"></i> Website 2</label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer text-end vendor-view-footer ms-4 mx-4">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </main>
            </DashboardLayout>
        </>
    )
}
export default Whatsapp_Settings;