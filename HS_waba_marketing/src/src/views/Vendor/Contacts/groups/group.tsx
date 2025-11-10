import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../../layouts/DashboardLayout';
import TopNav from '../../../../shared/TopNav';
import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { Pagination } from 'react-bootstrap';
import VendorAPI from '../../../../api/services/vendorLogin/vendorApi';
import { toast } from 'react-toastify';
interface GroupList {
    groupId: string;
    groupUid: string;
    groupName: any;
    description: string;
    groupAddressLine2: string;
    activeStatus: string;
}
function Group() {
    const [modalMode, setModalMode] = useState("create");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [submit, setSubmit] = useState(false);
    const [groupId, setGroupId] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const [totalRecords, setTotalRecords] = useState(0);
    const [loading, setLoading] = useState(false);
    const [groupListData, setgroupListData] = useState<GroupList[]>([])
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
        setTitle("");
        setDescription("");
        setSubmit(false)
    }
    const handlecreateGroup = () => {
        setSubmit(true);
        if (!title) {
            return;
        }
        setLoading(true)
        const apiData = {
            ...(modalMode === "edit" && { id: groupId }),
            groupName: title,
            description: description
        };
        const apiCall = modalMode === "create" ? VendorAPI.contactGroupCreateAPI(apiData) : VendorAPI.contactGroupEditAPI(apiData);
        apiCall
            .then((responseData: any) => {
                if (responseData.apiStatus.code === '200') {
                    resetForm();
                    handlecontactGroupList(currentPage);
                    setLoading(false)
                    setSubmit(false);
                    toast.success(responseData.apiStatus.message);
                    const closeButton = document.getElementById("closeCreate");
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
    const handleGetcontactGroup = (groupId: any) => {
        VendorAPI.contactGroupGetAPI(groupId)
            .then((responseData: any) => {
                if (responseData.apiStatus.code === '200') {
                    setTitle(responseData.result.groupName);
                    setDescription(responseData.result.description);
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
    const handlecontactGroupList = (page: any) => {
        setLoading(true)
        const apiData = {
            pageIndex: page - 1,
            dataLength: recordsPerPage
        };
        VendorAPI.contactGroupListAPI(apiData)
            .then((responseData: any) => {
                if (responseData.apiStatus.code === '200') {
                    setLoading(false)
                    setgroupListData(responseData.result.GroupData)
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
    const handlecontactGroupDelete = () => {
        VendorAPI.contactGroupDeleteAPI(groupId)
            .then((responseData: any) => {
                console.log("API response data:", responseData);
                if (responseData.apiStatus.code === '200') {
                    const closeButton = document.getElementById("closedeleteModal");
                    if (closeButton) {
                        handlecontactGroupList(currentPage);
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
    useEffect(() => {
        handlecontactGroupList(currentPage);
    }, [currentPage])


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
                                    Contact Groups
                                </li>
                            </ol>
                            <h6 className="text-start font-weight-bolder mb-0">
                                Contact Groups
                            </h6>
                        </nav>
                    </div>
                    <div className="col-md-6 text-end dropdown">
                        <button className="vendor-crt-btn"
                            onClick={() => openModal("create")}
                            data-bs-toggle="modal" data-bs-target="#vendorcontact">
                            <span>Add New Group</span>
                        </button>


                    </div>
                </div>
                <div className="vendor-maincontent container-fluid py-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className="card-body px-0 pt-0 pb-2">
                                    <div className="table-responsive p-0">

                                        {/* {
                                 loading ? (
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "100px" }}>

                                       <FadeLoader color="#36d7b7" />
                                    </div>
                                 ) : groupListData.length === 0 ? (
                                    <p className="table-list-nodata" style={{ textAlign: "center", paddingTop: "40px" }}>No data found</p>
                                 ) : ( */}
                                        <><table className="table align-items-center justify-content-center mb-0">
                                            <thead>
                                                <tr className="vendor-table-mainhead">
                                                    <th className="contact-table-head text-xxs font-weight-bolder opacity-7">
                                                        Select
                                                    </th>
                                                    <th className="contact-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Title
                                                    </th>
                                                    <th className="contact-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Description
                                                    </th>
                                                    <th className="contact-table-head text-xxs font-weight-bolder text-center opacity-7 ps-2">
                                                        Action
                                                    </th>
                                                    {/*<th></th>*/}
                                                </tr>
                                            </thead>
                                            <tbody className="text-start">

                                                {groupListData?.map((contactGroupList: any) => (
                                                    <tr
                                                        key={contactGroupList.id}
                                                    >

                                                        <td>
                                                            <div className="d-flex px-2 ml-5 vendor-contact-select">
                                                                <input type="checkbox" />
                                                            </div>
                                                        </td>

                                                        <td className="align-middle text-start text-xs">
                                                            <span>
                                                                {contactGroupList?.groupName}
                                                            </span>
                                                        </td>
                                                        <td className="align-middle text-start text-xs">
                                                            <span>
                                                                {contactGroupList?.description}
                                                            </span>
                                                        </td>


                                                        <td className="align-middle text-center vendor-login-td">
                                                            <div className="actionView-tooltip-container">
                                                                <button
                                                                    className="btn-3 vendorbtn-view"
                                                                    type="button"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#contactview"
                                                                //  onClick={() => { superAdminContactListGet(contactGroupList?.groupId) }}
                                                                >
                                                                    <span className="btn-inner--icon">
                                                                        <i className="fa-solid fa-user-group"></i>
                                                                    </span>
                                                                </button>
                                                                <div className="actionView-tooltip-text">
                                                                    Group
                                                                </div>
                                                            </div>
                                                            &nbsp;
                                                            <div className="actionEdit-tooltip-container">
                                                                <button
                                                                    className="btn-3 vendorbtn-edit"
                                                                    type="button"
                                                                    data-bs-toggle="modal" data-bs-target="#vendorcontact"
                                                                    onClick={() => {
                                                                        openModal("edit");
                                                                        handleGetcontactGroup(contactGroupList?.groupId); setGroupId(contactGroupList?.groupId)
                                                                    }}
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
                                                            <div className="actionArchive-tooltip-container">
                                                                <button
                                                                    className="btn-3 vendorbtn-archive"
                                                                    type="button"
                                                                    data-bs-toggle="modal" data-bs-target="#vendorcontact"
                                                                    onClick={() => {
                                                                        openModal("edit");
                                                                        // superAdminContactListGet(contactList?.id); setId(contactList?.id) 
                                                                    }}
                                                                >
                                                                    <span className="btn-inner--icon">
                                                                        <i className="fa-solid fa-box-archive"></i>
                                                                    </span>
                                                                </button>
                                                                &nbsp;
                                                                <div className="actionArchive-tooltip-text">
                                                                    Archive
                                                                </div>
                                                            </div>
                                                            <div className="actionDelete-tooltip-container">
                                                                <button
                                                                    className="btn-3 vendorbtn-danger"
                                                                    type="button"
                                                                    data-bs-toggle="modal"
                                                                    onClick={() => { setGroupId(contactGroupList?.groupId) }}
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
                                            {groupListData.length === 0 ? "" :
                                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} className="store-pagination">
                                                    <Pagination>
                                                        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                                                        {renderPaginationItems()}
                                                        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                                                    </Pagination>
                                                </div>
                                            }
                                        </>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="modal fade" id="vendorcontact" aria-labelledby="vendorcontactLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content vendorcontact-modal-content">
                        <div className="modal-header vendorcontact-modal-header border-0">
                            <h5 className="modal-title vendorcontact-modal-title" id="vendorcontactLabel">
                                {modalMode === "create" ? "Create New Group" : "Edit Group"}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="row modal-container-size modal-body vendorcontact-modal-body">
                            <div className="row mt-n4">
                                <div className="col-md-12 login-input-group">
                                    <div className="vendor-create-container">
                                        <input type="text" id="vendor-crt-input" className="vendor-crt-input"
                                            style={submit && title.length == 0 ? { borderColor: "red" } : { borderColor: "" }}
                                            onChange={(e) => setTitle(e.target.value)} value={title}
                                            placeholder=" " required />
                                        <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-user"></i> Title</label>
                                    </div>
                                    {submit && title.length == 0 ? (
                                        <div className="text-danger error-message-required">Title is required </div>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <div className="col-md-12 login-input-group">
                                    <div className="vendor-create-container">
                                        <textarea id="vendor-crt-input"
                                            onChange={(e) => setDescription(e.target.value)} value={description}
                                            className="vendor-crt-input" placeholder=" " required />
                                        <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-user"></i> Description</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer vendorcreate-modal-footer border-0">
                            <button type="button" className="btn btn-secondary"
                                onClick={resetForm}
                                data-bs-dismiss="modal" id="closeCreate">Close</button>
                            {modalMode === 'create' ? <button
                                onClick={handlecreateGroup}
                                type="button" className="btn btn-primary">
                                Submit
                            </button> : <button
                                onClick={handlecreateGroup}
                                type="button" className="btn btn-primary">
                                Update
                            </button>}
                        </div>
                    </div>
                </div>
            </div>

            {/*Group Delete Modal*/}
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
                                <h6>You want to delete this group permanently?</h6>
                                <div></div>
                            </div>
                        </div>
                        <div className=" text-center vendor-delete-footer">
                            <button type="button" className="btn btn-secondary" id="closedeleteModal" data-bs-dismiss="modal">No</button>&nbsp;
                            <button type="button" onClick={handlecontactGroupDelete} className="btn btn-primary">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Group