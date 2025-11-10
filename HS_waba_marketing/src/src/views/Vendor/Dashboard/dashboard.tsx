import SoftUI from "../../../assets/img/small-logos/logo-xd.svg";
import AddProgress from "../../../assets/img/small-logos/logo-atlassian.svg";
import FixPlat from "../../../assets/img/small-logos/logo-slack.svg";
import LaunchIcon from "../../../assets/img/small-logos/logo-spotify.svg";
import DashboardLayout from "../../../layouts/DashboardLayout";
import TopNav from "../../../shared/TopNav";
import Footer from "../../../shared/Footer";
import "./dashboard.css"
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function VendorDashboard() {
   const navigate = useNavigate();
   const handleBacktoSadmin = (e: any) => {
      e.preventDefault();
      navigate("/dashboard", { replace: true });
   };
   return (
      <>
         <DashboardLayout>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
               <TopNav />
               <div className="container-fluid py-1">
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="#">Pages</a></li>
                        <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Vendor Dashboard</li>
                     </ol>
                     <h6 className="font-weight-bolder text-start mb-0">Vendor Dashboard</h6>
                  </nav>
               </div>
               <div className="dashboard-maincontent container-fluid py-4">
                  <div className="row">
                     <div className="col-lg-12 col-12">
                        <div className="row">
                           <div className="col-lg-4 col-md-4 col-6 dashboard-card">
                              <div className="card">
                                 <span className="mask vendor-dash-bg-img opacity-10 border-radius-lg"></span>
                                 <div className="card-body p-3 position-relative">
                                    <div className="row">
                                       <div className="col-9 text-start">
                                          <div className="icon icon-shape bg-white vendor-dashboard-iconbg shadow text-center border-radius-2xl">
                                             <i className="fa-solid fa-store vendor-dashboard-icon"></i>
                                          </div>
                                          <h5 className="font-weight-bolder mb-0 mt-3">
                                             10
                                          </h5>
                                          <span className="text-sm">Total Customers</span>
                                          <p className="text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer">Manage Customers</p>
                                       </div>
                                       <div className="col-3">
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
                           <div className="col-lg-4 col-md-4 col-6 dashboard-card">
                              <div className="card">
                                 <span className="mask vendor-dash-bg-img1 opacity-10 border-radius-lg"></span>
                                 <div className="card-body p-3 position-relative">
                                    <div className="row">
                                       <div className="col-9 text-start">
                                          <div className="icon icon-shape bg-dark vendor-dashboard-iconbg shadow text-center border-radius-2xl">
                                             <i className="fa-brands fa-whatsapp text-white"></i>
                                          </div>
                                          <h5 className="font-weight-bolder mb-0 mt-3">
                                             15
                                          </h5>
                                          <span className="text-sm">Queue Whatsapp</span>
                                          <p className="text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer">Manage Queue Whatsapp</p>
                                       </div>
                                       <div className="col-3">
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
                           <div className="col-lg-4 col-md-4 col-6 dashboard-card">
                              <div className="card">
                                 <span className="mask vendor-dash-bg-img2 opacity-10 border-radius-lg"></span>
                                 <div className="card-body p-3 position-relative">
                                    <div className="row">
                                       <div className="col-9 text-start">
                                          <div className="icon icon-shape bg-dark vendor-dashboard-iconbg shadow text-center border-radius-2xl">
                                             <i className="fa-solid fa-message text-white"></i>
                                          </div>
                                          <h5 className="font-weight-bolder mb-0 mt-3">
                                             7
                                          </h5>
                                          <span className="text-sm">Messages in Queue SMS</span>
                                          <p className="text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer">Manage Queue SMS</p>
                                       </div>
                                       <div className="col-3">
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
                           <div className="col-lg-4 col-md-4 col-6 dashboard-card">
                              <div className="card">
                                 <span className="mask vendor-dash-bg-img3 opacity-10 border-radius-lg"></span>
                                 <div className="card-body p-3 position-relative">
                                    <div className="row">
                                       <div className="col-9 text-start">
                                          <div className="icon icon-shape bg-dark vendor-dashboard-iconbg shadow text-center border-radius-2xl">
                                             <i className="fa-solid fa-comments text-white"></i>
                                          </div>
                                          <h5 className="font-weight-bolder mb-0 mt-3">
                                             5
                                          </h5>
                                          <span className="text-sm">Total SMS Balance </span>
                                          <p className="text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer">Manage SMS Balance</p>
                                       </div>
                                       <div className="col-3">
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
                     </div>
                  </div>
                  <Footer />
               </div>
            </main>
         </DashboardLayout>
      </>
   )
}
export default VendorDashboard;