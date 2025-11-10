import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Userimg from "../../../assets/img/team-2.jpg";
import Userimg1 from "../../../assets/img/small-logos/logo-spotify.svg";
import DashboardLayout from "../../../layouts/DashboardLayout";
import TopNav from "../../../shared/TopNav";
import Footer from "../../../shared/Footer";

function Sms() {
   const navigate = useNavigate();
   const [modalMode, setModalMode] = useState("create");
   const openModal = (mode: any) => {
      setModalMode(mode);
   };
   const handleSubmit = () => {
      if (modalMode === "create") {
      }
   };
   return (
      <DashboardLayout>
         <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <TopNav />
            <div className="container-fluid py-1">
               <div className="row">
                  <div className="col-md-6">
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                           <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="#">Template Manageement</a></li>
                           <li className="breadcrumb-item text-sm text-dark active" aria-current="page">SMS</li>
                        </ol>
                        <h6 className="text-start font-weight-bolder mb-0">SMS</h6>
                     </nav>
                  </div>
                  <div className="col-md-6 text-end">
                     <button className="vendor-crt-btn" onClick={() => { navigate("/vendor/create-sms") }}>Create SMS</button>&nbsp;
                     <button
                        className="vendor-crt-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#smshelpmodal"
                     >
                        Help
                     </button>
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
                                       <th className="vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">Template Name</th>
                                       <th className="vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">Template Id</th>
                                       <th className="vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">Sender Id</th>
                                       <th className="vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">Sms Type</th>
                                       <th className="vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">Language</th>
                                       <th className="vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">Template Content</th>
                                       <th className="vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">Test Mobile.No</th>
                                       {/*<th></th>*/}
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div className="d-flex px-2">

                                             <div>
                                             </div>
                                             <div className="my-auto">
                                                <h6 className="mb-0 text-sm">Spotify</h6>
                                             </div>
                                          </div>
                                       </td>
                                       <td className="align-middle text-start text-sm">
                                          <span className="text-xs font-weight-bold">
                                             9841652232<br /></span>
                                       </td>
                                       <td className="align-middle text-start text-sm">
                                          <span className="text-xs font-weight-bold">
                                             3241
                                          </span>
                                       </td>
                                       <td className="align-middle text-start text-sm">
                                          <span className="text-xs font-weight-bold">
                                             Static
                                          </span>
                                       </td>
                                       <td className="align-middle vendor-login-td">
                                          <span className="text-xs font-weight-bold">
                                             eng_us
                                          </span>
                                       </td>
                                       <td className="align-middle vendor-login-td">
                                          <span className="text-xs font-weight-bold">
                                             Festival
                                          </span>
                                       </td>
                                       <td className="align-middle vendor-login-td">
                                          <span className="text-xs font-weight-bold">
                                             9080706050
                                          </span>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div className="d-flex px-2">

                                             <div>
                                             </div>
                                             <div className="my-auto">
                                                <h6 className="mb-0 text-sm">Invision</h6>
                                             </div>
                                          </div>
                                       </td>
                                       <td className="align-middle text-start text-sm">
                                          <span className="text-xs font-weight-bold">
                                             9841652232<br /></span>
                                       </td>
                                       <td className="align-middle text-start text-sm">
                                          <span className="text-xs font-weight-bold">
                                             3241
                                          </span>
                                       </td>
                                       <td className="align-middle text-start text-sm">
                                          <span className="text-xs font-weight-bold">
                                             Static
                                          </span>
                                       </td>
                                       <td className="align-middle vendor-login-td">
                                          <span className="text-xs font-weight-bold">
                                             eng_us
                                          </span>
                                       </td>
                                       <td className="align-middle vendor-login-td">
                                          <span className="text-xs font-weight-bold">
                                             Festival
                                          </span>
                                       </td>
                                       <td className="align-middle vendor-login-td">
                                          <span className="text-xs font-weight-bold">
                                             9080706050
                                          </span>
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
            {/* Store Help Modal */}
            <div
               className="modal fade"
               id="smshelpmodal"
               tab-Index="-1"
               aria-labelledby="smshelpmodalLabel"
               aria-hidden="true"
            >
               <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                     <div className="modal-content">
                        <div className="modal-header border-0">
                           <h1 className="modal-title fs-5" id="smsHelpModalLabel">
                              What is SMS Auto-Reply and How to Use It?
                           </h1>
                           <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                           ></button>
                        </div>
                        <div className="modal-body text-start">
                           <h6>What is SMS Auto-Reply?</h6>
                           <p>
                              SMS Auto-Reply allows you to set up automated responses for incoming text messages.
                              When someone sends an SMS with a specific keyword or phrase, the system will automatically send a pre-set reply.
                           </p>
                           <h6>How to Set Up SMS Auto-Reply?</h6>
                           <p>
                              1. Go to the SMS Auto-Reply settings in your dashboard.<br />
                              2. Add a new auto-reply by defining a trigger keyword or phrase and the response message.<br />
                              3. Save your settings, and the system will send the auto-reply whenever the trigger is detected.
                           </p>
                        </div>
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
         </main>

      </DashboardLayout >
   );

}

export default Sms;