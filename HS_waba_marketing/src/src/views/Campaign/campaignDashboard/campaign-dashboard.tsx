import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Userimg from "../../../assets/img/team-2.jpg";
import Userimg1 from "../../../assets/img/small-logos/logo-spotify.svg"
import DashboardLayout from "../../../layouts/DashboardLayout";
import TopNav from "../../../shared/TopNav";
import Footer from "../../../shared/Footer";
function CampaignDashboard() {
    const navigate = useNavigate();
    const [tab, setTab] = useState(true);
    const handleBacktoSadmin = (e: any) => {
        e.preventDefault();
        navigate("/dashboard", { replace: true });
    };
    const handleQuene = () => {
        setTab(true);
    }
    const handleExecuted = () => {
        setTab(false);
    }

    return (
        <DashboardLayout>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <TopNav />
                <div className="container-fluid py-1">
                    <div className="row">
                        <div className="col-md-6">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                    <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Create Campaigns</a></li>
                                    <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Campaign Dashboard</li>
                                </ol>
                                <h6 className="text-start font-weight-bolder mb-0">Campaign Dashboard</h6>
                            </nav>
                        </div>
                        <div className="col-md-6 text-end">
                            <button className="vendor-crt-btn" onClick={() => { navigate("/vendor/campaign") }}>Back to Campaigns</button>&nbsp;
                            <button className="vendor-crt-btn" onClick={() => { navigate("/vendor/create-campaign") }}>Create Campaigns</button>
                        </div>
                    </div>
                </div>
                <div className="maincontent container-fluid py-4">
                    <div className="row myprofile-content text-start">
                        <div className="custom-heading">CAMPAIGNS NAME</div>
                        <div>
                            <h6 className="camp-dash-temp">welcome</h6>
                            <div>
                                <div className="mb-1 custom-Executed">
                                    <span className="campaign-dash-execute">EXECUTED</span></div>
                            </div>
                            <div>
                                <div className="mb-1 custom-scheduled text-success campaign-dash-fonts">Execution Scheduled at</div>
                                <p className="campaign-dash-fonts">Sunday 1st December 2024 3:41:20</p>
                            </div>
                            <div>
                                <div className="camp-dash-temp">Template Name</div>
                                <h6 className="camp-dash-temp">welcome</h6>
                            </div>
                            <div>
                                <div className="camp-dash-temp">Template Language</div>
                                <h6 className="camp-dash-temp">English</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-maincontent container-fluid py-4">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-6 dashboard-card">
                                    <div className="card">
                                        <span className="mask bg-primary opacity-10 border-radius-lg"></span>
                                        <div className="card-body p-3 position-relative">
                                            <div className="row">
                                                <div className="col-8 text-start">
                                                    <div className="icon icon-shape bg-white shadow text-center border-radius-2xl">
                                                        <i className="fa-solid fa-store"></i>
                                                    </div>
                                                    <h5 className="text-white font-weight-bolder mb-0 mt-3">
                                                        10
                                                    </h5>
                                                    <span className="text-white text-sm">Total Contacts</span>
                                                    <p className="text-white text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer">Data 2 groups.</p>
                                                </div>
                                                <div className="col-4">
                                                    <div className="dropdown text-end mb-6">
                                                        <a href="javascript:;" className="cursor-pointer" id="dropdownUsers1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fa fa-ellipsis-h text-white"></i>
                                                        </a>
                                                        <ul className="dropdown-menu px-2 py-3" aria-labelledby="dropdownUsers1">
                                                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                                                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                                                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6 dashboard-card">
                                    <div className="card">
                                        <span className="mask bg-dark opacity-10 border-radius-lg"></span>
                                        <div className="card-body p-3 position-relative">
                                            <div className="row">
                                                <div className="col-8 text-start">
                                                    <div className="icon icon-shape bg-white shadow text-center border-radius-2xl">
                                                        <i className="fa-solid fa-check"></i>
                                                    </div>
                                                    <h5 className="text-white font-weight-bolder mb-0 mt-3">
                                                        66.67%
                                                    </h5>
                                                    <span className="text-white text-sm">Total Delivered</span>
                                                    <p className="text-white text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer">2 Contacts</p>
                                                </div>
                                                <div className="col-4">
                                                    <div className="dropstart text-end mb-6">
                                                        <a href="javascript:;" className="cursor-pointer" id="dropdownUsers2" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fa fa-ellipsis-h text-white"></i>
                                                        </a>
                                                        <ul className="dropdown-menu px-2 py-3" aria-labelledby="dropdownUsers2">
                                                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                                                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                                                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6 dashboard-card">
                                    <div className="card">
                                        <span className="mask bg-dark opacity-10 border-radius-lg"></span>
                                        <div className="card-body p-3 position-relative">
                                            <div className="row">
                                                <div className="col-8 text-start">
                                                    <div className="icon icon-shape bg-white shadow text-center border-radius-2xl">
                                                        <i className="fa-solid fa-list-check"></i>
                                                    </div>
                                                    <h5 className="text-white font-weight-bolder mb-0 mt-3">
                                                        66.67%
                                                    </h5>
                                                    <span className="text-white text-sm">Total Read</span>
                                                    <p className="text-white text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer">2 Contacts</p>
                                                </div>
                                                <div className="col-4">
                                                    <div className="dropstart text-end mb-6">
                                                        <a href="javascript:;" className="cursor-pointer" id="dropdownUsers2" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fa fa-ellipsis-h text-white"></i>
                                                        </a>
                                                        <ul className="dropdown-menu px-2 py-3" aria-labelledby="dropdownUsers2">
                                                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                                                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                                                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6 dashboard-card">
                                    <div className="card">
                                        <span className="mask bg-dark opacity-10 border-radius-lg"></span>
                                        <div className="card-body p-3 position-relative">
                                            <div className="row">
                                                <div className="col-8 text-start">
                                                    <div className="icon icon-shape bg-white shadow text-center border-radius-2xl">
                                                        <i className="fa-solid fa-circle-exclamation"></i>
                                                    </div>
                                                    <h5 className="text-white font-weight-bolder mb-0 mt-3">
                                                        66.67%
                                                    </h5>
                                                    <span className="text-white text-sm">Total Failed</span>
                                                    <p className="text-white text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer">1 Contacts</p>
                                                </div>
                                                <div className="col-4">
                                                    <div className="dropstart text-end mb-6">
                                                        <a href="javascript:;" className="cursor-pointer" id="dropdownUsers2" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fa fa-ellipsis-h text-white"></i>
                                                        </a>
                                                        <ul className="dropdown-menu px-2 py-3" aria-labelledby="dropdownUsers2">
                                                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                                                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                                                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vendor-maincontent py-4">
                                <div className="row align-items-center mt-3">
                                    {/* Tabs on the left, buttons on the right */}
                                    <div className="d-flex justify-content-between align-items-center">
                                        {/* Tabs Section */}
                                        <ul className="campaign-tabs nav nav-tabs">
                                            <li className="nav-item">
                                                <button
                                                    style={tab ? { background: "#00acf0", color: "white", border: "0px" } : {}}
                                                    className="nav-link active"
                                                    aria-current="page"
                                                    onClick={handleQuene}
                                                >
                                                    Queue
                                                </button>
                                            </li>
                                            <li className="nav-item">
                                                <button
                                                    style={!tab ? { background: "#00acf0", color: "white", border: "0px" } : {}}
                                                    className="nav-link active"
                                                    aria-current="page"
                                                    onClick={handleExecuted}
                                                >
                                                    Executed
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="d-flex gap-2">
                                            <button className="button-header text-xs camp-dash-rebtn">
                                                <i className="fa-solid fa-arrows-rotate"></i> Refresh
                                            </button>
                                            <button className="button-header text-xs camp-dash-rebtn">
                                                <i className="fa-solid fa-download"></i> Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Campaign Table Tabs */}
                                <div className="card mb-4 campaign-table-tabs">
                                    {tab ? (
                                        <div className="card-body px-0 pt-0 pb-2">
                                            <div className="table-responsive p-0">
                                                <table className="table align-items-center justify-content-center mb-0">
                                                    <thead>
                                                        <tr className="campaign-action">
                                                            <th className="text-uppercase campaign-table-head text-xxs font-weight-bolder opacity-7">Name</th>
                                                            <th className="text-uppercase campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">PHONE NUMBER</th>
                                                            <th className="text-uppercase campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">LAST STATUS UPDATE AT</th>
                                                            <th className="text-uppercase campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">MESSAGE</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="campaign-action">
                                                        <tr>
                                                            <td><span className="text-xs font-weight-bold">Queue</span></td>
                                                            <td><span className="text-xs font-weight-bold">queue</span></td>
                                                            <td>
                                                                <span className="text-xs font-weight-bold">
                                                                    Monday 1st December 2025<br />
                                                                    03.43.00 am
                                                                </span>
                                                            </td>
                                                            <td><span className="text-xs font-weight-bold">eng</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="text-xs font-weight-bold">Queue</span></td>
                                                            <td><span className="text-xs font-weight-bold">queue</span></td>
                                                            <td>
                                                                <span className="text-xs font-weight-bold">
                                                                    Monday 1st December 2025<br />
                                                                    03.43.00 am
                                                                </span>
                                                            </td>
                                                            <td><span className="text-xs font-weight-bold">eng</span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="card-body px-0 pt-0 pb-2">
                                            <div className="table-responsive p-0">
                                                <table className="table align-items-center justify-content-center mb-0">
                                                    <thead>
                                                        <tr className="campaign-action">
                                                            <th className="text-uppercase campaign-table-head text-xxs font-weight-bolder opacity-7">Name</th>
                                                            <th className="text-uppercase campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">PHONE NUMBER</th>
                                                            <th className="text-uppercase campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">MESSAGE DELIVERY STATUS</th>
                                                            <th className="text-uppercase campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">LAST STATUS UPDATE AT</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="campaign-action">
                                                        <tr>
                                                            <td><span className="text-xs font-weight-bold">Excuted</span></td>
                                                            <td><span className="text-xs font-weight-bold">excuted</span></td>
                                                            <td><span className="text-xs font-weight-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076">
                                                                <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"></path>
                                                            </svg> Read</span></td>
                                                            <td>
                                                                <span className="text-xs font-weight-bold">
                                                                    Monday 1st December 2025<br />
                                                                    03.43.00 am
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="text-xs font-weight-bold">Excuted</span></td>
                                                            <td><span className="text-xs font-weight-bold">excuted</span></td>
                                                            <td><span className="text-xs font-weight-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076">
                                                                <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"></path>
                                                            </svg> Read</span></td>
                                                            <td>
                                                                <span className="text-xs font-weight-bold">
                                                                    Friday 21st August 2025<br />
                                                                    12.33.00 am
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </DashboardLayout>
    )
}
export default CampaignDashboard;