import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Userimg from "../../../assets/img/team-2.jpg"
import Userimg1 from "../../../assets/img/small-logos/logo-spotify.svg"
import DashboardLayout from "../../../layouts/DashboardLayout";
import TopNav from "../../../shared/TopNav";
import Footer from "../../../shared/Footer";
function Campaigns() {
   const [tab, setTab] = useState(true);
   const navigate = useNavigate();
   const handleBacktoSadmin = (e: any) => {
      e.preventDefault();
      navigate("/dashboard", { replace: true });
   };
   const handleActive = () => {
      setTab(true);
   }
   const handleArchive = () => {
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
                           <li className="breadcrumb-item text-sm"><Link className="opacity-5 text-dark" to={"/vendor/dashboard"}>Dashboard</Link></li>
                           <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Campaigns</li>
                        </ol>
                        <h6 className="text-start font-weight-bolder mb-0">Campaigns</h6>
                     </nav>
                  </div>
                  <div className="col-md-6 text-end">
                     <button className="vendor-crt-btn" onClick={() => { navigate("/vendor/create-campaign") }}>Create Campaigns</button>
                  </div>
               </div>
            </div>
            <div className="vendor-maincontent container-fluid py-4">
               <div className="row">
                  <div className="col-12">
                     <ul className="campaign-tabs nav nav-tabs">
                        <li className="nav-item" >
                           <button style={tab ? { background: "#00acf0", color: "white", border: "0px" } : {}} className="nav-link active" aria-current="page" onClick={handleActive}>Active</button>
                        </li>
                        <li className="nav-item">
                           <button style={!tab ? { background: "#00acf0", color: "white", border: "0px" } : {}} className="nav-link active" aria-current="page" onClick={handleArchive}>Archive</button>
                        </li>
                     </ul>
                     <div className="card mb-4 campaign-table-tabs">


                        {tab ?

                           <div className="card-body px-0 pt-0 pb-2">
                              <div className="table-responsive p-0">
                                 <table className="table align-items-center justify-content-center mb-0">
                                    <thead>
                                       <tr className="campaign-action">
                                          <th className="campaign-table-head text-xxs font-weight-bolder opacity-7">Title</th>
                                          <th className="campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">Template</th>
                                          <th className="campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">Template language</th>
                                          <th className="campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">Created at</th>
                                          <th className="campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">Schedule at</th>
                                          <th className="campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                          <th className="campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">Action</th>
                                       </tr>
                                    </thead>
                                    <tbody className="campaign-action">
                                       <tr>
                                          <td>
                                             <div className="d-flex px-2">
                                                <div className="my-auto">
                                                   <span className="text-xs font-weight-bold">
                                                      Welcome</span>
                                                </div>
                                             </div>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                welcome</span>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                eng</span>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                Friday 21th August 2025<br />
                                                12.33.00 am
                                             </span>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                Friday 21th August 2025<br />
                                                12.33.00 am
                                             </span>
                                          </td>
                                          <td>
                                             <div className="form-check form-switch ms-1 is-filled">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                             </div>
                                          </td>
                                          <td className="align-middle campaign-action">
                                             <button className="btn-3 campaign-campaigndashbtn" onClick={() => navigate("/vendor/campaign/dashboard")} type="button">
                                                <span className="btn-inner--icon">Campaign Dashboard</span>
                                             </button><br></br>
                                             <button className="btn-3 campaign-archivebtn" type="button" data-bs-toggle="modal" data-bs-target="#vendordelete">
                                                <span className="btn-inner--icon">Archive</span>
                                             </button>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>
                                             <div className="d-flex px-2">
                                                <div className="my-auto">
                                                   <span className="text-xs font-weight-bold">
                                                      Welcome</span>
                                                </div>
                                             </div>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                welcome</span>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                eng</span>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                Friday 21th August 2025<br />
                                                12.33.00 am
                                             </span>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                Friday 21th August 2025<br />
                                                12.33.00 am
                                             </span>
                                          </td>
                                          <td>
                                             <div className="form-check form-switch ms-1 is-filled">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                             </div>
                                          </td>
                                          <td className="align-middle campaign-action">
                                             <button className="btn-3 campaign-campaigndashbtn" onClick={() => navigate("/vendor/campaign/dashboard")} type="button">
                                                <span className="btn-inner--icon">Campaign Dashboard</span>
                                             </button><br></br>
                                             <button className="btn-3 campaign-archivebtn" type="button" data-bs-toggle="modal" data-bs-target="#vendordelete">
                                                <span className="btn-inner--icon">Archive</span>
                                             </button>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                           :

                           <div className="card-body px-0 pt-0 pb-2">
                              <div className="table-responsive p-0">
                                 <table className="table align-items-center justify-content-center mb-0">
                                    <thead>
                                       <tr className="campaign-action">
                                          <th className="campaign-table-head campaign-table-head text-xxs font-weight-bolder opacity-7">Tille</th>
                                          <th className="campaign-table-head campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">Template</th>
                                          <th className="campaign-table-head campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">Template language</th>
                                          <th className="campaign-table-head campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">Created at</th>
                                          <th className="campaign-table-head campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">Schedule at</th>
                                          <th className="campaign-table-head campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                          <th className="campaign-table-head campaign-table-head text-xxs font-weight-bolder opacity-7 ps-2">Action</th>
                                       </tr>
                                    </thead>
                                    <tbody className="campaign-action">
                                       <tr>
                                          <td>
                                             <div className="d-flex px-2">
                                                <div className="my-auto">
                                                   <span className="text-xs font-weight-bold">
                                                      Archive</span>
                                                </div>
                                             </div>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                archive</span>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                eng_us</span>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                Friday 21th August 2025<br />
                                                12.33.00 am
                                             </span>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                Friday 21th August 2025<br />
                                                12.33.00 am
                                             </span>
                                          </td>
                                          <td>
                                             <div className="form-check form-switch ms-1 is-filled">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                             </div>
                                          </td>
                                          <td className="align-middle campaign-action">
                                             <button className="btn-3 campaign-campaigndashbtn" type="button" onClick={() => navigate("/vendor/campaign/dashboard")}>
                                                <span className="btn-inner--icon">Campaign Dashboard</span>
                                             </button><br></br>
                                             <button className="btn-3 campaign-archivebtn" type="button" data-bs-toggle="modal" data-bs-target="#vendordelete">
                                                <span className="btn-inner--icon">Archive</span>
                                             </button>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>
                                             <div className="d-flex px-2">
                                                <div className="my-auto">
                                                   <span className="text-xs font-weight-bold">
                                                      Archive</span>
                                                </div>
                                             </div>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                archive</span>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                eng_us</span>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                Friday 21th August 2025<br />
                                                12.33.00 am
                                             </span>
                                          </td>
                                          <td>
                                             <span className="text-xs font-weight-bold">
                                                Friday 21th August 2025<br />
                                                12.33.00 am
                                             </span>
                                          </td>
                                          <td>
                                             <div className="form-check form-switch ms-1 is-filled">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                             </div>
                                          </td>
                                          <td className="align-middle campaign-action">
                                             <button className="btn-3 campaign-campaigndashbtn" type="button" onClick={() => navigate("/vendor/campaign/dashboard")}>
                                                <span className="btn-inner--icon">Campaign Dashboard</span>
                                             </button><br></br>
                                             <button className="btn-3 campaign-archivebtn" type="button" data-bs-toggle="modal" data-bs-target="#vendordelete">
                                                <span className="btn-inner--icon">Archive</span>
                                             </button>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>}
                     </div>
                  </div>
               </div>
               <Footer />
            </div>
         </main>
      </DashboardLayout>
   )
}

export default Campaigns