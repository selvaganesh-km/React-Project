import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Userimg from "../../../assets/img/team-2.jpg"
import Userimg1 from "../../../assets/img/small-logos/logo-spotify.svg"
import Spotify from "../../../assets/img/small-logos/logo-spotify.svg";
import Invision from "../../../assets/img/small-logos/logo-invision.svg";
import Jira from "../../../assets/img/small-logos/logo-jira.svg";
import Slack from "../../../assets/img/small-logos/logo-slack.svg";
import Webdev from "../../../assets/img/small-logos/logo-webdev.svg";
import Adobe from "../../../assets/img/small-logos/logo-xd.svg";
import DashboardLayout from "../../../layouts/DashboardLayout";
import TopNav from "../../../shared/TopNav";
import Footer from "../../../shared/Footer";
// import LoginAPI from "../../../api/services/superAdminLogin/superAdmin";
import VendorAPI from '../../../api/services/vendorLogin/vendorApi';
import { toast } from "react-toastify";
import './contact.css'
import { setegid, setgroups } from "process";
import { format } from "date-fns";
import { FadeLoader } from "react-spinners";
import { Pagination } from "react-bootstrap";
import API_EP_BOOK from "../../../api/endpoints";
import API from "../../../api/api";
const importContact = API_EP_BOOK.ADMIN_IMPORT_CONTACT_API_EP;
const exportContact = API_EP_BOOK.ADMIN_EXPORT_CONTACT_API_EP;
interface StoreDrop {
   id: string;
   store_name: string;
}


function StoreContacts() {
   const [modalMode, setModalMode] = useState("create");
   const openModal = (mode: any) => {
      setModalMode(mode);
   };



   const navigate = useNavigate();
   const handleBacktoSadmin = (e: any) => {
      e.preventDefault();
      navigate("/dashboard", { replace: true });
   };

   // Use State

   const [listContact, setListContact] = useState([])


   const [deleteId, setDeleteId] = useState('')
   const [loading, setLoading] = useState(false)
   const [submit, setSubmit] = useState(false);
   const [id, setId] = useState('')
   const [userId, userSetId] = useState('')

   const [fName, setFName] = useState('')
   const [lName, setLName] = useState('')
   const [countryId, setCountryId] = useState('')
   const [mobNumber, setMobNumber] = useState('')
   const [languvageCode, setLanguvageCode] = useState('')
   const [email, setEmail] = useState('')
   const [groups, setGroups] = useState('')
   const [date, setDate] = useState('')
   const [address, setAddress] = useState('')
   const [loyality, setLoyality] = useState('')
   const [anniversary, setAnniversary] = useState('')
   const [storeId, setStoreId] = useState('')
   const [storeDropDown, setStoreDropDown] = useState<StoreDrop[]>([])
   const [storeName, setStoreName] = useState('')

   const EMAIL_VALIDATION_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i


   // Pagination Usestate
   const [currentPage, setCurrentPage] = useState(1);
   const [recordsPerPage] = useState(6);
   const [totalRecords, setTotalRecords] = useState(0);

   // Pagination Method

   const totalPages = Math.ceil(totalRecords / recordsPerPage);

   const handlePageChange = (pageNumber: any) => {
      if (pageNumber < 1 || pageNumber > totalPages) return;
      setCurrentPage(pageNumber);
   };


   const isValidDate = (date: string | number): boolean => {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime());
   };


   const resetForm = () => {
      setFName('');
      setLName('');
      setCountryId('');
      setMobNumber('');
      setMobNumber('');
      setLanguvageCode('')
      setEmail('')
      setGroups('')
      setDate('')
      setAddress('')
      setLoyality('')
      setAnniversary('')
      setStoreId('')
      setStoreName('')
      setSubmit(false)
      setLoading(false)
   };

   useEffect(() => {
      superAdminConatctList(currentPage)

   }, [currentPage])



   // Contact List Api

   const superAdminConatctList = (page: number) => {

      const apiData = {
         pageIndex: page - 1,
         dataLength: recordsPerPage
      };

      console.log("API Data:", apiData);

      VendorAPI.contactListAPI(apiData)
         .then((responceData: any) => {
            console.log("API Response:", responceData);

            if (responceData.apiStatus.code === '200') {

               setListContact(responceData?.result?.ConatctData)
               setTotalRecords(responceData.result?.totalRecordCount);

               setLoading(false)

            } else {
               setLoading(false)
               toast.error(responceData.apiStatus.message);
            }
         })
         .catch((error: any) => {
            console.error("Error during login:", error);
            toast.error("An error occurred during login.");
         });
   };


   // Create Contact

   const superAdminContactCreate = () => {

      setSubmit(true)
      setLoading(true)

      if (!fName || !mobNumber || !email || !address) {
         return;
      }

      console.log(storeId);

      if (modalMode === "create") {

      }


      let apiData = {
         ...(modalMode === "edit" && { contactId: id }),
         storeId: storeId,
         firstName: fName,
         lastName: lName,
         mobile: mobNumber,
         email: email,
         country: countryId,
         language: languvageCode,
         otherInformation: {
            DOB: isValidDate(date) ? format(new Date(date), "MM/dd/yyyy") : "",
            anniversary: isValidDate(anniversary) ? format(new Date(anniversary), "MM/dd/yyyy") : "",
            loyality: loyality,
            address: address,
         },
      };



      const apiCall = modalMode === "create" ? VendorAPI.contactCreateAPI(apiData) : VendorAPI.contactEditAPI(apiData);

      console.log("API Data:", apiData);


      apiCall
         .then((responseData: any) => {
            console.log("API Response:", responseData);

            if (responseData.apiStatus.code === '200') {
               setSubmit(false)
               resetForm()
               setLoading(false)
               toast.success(responseData.apiStatus.message);
               const closeButton = document.getElementById("closeCreate");
               superAdminConatctList(currentPage);

               if (closeButton) {
                  closeButton.click();
               }
            } else {
               setLoading(false)
               setSubmit(false)
               toast.error(responseData.apiStatus.message);
            }
         })
         .catch((error: any) => {
            setSubmit(false)
            console.error("Error during API call:", error);
            toast.error("An error occurred during the API call.");
         });
   };


   //   Get By Id

   const superAdminContactListGet = async (id: any) => {
      console.log('Fetching vendor list for ID:', id);

      try {
         // Make the API call with the provided ID
         const responseData = await VendorAPI.contactGetAPI(id);

         console.log("API Response:", responseData);

         if (responseData.apiStatus.code === '200') {
            const data = responseData?.result
            console.log(data);

            setFName(data?.firstName)
            setLName(data?.lastName)
            setCountryId(data?.country)
            setAddress(data?.otherInformation?.address)
            setStoreId(data?.storeId)
            setStoreName(data?.storeName)
            setDate(data?.otherInformation?.DOB)
            setAnniversary(data?.otherInformation?.anniversary)
            setMobNumber(data?.mobile)
            setLanguvageCode(data?.language)
            setEmail(data?.email)
            setLoyality(data?.otherInformation?.loyality)


         } else {
            toast.error(`get failed: ${responseData.apiStatus.message}`);
         }
      } catch (error) {
         console.error("Error during API call:", error);
         toast.error("An error occurred during the get process.");
      }
   };

   // Delete Contact


   const superAdminContactDelete = async () => {
      console.log('Fetching vendor list for ID:', id);
      setLoading(true)

      try {
         const responseData = await VendorAPI.contactDeleteAPI(deleteId);

         console.log("API Response:", responseData);

         if (responseData.apiStatus.code === '200') {
            setLoading(false)
            const newTotalRecords = totalRecords - 1;
            setTotalRecords(newTotalRecords);

            let totalPages = Math.ceil(newTotalRecords / recordsPerPage);
            if (currentPage > totalPages) {
               setCurrentPage(totalPages);
            }

            const closeButton = document.getElementById("deleteCreate");

            if (closeButton) {
               superAdminConatctList(currentPage);

               closeButton.click();
            }
            toast.success(responseData.apiStatus.message);

         } else {
            toast.error(`get failed: ${responseData.apiStatus.message}`);
            setLoading(false)
         }
      } catch (error) {
         console.error("Error during API call:", error);
         toast.error("An error occurred during the get process.");
      }
   };

   // Store Dropdwon

   const handleGetStoreDrop = () => {
      VendorAPI.contactStoreDropdownAPI()
         .then((responseData: any) => {
            if (responseData.apiStatus.code === '200') {
               setStoreDropDown(responseData?.result?.StoreDataDropDown);
               console.log(responseData?.result?.StoreDataDropDown)
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


   // Pagination Method
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
         const response = await API(importContact, {
            bodyData: formData,
         });
         if (response.apiStatus?.code === "200") {
            superAdminConatctList(currentPage)
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
         const response = await API(exportContact, {
         });
         const blob = new Blob([response], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
         const today = new Date();
         const formattedDate = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear().toString().slice(-2)}`;
         const fileName = `contact_data_${formattedDate}.xlsx`;
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
   const handleNavigate = (contactList: any) => {
      const contactDetailsData = {
         firstName: contactList.firstName,
         lastName: contactList.lastName,
         mobile: contactList.mobile,
         country: contactList.country,
      };

      navigate(`/vendor/contact/whatsapp/contact/send-template-message/${contactList?.id}`, { state: { contactDetailsData } });
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
                           <Link className="opacity-5 text-dark" to={"/vendor/dashboard"}>Dashboard</Link></li>
                        <li
                           className="breadcrumb-item text-sm text-dark active"
                           aria-current="page"
                        >
                           Customer Details
                        </li>
                     </ol>
                     <h6 className="text-start font-weight-bolder mb-0">
                        Customer Details
                     </h6>
                  </nav>
               </div>
               <div className="col-md-6 text-end dropdown">
                  <button className="vendor-crt-btn" onClick={() => openModal("create")} data-bs-toggle="modal" data-bs-target="#vendorcontact">
                     <span>Create New Contact</span>
                  </button>
                  &nbsp;
                  <button className="vendor-crt-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >Import Contact</button>&nbsp;
                  <button className="vendor-crt-btn" onClick={handleExport}>Export Contact</button>

               </div>
            </div>
            <div className="vendor-maincontent container-fluid py-4">
               <div className="row">
                  <div className="col-12">
                     <div className="card mb-4">
                        <div className="card-body px-0 pt-0 pb-2">
                           <div className="table-responsive p-0">

                              {
                                 loading ? (
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "100px" }}>

                                       <FadeLoader color="#36d7b7" />
                                    </div>
                                 ) : listContact.length === 0 ? (
                                    <h4 style={{ textAlign: "center", paddingTop: "40px" }}>NO DATA FOUND</h4>
                                 ) : (
                                    <><table className="table align-items-center justify-content-center mb-0">
                                       <thead>
                                          <tr className="vendor-table-mainhead">
                                             {/* <th className="contact-table-head text-xxs font-weight-bolder opacity-7">
                                                Select
                                             </th> */}
                                             <th className="contact-table-head text-xxs font-weight-bolder opacity-7">
                                                First <br />Name
                                             </th>
                                             <th className="contact-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                Last <br />Name
                                             </th>
                                             <th className="contact-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                Mobile <br />Number
                                             </th>
                                             <th className="contact-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                Language <br />Code
                                             </th>
                                             <th className="contact-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                Created On
                                             </th>
                                             <th className="contact-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                Country
                                             </th>
                                             <th className="contact-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                Email
                                             </th>

                                             <th className="contact-table-head text-xxs font-weight-bolder text-center opacity-7 ps-2">
                                                Action
                                             </th>
                                             {/*<th></th>*/}
                                          </tr>
                                       </thead>
                                       <tbody className="text-start">

                                          {listContact?.map((contactList: any) => (
                                             <tr key={contactList.id}>
                                                {/* <td>
                                                   <div className="d-flex px-2 ml-5 vendor-contact-select">
                                                      <input type="checkbox" />
                                                   </div>
                                                </td> */}
                                                <td>
                                                   <div className="d-flex px-2">
                                                      <div className="align-middle text-start text-xs my-auto">
                                                         <span className="px-2">{contactList?.firstName}</span>
                                                      </div>
                                                   </div>
                                                </td>
                                                <td className="align-middle text-start text-xs">
                                                   <span>{contactList?.lastName}</span>
                                                </td>
                                                <td className="align-middle text-start text-xs">
                                                   <span>
                                                      {contactList?.mobile}
                                                   </span>
                                                </td>
                                                <td className="align-middle text-start text-xs">
                                                   {contactList?.language}
                                                </td>
                                                <td className="align-middle text-start text-xs">
                                                   <span>{contactList?.createdDate}</span>
                                                </td>
                                                <td className="align-middle text-start text-xs">
                                                   <span>{contactList?.country}</span>
                                                </td>
                                                <td className="align-middle text-start text-xs">
                                                   <span>{contactList?.email}</span>
                                                </td>


                                                <td className="align-middle vendor-login-td">
                                                   <div className="actionView-tooltip-container">
                                                      <button
                                                         className="btn-3 vendorbtn-view"
                                                         type="button"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#contactview"
                                                         onClick={() => { superAdminContactListGet(contactList?.id) }}
                                                      >
                                                         <span className="btn-inner--icon">
                                                            <i className="fa-solid fa-eye"></i>
                                                         </span>
                                                      </button>
                                                      <div className="actionView-tooltip-text">
                                                         View
                                                      </div>
                                                   </div>
                                                   &nbsp;
                                                   <div className="actionEdit-tooltip-container">
                                                      <button
                                                         className="btn-3 vendorbtn-edit"
                                                         type="button"
                                                         data-bs-toggle="modal" data-bs-target="#vendorcontact"
                                                         onClick={() => { openModal("edit"); superAdminContactListGet(contactList?.id); setId(contactList?.id) }}
                                                      >
                                                         <span className="btn-inner--icon">
                                                            <i className="fa-regular fa-pen-to-square"></i>
                                                         </span>
                                                      </button>
                                                      &nbsp;
                                                      <div className="actionEdit-tooltip-text">
                                                         Edit
                                                      </div>
                                                   </div>
                                                   <div className="actionChat-tooltip-container">
                                                      <button className="btn-3 vendorbtn-whatsapp"
                                                         type="button"
                                                         onClick={() => handleNavigate(contactList)}
                                                      >

                                                         <span className="btn-inner--icon">
                                                            <i className="fa-regular fa-comment-dots"></i>
                                                         </span>
                                                      </button>
                                                      <div className="actionChat-tooltip-text">
                                                         Send Template Message
                                                      </div>
                                                   </div>
                                                   <div className="actionChat-tooltip-container">
                                                      <button className="btn-3 vendorbtn-whatsapp"
                                                         type="button"
                                                         onClick={() => navigate('/vendor/whatapp-chat')}>

                                                         <span className="btn-inner--icon">
                                                            <i className="fab fa-whatsapp"></i>
                                                         </span>
                                                      </button>
                                                      <div className="actionChat-tooltip-text">
                                                         Chat
                                                      </div>
                                                   </div>
                                                   <div className="actionDelete-tooltip-container">
                                                      <button
                                                         className="btn-3 vendorbtn-danger"
                                                         type="button"
                                                         data-bs-toggle="modal"
                                                         onClick={() => { setDeleteId(contactList?.id) }}
                                                         data-bs-target="#vendordelete"
                                                      >
                                                         <span className="btn-inner--icon">
                                                            <i className="fa-regular fa-trash-can"></i>
                                                         </span>
                                                      </button>
                                                      &nbsp;
                                                      <div className="actionDelete-tooltip-text">
                                                         Delete
                                                      </div>
                                                   </div>
                                                </td>
                                             </tr>
                                          ))}




                                       </tbody>
                                    </table>
                                       {listContact.length === 0 ? "" :
                                          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} className="store-pagination">
                                             <Pagination>
                                                <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                                                {renderPaginationItems()}
                                                <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                                             </Pagination>
                                          </div>}
                                    </>
                                 )}


                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>



         <div className="modal fade" id="vendorcontact" aria-labelledby="vendorcontactLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
               <div className="modal-content vendorcontact-modal-content">
                  <div className="modal-header vendorcontact-modal-header border-0">
                     <h5 className="modal-title vendorcontact-modal-title" id="vendorcontactLabel">
                        {modalMode === "create" ? "Create Vendor" : "Edit Vendor"}
                     </h5>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="row modal-container-size modal-body vendorcontact-modal-body">
                     <div className="row mt-n4">
                        {/*{/ <h5 className="text-center mt-4"><u>Vendor Admin User</u></h5> /}*/}
                        <div className="col-md-6 login-input-group">
                           <div className="vendor-create-container">
                              <input type="text" id="vendor-crt-input" value={fName} className="vendor-crt-input"
                                 style={submit && fName.length == 0 ? { borderColor: "red" } : { borderColor: "" }}
                                 onChange={(e) => setFName(e.target.value)}
                                 placeholder=" " required />
                              <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-user"></i> First Name</label>
                           </div>
                           {submit && fName.length == 0 ? (
                              <div className="text-danger error-message-required">FirstName is required </div>
                           ) : (
                              <></>
                           )}
                        </div>
                        <div className="col-md-6 login-input-group">
                           <div className="vendor-create-container">
                              <input type="text" id="vendor-crt-input" value={lName}
                                 onChange={(e) => setLName(e.target.value)}
                                 className="vendor-crt-input" placeholder=" " required />
                              <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-user"></i> Last Name</label>
                           </div>
                        </div>
                        <div className="col-md-6 login-input-group">
                           <div className="vendor-create-container dropdown">
                              <input type="text" id="vendor-crt-input" onChange={(e) => setCountryId(e.target.value)} value={countryId} className="vendor-crt-input" placeholder=" " required />
                              <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-id-card-clip"></i> Country</label>


                           </div>


                        </div>
                        <div className="col-md-6 login-input-group">
                           <div className="vendor-create-container">
                              <input type="text" id="vendor-crt-input" onChange={(e) => setMobNumber(e.target.value)} value={mobNumber} className="vendor-crt-input" placeholder=" "
                                 style={submit && mobNumber.length == 0 ? { borderColor: "red" } : { borderColor: "" }}

                                 required />
                              <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-mobile-button"></i> Mobile Number</label>
                           </div>
                           {submit && mobNumber.length == 0 ? (
                              <div className="text-danger error-message-required">Mobile Number is required </div>
                           ) : (
                              <></>
                           )}
                        </div>
                        <div className="col-md-6 login-input-group">
                           <div className="vendor-create-container">
                              <input type="text" id="vendor-crt-input" onChange={(e) => setLanguvageCode(e.target.value)} className="vendor-crt-input" value={languvageCode} placeholder=" " required />
                              <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-at"></i> Language Code</label>
                           </div>
                        </div>
                        <div className="col-md-6 login-input-group">
                           <div className="vendor-create-container">
                              <input type="text" id="vendor-crt-input" onChange={(e) => setEmail(e.target.value)} className="vendor-crt-input" value={email} placeholder=" "
                                 style={submit && !email || (email.length > 0 && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i)) ? { borderColor: "red" } : { borderColor: "" }}
                                 required />
                              <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-at"></i> Email</label>
                           </div>
                           {submit && email.length === 0 ? (
                              <div className="text-danger error-message-required">Email is required</div>
                           ) : (
                              <>

                                 {email.length > 0 && !EMAIL_VALIDATION_REGEX.test(email) && (
                                    <div className="text-danger error-message-required">Invalid email format</div>
                                 )}
                              </>
                           )}
                        </div>
                        <div className="col-md-6 login-input-group">
                           <div className="vendor-create-container dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                              <input type="text" id="vendor-crt-input" readOnly onClick={handleGetStoreDrop} value={storeName} className="vendor-crt-input" placeholder=" " required />
                              <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-id-card-clip"></i> Store</label>
                              <i className="dropdown-icon font-size-dash-arrow fa-solid fa-chevron-down"></i>

                              <ul className="contatStore-dropdown-menu dropdown-menu">
                                 {storeDropDown?.map((dropdownValue, id) => (
                                    <li key={id}>
                                       <a
                                          className="dropdown-item"
                                          href="#"
                                          onClick={() => { setStoreName(dropdownValue.store_name); setStoreId(dropdownValue?.id) }}
                                       >
                                          {dropdownValue?.store_name}
                                       </a>
                                    </li>
                                 ))}
                              </ul>


                           </div>
                        </div>
                        <div className="campaign-template mt-5">
                           <h6 className="campaign-temp-head">Other Information</h6>
                           <div className="row">
                              <div className="col-md-6 vendor-contact-container" aria-expanded="false">
                                 <input type="date" id="vendor-crt-input" onChange={(e) => setDate(e.target.value)} value={date} className="vendor-crt-input" placeholder=" " />
                                 <label htmlFor="vendor-crt-input" className="vendor-crt-label"> Date of birth</label>
                              </div>
                              <div className="col-md-6 vendor-contact-container" aria-expanded="false">
                                 <div className="vendor-create-container">
                                    <input type="text" id="vendor-crt-input" onChange={(e) => setAddress(e.target.value)} value={address} className="vendor-crt-input" placeholder=" "
                                       style={submit && address.length == 0 ? { borderColor: "red" } : { borderColor: "" }}

                                       required />
                                    <label htmlFor="vendor-crt-input" className="vendor-crt-label"> Address</label>
                                 </div>
                                 {submit && address.length == 0 ? (
                                    <div className="text-danger error-message-required">Address is required </div>
                                 ) : (
                                    <></>
                                 )}
                              </div>

                              <div className="col-md-6  mt-4 mb-3 vendor-contact-container" aria-expanded="false">
                                 <input type="text" id="vendor-crt-input" onChange={(e) => setLoyality(e.target.value)} value={loyality} className="vendor-crt-input" placeholder=" " required />
                                 <label htmlFor="vendor-crt-input" className="vendor-crt-label"> Loyalty_rs</label>
                              </div>
                              <div className="col-md-6  mt-4 mb-3 vendor-contact-container" aria-expanded="false">
                                 <input type="date" id="vendor-crt-input" onChange={(e) => setAnniversary(e.target.value)} value={anniversary} className="vendor-crt-input" placeholder=" " required />
                                 <label htmlFor="vendor-crt-input" className="vendor-crt-label">Anniversary</label>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="modal-footer vendorcreate-modal-footer border-0">
                     <button type="button" className="btn btn-secondary" onClick={resetForm} data-bs-dismiss="modal" id="closeCreate">Close</button>
                     {modalMode === 'create' ? <button onClick={superAdminContactCreate} type="button" className="btn btn-primary">
                        Create
                     </button> : <button onClick={superAdminContactCreate} type="button" className="btn btn-primary">
                        Update
                     </button>}

                  </div>



               </div>
            </div>
         </div>

         <div className="modal fade" id="vendordelete" tab-index="-1" aria-labelledby="vendordeleteLabel" aria-hidden="true">
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
                        <h5>Are You Sure !</h5>
                        <h6>You want to delete this Contact permanently?</h6>
                        <div></div>
                     </div>
                  </div>
                  <div className=" text-center vendor-delete-footer">
                     <button type="button" className="btn btn-secondary" id="deleteCreate" data-bs-dismiss="modal">No</button>&nbsp;
                     <button type="button" onClick={superAdminContactDelete} className="btn btn-primary">Yes</button>
                  </div>
               </div>
            </div>
         </div>

         {/* export model */}

         <div className="modal fade" id="contactExport" tab-index="-1" aria-labelledby="vendordeleteLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
               <div className="modal-content modal-container-size vendor-delete-content">
                  <div className="modal-header vendorcontact-modal-header border-0">
                     <h5 className="modal-title vendorcontact-modal-title" id="vendorcontactLabel">
                        Export Contacts
                     </h5>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>


                  <div className="modal-body">
                     <div className="row">
                        <div className="col-md-12">
                           <p className="p-export">Export with Data</p>
                           <p>You can export all contacts excel file and import it back with updated data.</p>
                           <button className="export-button">Export Excel File With Data</button>
                        </div>
                        <hr className="export-hr" />

                        <div className="col-md-12 excel-template">
                           <p className="p-export">Blank Excel Template</p>
                           <p>You can export blank excel file and fill with data according to column header and import it for updates.</p>
                           <button className="export-button">Export Blank Template</button>
                        </div>
                        <hr />

                     </div>
                  </div>
                  <div className=" text-end vendor-delete-footer">
                     <button type="button" className="btn btn-secondary" id="deleteCreate" data-bs-dismiss="modal">Close</button>&nbsp;

                  </div>
               </div>
            </div>
         </div>


         {/* import model */}

         <div className="modal fade" id="contactImport" tab-index="-1" aria-labelledby="vendordeleteLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
               <div className="modal-content modal-container-size vendor-delete-content">
                  <div className="modal-header vendorcontact-modal-header border-0">
                     <h5 className="modal-title vendorcontact-modal-title" id="vendorcontactLabel">
                        Import Contacts
                     </h5>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>


                  <div className="modal-body">
                     <div className="row">
                        <div className="col-md-12">
                           <div className="use-templates">
                              Please use Template from Export contacts
                           </div>
                        </div>
                        <hr />

                        <div className="col-md-12">
                           <div>You can import excel file with new contacts or existing updated.</div>
                        </div>

                        <div className="col-md-12">
                           <div className="conventions">
                              <p className="p-export">Conventions</p>
                              <p className="p-export">Mobile Number</p>
                              <p>Mobile number treated as unique entity, it should be with country code without prefixing 0 or +, if the Mobile number is found in the records other information for the same will get updated with data from the excel.</p>
                              <p className="p-export">Group</p>
                              <p>Use comma separated group title, make sure groups are already exists into the system. Groups won't be deleted, only new groups will be assigned.</p>

                           </div>
                        </div>

                        <div className="col-md-12">
                           <div className="file-input">
                              <input className="file-input-browser" type="file" name="" id="" />

                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="text-end mt-5 vendor-delete-footer">
                     <button type="button" className="btn btn-secondary import-close-btn" id="deleteCreate" data-bs-dismiss="modal">Close</button>&nbsp;
                     <button type="button" className="btn btn-secondary import-close-btn process-import" id="deleteCreate" data-bs-dismiss="modal">Process Import</button>&nbsp;

                  </div>
               </div>
            </div>
         </div>

         {/* Staff Import Modal */}
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
                        Import Contact
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
         {/* contact view */}

         <div className="modal fade" id="contactview" tab-index="-1" aria-labelledby="vendordeleteLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
               <div className="modal-content modal-container-size vendor-delete-content">
                  <div className="modal-header vendorcontact-modal-header border-0">
                     <h5 className="modal-title vendorcontact-modal-title" id="vendorcontactLabel">
                        Contact Details
                     </h5>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>


                  <div className="modal-body">
                     <div className="row">
                        <div className="col-md-6">
                           <h6>First Name</h6>
                           <p>{fName}</p>
                        </div>

                        <div className="col-md-6">
                           <h6>Last Name</h6>
                           <p>{lName}</p>
                        </div>

                        <div className="col-md-6">
                           <h6>Country Name</h6>
                           <p>{countryId}</p>
                        </div>


                        <div className="col-md-6">
                           <h6>Mobile</h6>
                           <p>{mobNumber}</p>
                        </div>


                        <div className="col-md-6">
                           <h6>Language Code</h6>
                           <p>{languvageCode}</p>
                        </div>


                        <div className="col-md-6">
                           <h6>Email</h6>
                           <p>{email}</p>
                        </div>



                        {/* <div className="col-md-12">
                           <div className="create-contact">
                              <h5 className="contact-absolute" >Group</h5>
                              <div>Data 2</div>
                           </div>
                        </div> */}

                        <div className="col-md-12 mt-3">
                           <div className="create-contact">
                              <h5 className="contact-absolute" >Other Information</h5>
                              <div>DOB: {date}</div>
                              <div className="mt-2 mb-2">Address: {address}</div>
                              <div>loyalty_rs: {loyality}</div>



                           </div>
                        </div>

                     </div>
                  </div>
                  <div className=" text-end vendor-delete-footer">
                     <button type="button" className="btn btn-secondary" id="deleteCreate" data-bs-dismiss="modal" onClick={resetForm}>Close</button>&nbsp;

                  </div>
               </div>
            </div>
         </div>

      </DashboardLayout>
   )
}

export default StoreContacts;