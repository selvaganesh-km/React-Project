import React from 'react'
import DashboardLayout from '../../../../../layouts/DashboardLayout';
import TopNav from '../../../../../shared/TopNav';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../../../../shared/Footer';

function CatalogProductList() {
    const navigate=useNavigate();
  return (
   <>
        <DashboardLayout>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <TopNav />
                <div className="row vendor-breadcrumbs container-fluid py-1 px-3">
                    <div className="col-md-6">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li className="breadcrumb-item text-sm">
                                <Link className="opacity-5 tblName" to={"/vendor/dashboard"}>Dashboard</Link>
                                </li>
                                <li
                                    className="breadcrumb-item text-sm tblName active"
                                    aria-current="page"
                                >
                                    Product
                                </li>
                            </ol>
                            <h6 className="text-start font-weight-bolder mb-0 tblName">Product</h6>
                        </nav>
                    </div>
                    <div className="col-md-6 text-end dropdown">
                        <button onClick={()=>navigate("/vendor/catalog/product/create")}
                            className="vendor-crt-btn"
                        >
                            <span>Add Products</span>
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
                                        ) : flowListData.length === 0 ? (
                                            <p className="table-list-nodata or-text" style={{ textAlign: "center", marginTop: "40px" }}><span>No data found</span></p>
                                        ) : (
                                            <> */}
                                        <table className="table align-items-center justify-content-center mb-0">
                                            <thead>
                                                <tr className="vendor-table-mainhead">
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7">
                                                        Name
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Variants
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Availability
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Price
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Status
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder text-center opacity-7 ps-2">
                                                        Actions
                                                    </th>
                                                    {/*<th></th>*/}
                                                </tr>
                                            </thead>
                                            <tbody className="text-start">
                                            {/* {flowListData?.map((listData: any) => ( */}
                                                        <tr
                                                            // key={listData.id}
                                                        >
                                                    <td>
                                                        <div className="d-flex px-2">
                                                            <div className="align-middle text-start text-sm my-auto">
                                                                <span>listData?.Name</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-start text-sm">
                                                        <span>listData?.Variants</span>
                                                    </td>
                                                    <td className="align-middle text-start text-sm">
                                                        <span>listData?.Availability</span>
                                                    </td>
                                                    <td className="align-middle text-start text-sm">
                                                        <span>listData?.Price</span>
                                                    </td>
                                                    <td>
                                                        <div className="form-check form-switch ms-1 is-filled">
                                                            <input
                                                                autoComplete="off"
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="flexSwitchCheckDefault"
                                                                // onChange={() => {
                                                                //     if (listData.active_status === "1") {
                                                                //        setbotId(listData.id);
                                                                //        setActive(false);
                                                                //        setBotName(listData?.name)
                                                                //     } else if (listData.active_status === "0") {
                                                                //        setbotId(listData.id);
                                                                //        setActive(true);
                                                                //        setBotName(listData?.name)
                                                                //     }
                                                                //  }}
                                                                //  data-bs-toggle="modal" data-bs-target="#botActive"
                                                                //  checked={listData.active_status === "1"}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="text-center align-middle vendor-login-td">
                                                        <div className="actionEdit-tooltip-container">
                                                        <button
                                                            className="btn-3 vendorbtn-edit"
                                                            type="button"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                            // onClick={() => {openModal("edit");handlebotFlowGet(listData?.id); setbotId(listData?.id)}}
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
                                                        <div className="actionDelete-tooltip-container">
                                                        <button
                                                            className="btn-3 vendorbtn-danger"
                                                            type="button"
                                                            data-bs-toggle="modal"
                                                            // onClick={() => { setbotId(listData?.id);setBotName(listData?.name) }}
                                                            data-bs-target="#vendordelete"
                                                        >
                                                            <span className="btn-inner--icon">
                                                                <i className="fa-regular fa-trash-can"></i>
                                                            </span>
                                                        </button>
                                                        <div className="actionDelete-tooltip-text">
                                                            Delete
                                                        </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* ))} */}
                                            </tbody>
                                        </table>
                                        {/* {flowListData.length === 0 ? "" :
                                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} className="store-pagination">
                                                <Pagination>
                                                    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                                                    {renderPaginationItems()}
                                                    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                                                </Pagination>
                                            </div>
                                        } */}
                                        {/* </>
                                        )} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </main>

            {/*Vendor Delete Modal*/}
            <div
                className="modal fade"
                id="vendordelete"
                tab-Index="-1"
                aria-labelledby="vendordeleteLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content all-modal-content vendor-delete-content">
                        <div className=" vendor-delete-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body vendor-delete-body text-center">
                            <div className="row">
                                <div className="vendor-delete-icon">
                                    <i className="fa-solid fa-triangle-exclamation"></i>
                                </div>
                                <h4 className="modal-confirm-head">Are You Sure !</h4>
                                {/* <h6 className="modal-confirm-subhead">You want to delete this {botName} Flow ?</h6> */}
                                <div></div>
                            </div>
                        </div>
                        <div className="modal-footer text-center vendor-delete-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                id="closedeleteModal"
                            >
                                No
                            </button>
                            &nbsp;
                            {/* <button type="button" className="btn btn-primary" onClick={handledeletebotFlow}>
                                Yes
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>

            
        </DashboardLayout>
        </>
  )
}

export default CatalogProductList
