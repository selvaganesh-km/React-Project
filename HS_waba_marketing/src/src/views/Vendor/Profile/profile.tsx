import React from 'react'
import Sidebar from '../../../shared/Sidebar';
import Footer from '../../../shared/Footer';
import Userimg from "../../../assets/img/team-2.jpg"
import Userimg1 from "../../../assets/img/small-logos/logo-spotify.svg"
import DashboardLayout from '../../../layouts/DashboardLayout';
import TopNav from '../../../shared/TopNav';
import { Link } from 'react-router-dom';
function VendorProfile() {
   return (
      <>
         <DashboardLayout>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
               <TopNav />
               <div className="vendor-breadcrumbs container-fluid py-1 px-3">
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm"><Link className="opacity-5 text-dark" to={"/vendor/dashboard"}>Dashboard</Link></li>
                        <li className="breadcrumb-item text-sm text-dark active" aria-current="page">My Profile</li>
                     </ol>
                     <h6 className="text-start font-weight-bolder mb-0">My Profile</h6>
                  </nav>
               </div>
               <div className="myprofile-maincontent container-fluid py-4">
                  <div className="row myprofile-content">
                     <div className="col-md-6">
                        <h5 className="text-start">Vendor Edit Profile</h5>
                        <div className="col-md-12 login-input-group">
                           <div className="edit-container">
                              <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                              <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-user-secret"></i> Username</label>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-md-6 edit-name login-input-group">
                              <div className="edit-container">
                                 <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                 <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-user"></i> First Name</label>
                              </div>
                           </div>
                           <div className="col-md-6 login-input-group">
                              <div className="edit-container">
                                 <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                 <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-user"></i> Last Name</label>
                              </div>
                           </div>
                           <div className="col-md-6 login-input-group">
                              <div className="edit-container">
                                 <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                 <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-mobile-screen-button"></i> Mobile Number</label>
                              </div>
                           </div>
                           <div className="col-md-6 login-input-group">
                              <div className="edit-container">
                                 <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                 <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-at"></i> Email</label>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-12 login-input-group">
                           <div className="edit-container">
                              <input type="file" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                              <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-file-image"></i> Profile Image</label>
                           </div>
                        </div>
                        <div className="col-md-12 edit-button text-end">
                           <button>Save</button>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <h5 className="text-start">Password</h5>
                        <div className="col-md-12 login-input-group">
                           <div className="edit-container">
                              <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                              <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-unlock"></i> Current Password</label>
                           </div>
                        </div>
                        <div className="col-md-12 new-password login-input-group">
                           <div className="edit-container">
                              <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                              <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-lock-open"></i> New Password</label>
                           </div>
                        </div>
                        <div className="col-md-12 new-password login-input-group">
                           <div className="edit-container">
                              <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                              <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-lock"></i> Confirm New Password</label>
                           </div>
                        </div>
                        <div className="col-md-12 edit-button text-end">
                           <button>Change Password</button>
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
export default VendorProfile;