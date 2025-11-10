import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spotify from "../../../assets/img/small-logos/logo-spotify.svg";
import Slack from "../../../assets/img/small-logos/logo-slack.svg";

import DashboardLayout from "../../../layouts/DashboardLayout";
import TopNav from "../../../shared/TopNav";
import "./store.css"
// import MasterAPI from "../../../api/services/masterApi";
import { toast } from "react-toastify";
import VendorAPI from "../../../api/services/vendorLogin/vendorApi";
import { Pagination } from "react-bootstrap";
import API from "../../../api/api";
import API_EP_BOOK from "../../../api/endpoints";
const importStore = API_EP_BOOK.IMPORT_STORE_API_EP;
const exportStore = API_EP_BOOK.EXPORT_STORE_API_EP;
interface StoreList {
   storeId: string;
   storeUid: string;
   storeName: any;
   storeAddressLine1: string;
   storeAddressLine2: string;
   storeDist: string;
   storeState: string;
   storePincode: string;
   storePhone: string;
   storeEmail: string;
   storeStatus: string;
}

function VendorStore() {
   const navigate = useNavigate();

   const [loading, setLoading] = useState(false);
   const [modalMode, setModalMode] = useState("create");
   const [vendorListData, setVendorListData] = useState<StoreList[]>([]);
   const [storeName, setStorename] = useState("")
   const [storeIds, setStoreId] = useState("")
   const [vendorId, setVendorId] = useState("")
   const [phone, setPhone] = useState("")
   const [address1, setAddress1] = useState("")
   const [address2, setAddress2] = useState("")
   const [district, setDistrict] = useState("")
   const [state, setState] = useState("")
   const [pincode, setPincode] = useState("")
   const [email, setEmail] = useState("")
   const [submit, setSubmit] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [recordsPerPage] = useState(5);
   const [totalRecords, setTotalRecords] = useState(0);
   // Pagination Method

   const totalPages = Math.ceil(totalRecords / recordsPerPage);

   const handlePageChange = (pageNumber: any) => {
      if (pageNumber < 1 || pageNumber > totalPages) return;
      setCurrentPage(pageNumber);
   };
   const renderPaginationItems = () => {
      let items = [];
      const maxPageNumbersToShow = 7;
      const halfRange = Math.floor(maxPageNumbersToShow / 2);

      let startPage, endPage;
      if (totalPages <= maxPageNumbersToShow) {
         startPage = 1;
         endPage = totalPages;
      } else if (currentPage <= halfRange) {
         startPage = 1;
         endPage = maxPageNumbersToShow;
      } else if (currentPage + halfRange >= totalPages) {
         startPage = totalPages - maxPageNumbersToShow + 1;
         endPage = totalPages;
      } else {
         startPage = currentPage - halfRange;
         endPage = currentPage + halfRange;
      }

      if (startPage > 1) {
         items.push(
            <Pagination.Item key="1" active={1 === currentPage} onClick={() => handlePageChange(1)}>
               1
            </Pagination.Item>
         );
         if (startPage > 2) {
            items.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
         }
      }

      for (let number = startPage; number <= endPage; number++) {
         items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
               {number}
            </Pagination.Item>
         );
      }

      if (endPage < totalPages) {
         if (endPage < totalPages - 1) {
            items.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
         }
         items.push(
            <Pagination.Item key={totalPages} active={totalPages === currentPage} onClick={() => handlePageChange(totalPages)}>
               {totalPages}
            </Pagination.Item>
         );
      }

      return items;
   };

   const openModal = (mode: any) => {
      setModalMode(mode);
   };
   const resetForm = () => {
      setStorename("");
      setVendorId("");
      setPhone("");
      setEmail("");
      setAddress1("");
      setAddress2("");
      setDistrict("");
      setState("");
      setPincode("");
      setSubmit(false)
   }
   const handlecreateStore = () => {
      setSubmit(true);
      if (!storeName || !phone || !address1 || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i)) {
         return;
      }

      console.log(modalMode === "edit" && { id: storeIds }, "modal");

      setLoading(true)
      const apiData = {
         ...(modalMode === "edit" && { id: storeIds }),
         storeName: storeName,
         addressLine1: address1,
         addressLine2: address2,
         district: district,
         state: state,
         pincode: pincode,
         phone: phone,
         email: email
      };
      const apiCall = modalMode === "create" ? VendorAPI.createStore(apiData) : VendorAPI.updateStore(apiData);
      apiCall
         .then((responseData: any) => {
            if (responseData.apiStatus.code === '200') {
               resetForm();
               handleStoreList(currentPage);
               setLoading(false)
               setSubmit(false);
               toast.success(responseData.apiStatus.message);
               const closeButton = document.getElementById("closeModal");
               if (closeButton) {
                  closeButton.click();
               }
            } else {
               toast.error(responseData.apiStatus.message);
            }
         })
         .catch((error: any) => {
            setLoading(false)
            console.error("Error during login:", error);
            toast.error("An error occurred during login.");
         });
   };
   const handleGetStore = (storeId: any) => {
      VendorAPI.getStoreByIdAPIEP(storeId)
         .then((responseData: any) => {
            if (responseData.apiStatus.code === '200') {
               // setStoreId(responseData.result.store_id);
               setStorename(responseData.result.storeName);
               setAddress1(responseData.result.storeAddressLine1);
               setAddress2(responseData.result.storeAddressLine2);
               setDistrict(responseData.result.storeDist);
               setState(responseData.result.storeState);
               setPincode(responseData.result.storePincode);
               setPhone(responseData.result.storePhone);
               setEmail(responseData.result.storeEmail);
            } else {
               toast.error(responseData.apiStatus.message);
            }
         })
         .catch((error: any) => {
            setLoading(false)
            console.error("Error during login:", error);
            toast.error("An error occurred during login.");
         });
   };
   const handleActiveStore = (storeId: any) => {
      VendorAPI.storeActiveAPIEP(storeId)
         .then((responseData: any) => {
            if (responseData.apiStatus.code === '200') {
               toast.success(responseData.apiStatus.message);
               handleStoreList(currentPage);
            } else {
               toast.error(responseData.apiStatus.message);
            }
         })
         .catch((error: any) => {
            setLoading(false)
            console.error("Error during login:", error);
            toast.error("An error occurred during login.");
         });
   };
   const handleDeactiveStore = (storeId: any) => {
      VendorAPI.storeDeactiveAPIEP(storeId)
         .then((responseData: any) => {
            if (responseData.apiStatus.code === '200') {
               toast.success(responseData.apiStatus.message);
               handleStoreList(currentPage)
            } else {
               toast.error(responseData.apiStatus.message);
            }
         })
         .catch((error: any) => {
            setLoading(false)
            console.error("Error during login:", error);
            toast.error("An error occurred during login.");
         });
   };
   const handleDeleteStore = () => {
      VendorAPI.deleteStoreAPIEP(storeIds)
         .then((responseData: any) => {
            console.log("API response data:", responseData);
            if (responseData.apiStatus.code === '200') {
               const closeButton = document.getElementById("closedeleteModal");
               if (closeButton) {
                  handleStoreList(currentPage);
                  closeButton.click();
               }
               toast.success(responseData.apiStatus.message)
            } else {
               toast.error(responseData.apiStatus.message);
            }
         })
         .catch((error: any) => {
            setLoading(false)
            console.error("Error during login:", error);
            toast.error("An error occurred during login.");
         });
   };


   const handleStoreList = (page: any) => {
      setLoading(true)
      const apiData = {
         pageIndex: page - 1,
         dataLength: recordsPerPage
      };
      VendorAPI.listStoreData(apiData)
         .then((responseData: any) => {
            if (responseData.apiStatus.code === '200') {
               setLoading(false)
               setVendorListData(responseData.result.StoreData)
               setTotalRecords(responseData.result.totalRecordCount)
            } else {
               toast.error(responseData.apiStatus.message);
            }
         })
         .catch((error: any) => {
            setLoading(false)
            console.error("Error during login:", error);
            toast.error("An error occurred during login.");
         });
   }
   const [file, setFile] = useState<File | null>(null);
   const [fileName, setFileName] = useState("");

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
         setFile(selectedFile);
         setFileName(selectedFile.name);
      }
   };

   const handleImport = async () => {
      if (!file) {
         toast.error("Please select a file to import.");
         return;
      }
      const formData = new FormData();
      formData.append("file", file);
      try {
         const response = await API(importStore, {
            bodyData: formData,
         });
         if (response.apiStatus?.code === "200") {
            handleStoreList(currentPage)
            toast.success(response.apiStatus.message);
            document.getElementById("closepopup")?.click();
         } else {
            toast.error(response.apiStatus?.message || "File import failed.");
         }
      } catch (error) {
         console.error("Import Error:", error);
         toast.error("An error occurred while importing the file.");
      }
   };

   const handleExport = async () => {
      try {
         const response = await API(exportStore, {
         });
         const blob = new Blob([response], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
         const today = new Date();
         const formattedDate = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear().toString().slice(-2)}`;
         const fileName = `store_data_${formattedDate}.xlsx`;
         const url = window.URL.createObjectURL(blob);
         const link = document.createElement("a");
         link.href = url;
         link.setAttribute("download", fileName);
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
         window.URL.revokeObjectURL(url);
         toast.success(`File downloaded: ${fileName}`);
      } catch (error) {
         console.error("Error downloading file:", error);
      }
   };
   useEffect(() => {
      handleStoreList(currentPage);
   }, [currentPage])


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
                           <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Stores</li>
                        </ol>
                        <h6 className="text-start font-weight-bolder mb-0">Stores</h6>
                     </nav>
                  </div>
                  <div className="col-md-6 text-end">
                     <button className="vendor-crt-btn" data-bs-toggle="modal" data-bs-target="#vendorcreate" onClick={() => openModal("create")}>Create Store</button>&nbsp;
                     <button className="vendor-crt-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >Import</button>&nbsp;
                     <button className="vendor-crt-btn" onClick={handleExport}>Export</button>
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
                                    <tr>
                                       <th className="store-table-head text-secondary text-xxs font-weight-bolder opacity-7">Store Name</th>
                                       <th className="store-table-head text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Address</th>
                                       <th className="store-table-head text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Phone & Email</th>
                                       <th className="store-table-head text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                       <th className="store-table-head text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Action</th>
                                    </tr>
                                 </thead>
                                 <tbody className="table-tbody-list">
                                    {vendorListData?.length > 0 ? (
                                       vendorListData.map((listData, id) => (
                                          <tr>
                                             <td>
                                                <div className="d-flex px-2">
                                                   <div>
                                                      <img src={Slack} className="avatar avatar-sm rounded-circle me-2" alt="spotify" />
                                                   </div>
                                                   <div className="my-auto">
                                                      <h6 className="mb-0 text-xs">{listData.storeName}</h6>
                                                   </div>
                                                </div>
                                             </td>
                                             <td>
                                                <span className="text-xs">
                                                   {listData.storeAddressLine1}</span>
                                             </td>
                                             <td>
                                                <span className="text-xs">
                                                   {listData.storePhone}<br />
                                                   {listData.storeEmail}
                                                </span>
                                             </td>
                                             <td>
                                                <div className="form-check form-switch ms-1 is-filled">
                                                   <input
                                                      onClick={() => {
                                                         if (listData.storeStatus === "1") {
                                                            handleDeactiveStore(listData.storeId);
                                                         } else if (listData.storeStatus === "0") {
                                                            handleActiveStore(listData.storeId);
                                                         }
                                                      }}
                                                      className="form-check-input"
                                                      type="checkbox"
                                                      id="flexSwitchCheckDefault"
                                                      checked={listData.storeStatus === "1"}
                                                   />

                                                </div>
                                             </td>
                                             <td className="align-middle text-center">
                                                <div className="actionView-tooltip-container">
                                                   <button onClick={() => handleGetStore(listData.storeId)} data-bs-toggle="modal" data-bs-target="#vendorview" className="btn-3 vendorbtn-view" type="button">
                                                      <span className="btn-inner--icon"><i className="fa-solid fa-eye"></i></span>
                                                   </button>&nbsp;
                                                   <div className="actionView-tooltip-text">
                                                      View
                                                   </div>
                                                </div>
                                                <div className="actionEdit-tooltip-container">
                                                   <button onClick={() => { handleGetStore(listData.storeId); openModal("edit"); setStoreId(listData.storeId) }} className="btn-3 vendorbtn-edit" type="button" data-bs-toggle="modal" data-bs-target="#vendorcreate">
                                                      <span className="btn-inner--icon"><i className="fa-regular fa-pen-to-square"></i></span>
                                                   </button>&nbsp;
                                                   <div className="actionEdit-tooltip-text">
                                                      Edit
                                                   </div>
                                                </div>
                                                <div className="actionDelete-tooltip-container">
                                                   <button className="btn-3 vendorbtn-danger" type="button" data-bs-toggle="modal" onClick={() => { setStoreId(listData.storeId) }} data-bs-target="#vendordelete">
                                                      <span className="btn-inner--icon"><i className="fa-regular fa-trash-can"></i></span>
                                                   </button>
                                                   <div className="actionDelete-tooltip-text">
                                                      Delete
                                                   </div>
                                                </div>
                                             </td>
                                          </tr>
                                       ))
                                    ) : (
                                       <tr>
                                          <td colSpan={7} className="text-center table-list-nodata">No data found</td>
                                       </tr>
                                    )}
                                 </tbody>
                              </table>
                              {vendorListData.length === 0 ? "" :
                                 <div className="store-pagination">
                                    <Pagination>
                                       <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                                       {renderPaginationItems()}
                                       <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                                    </Pagination>
                                 </div>
                              }
                              {/*Store Create and Edit Modal*/}
                              <div className="modal fade" id="vendorcreate" tab-Index="-1" aria-labelledby="vendorcreateLabel" aria-hidden="true">
                                 <div className="modal-dialog modal-lg ">
                                    <div className="modal-content vendorcreate-modal-content">
                                       <div className="modal-header vendorcreate-modal-header border-0">
                                          <h5 className="modal-title mb-3 vendorcreate-modal-title" id="vendorcreateLabel">
                                             {modalMode === "create" ? "Create Store" : "Edit Store"}
                                          </h5>
                                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                       </div>
                                       <div className="row modal-container-size modal-body vendorcreate-modal-body">
                                          <div className="row mt-n4">
                                             <div className="col-md-6 login-input-group">
                                                <div className="vendor-create-container">
                                                   <input onChange={(e) => setStorename(e.target.value)} value={storeName} type="text" id="vendor-crt-input" className={`vendor-crt-input loginfilled-frame-username ${submit && !storeName ? 'error' : ''}`} placeholder=" " required />
                                                   <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-store"></i> Store Name</label>
                                                </div>
                                                {submit && storeName.length == 0 ? <div className='text-danger error-message-required'>Store Name is required</div> : <></>}

                                             </div>
                                             <div className="col-md-6 login-input-group">
                                                <div className="vendor-create-container">
                                                   <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" id="vendor-crt-input" className={`vendor-crt-input loginfilled-frame-username ${submit && !phone ? 'error' : ''}`} placeholder=" " required />
                                                   <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-mobile-button"></i> Mobile Number</label>
                                                </div>
                                                {submit && phone.length == 0 ? <div className='text-danger error-message-required'>Mobile.No is required</div> : <></>}

                                             </div>
                                             <div className="col-md-6 login-input-group">
                                                <div className="vendor-create-container">
                                                   <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" id="vendor-crt-input"
                                                      style={submit && !email || (email.length > 0 && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i)) ? { borderColor: "red" } : { borderColor: "" }}
                                                      className={`vendor-crt-input loginfilled-frame-username ${submit && !email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i) ? 'error' : ''}`} placeholder=" " required />
                                                   <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-at"></i> Email</label>
                                                </div>
                                                {submit && email.length === 0 ? (
                                                   <div className="text-danger error-message-required">Email is required</div>
                                                ) : (
                                                   <>
                                                      {email.length > 0 && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i) && (
                                                         <div className="text-danger error-message-required">Invalid email format</div>
                                                      )}
                                                   </>
                                                )}

                                             </div>
                                             <div className="col-md-6 login-input-group">
                                                <div className="vendor-create-container">
                                                   <input onChange={(e) => setAddress1(e.target.value)} value={address1} type="text" id="vendor-crt-input" className={`vendor-crt-input loginfilled-frame-username ${submit && !address1 ? 'error' : ''}`} placeholder=" " required />
                                                   <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-location-dot"></i> Address Line 1</label>
                                                </div>
                                                {submit && address1.length == 0 ? <div className='text-danger error-message-required'>Address Line 1 is required</div> : <></>}

                                             </div>
                                             <div className="col-md-6 login-input-group">
                                                <div className="vendor-create-container">
                                                   <input onChange={(e) => setAddress2(e.target.value)} value={address2} type="text" id="vendor-crt-input" className={`vendor-crt-input loginfilled-frame-username ${submit && !address1 ? 'error' : ''}`} placeholder=" " required />
                                                   <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-location-dot"></i> Address Line 2</label>
                                                </div>
                                                {submit && address1.length == 0 ? <div className='text-danger error-message-required'>Address Line 2 is required</div> : <></>}

                                             </div>
                                             <div className="col-md-6 login-input-group">
                                                <div className="vendor-create-container">
                                                   <input onChange={(e) => setDistrict(e.target.value)} value={district} type="text" id="vendor-crt-input" className={`vendor-crt-input loginfilled-frame-username ${submit && !address1 ? 'error' : ''}`} placeholder=" " required />
                                                   <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-map-location-dot"></i> District</label>
                                                </div>
                                                {submit && address1.length == 0 ? <div className='text-danger error-message-required'>District is required</div> : <></>}

                                             </div>
                                             <div className="col-md-6 login-input-group">
                                                <div className="vendor-create-container">
                                                   <input onChange={(e) => setState(e.target.value)} value={state} type="text" id="vendor-crt-input" className={`vendor-crt-input loginfilled-frame-username ${submit && !address1 ? 'error' : ''}`} placeholder=" " required />
                                                   <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-location-crosshairs"></i> State</label>
                                                </div>
                                                {submit && address1.length == 0 ? <div className='text-danger error-message-required'>State is required</div> : <></>}

                                             </div>
                                             <div className="col-md-6 login-input-group">
                                                <div className="vendor-create-container">
                                                   <input onChange={(e) => setPincode(e.target.value)} value={pincode} type="text" id="vendor-crt-input" className={`vendor-crt-input loginfilled-frame-username ${submit && !address1 ? 'error' : ''}`} placeholder=" " required />
                                                   <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-street-view"></i> Pincode</label>
                                                </div>
                                                {submit && address1.length == 0 ? <div className='text-danger error-message-required'>Pincode is required</div> : <></>}

                                             </div>
                                          </div>
                                       </div>
                                       <div className="modal-footer vendorcreate-modal-footer border-0">
                                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={resetForm} id="closeModal">Close</button>
                                          {modalMode === "create" ? (
                                             <button type="button" className="btn btn-primary" onClick={handlecreateStore}>
                                                Create
                                             </button>
                                          ) : (
                                             <button type="button" className="btn btn-primary" onClick={handlecreateStore}>
                                                Update
                                             </button>
                                          )}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              {/* Store View */}
                              <div className="modal fade" id="vendorview" aria-labelledby="vendorviewLabel" aria-hidden="true">
                                 <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                       <div className="modal-header vendor-view-header">
                                          <h1 className="modal-title fs-6 mb-3 text-center" id="vendorviewLabel">View</h1>
                                       </div>
                                       <div className="p-0 modal-body text-center ">
                                          <div className="row">
                                             <div className="col-md-5 mt-n3 vendor-login-icon store-view-label">
                                                <img src={Slack} alt="" />
                                                <p className="p-0 mt-n4 mb-1">{storeName}</p>
                                             </div>
                                             <div className="col-md-7 mt-1">
                                                <div className="row">
                                                   <div className="col-md-4 text-start store-view-label">
                                                      <p className="mb-1">Store Name:</p>
                                                      <p className="mb-1">Address:</p>
                                                      <p className="mb-1">Phone:</p>
                                                      <p className="mb-1">Email:</p>
                                                   </div>
                                                   <div className="col-md-8 text-start store-view-label">
                                                      <p className="mb-1">{storeName}</p>
                                                      <p className="mb-1">{address1}</p>
                                                      <p className="mb-1">{phone}</p>
                                                      <p className="mb-1 ml-n2">{email}</p>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="modal-footer text-end vendor-view-footer">
                                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={resetForm}>Close</button>
                                          {/*<button type="button" class="btn btn-primary">Save changes</button>*/}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              {/* Store Import Modal */}
                              <div
                                 className="modal fade"
                                 id="exampleModal"
                                 aria-labelledby="exampleModalLabel"
                                 aria-hidden="true"
                              >
                                 <div className="modal-dialog">
                                    <div className="modal-content">
                                       <div className="modal-header import-popup-header">
                                          <h1 className="modal-title fs-5" id="exampleModalLabel">
                                             Import Store
                                          </h1>
                                       </div>
                                       <div className="modal-body text-center">
                                          <form className="form-container" encType="multipart/form-data">
                                             <div className="upload-files-container">
                                                <div className="drag-file-area">
                                                   <i className="fa-solid fa-cloud-arrow-up import-staff-icon"></i>
                                                   <h5 className="dynamic-message mt-2 mb-n1">
                                                      Drop Anywhere to Import
                                                   </h5>
                                                   <label className="label">
                                                      or{" "}
                                                      <span className="browse-files">
                                                         <input
                                                            type="file"
                                                            className="default-file-input"
                                                            onChange={handleFileChange}
                                                         />
                                                         <span className="browse-files-text text-primary">
                                                            browse file
                                                         </span>{" "}
                                                         <span>from device</span>
                                                      </span>
                                                   </label>
                                                </div>
                                                {fileName && (
                                                   <div className="file-name mt-2">Selected File: {fileName}</div>
                                                )}
                                             </div>
                                          </form>
                                       </div>
                                       <div className="modal-footer import-popup-footer">
                                          <button type="button" className="btn btn-primary" onClick={handleImport}>
                                             Import
                                          </button>
                                          <button type="button" onClick={() => { setFileName('') }} className="btn btn-secondary" data-bs-dismiss="modal" id="closepopup">
                                             Close
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              {/*Store Delete Modal*/}
                              <div className="modal fade" id="vendordelete" tab-Index="-1" aria-labelledby="vendordeleteLabel" aria-hidden="true">
                                 <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content vendor-delete-content">
                                       <div className=" vendor-delete-header">
                                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                       </div>
                                       <div className="modal-body vendor-delete-body">
                                          <div className="row">
                                             <div className="vendor-delete-icon">
                                                <i className="fa-solid fa-triangle-exclamation"></i>
                                             </div>
                                             <h4>Are You Sure !</h4>
                                             <h6>You want to delete this store ?</h6>
                                             <div></div>
                                          </div>
                                       </div>
                                       <div className="modal-footer text-center vendor-delete-footer">
                                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closedeleteModal">No</button>&nbsp;
                                          <button type="button" className="btn btn-primary" onClick={handleDeleteStore} >Yes</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </DashboardLayout>
   )
}

export default VendorStore;