import React, { useRef, useState } from 'react'
import DashboardLayout from '../../../../../layouts/DashboardLayout'
import TopNav from '../../../../../shared/TopNav'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../../../../shared/Footer'
import CatalogUpload from "../../../../../assets/img/Catalog_img&vdo.png"
import "./index.css";
type PreviewFile = {
  file: File;
  url: string;
  type: 'image' | 'video';
  name: string;
  size: string;
  modifiedTime: string; 
};
const formatSize = (bytes: number) => `${(bytes / 1024).toFixed(2)} KB`;
const formatDate = (date: Date) => date.toLocaleString();
function CatalogProductCreate() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(prev => !prev);
    const navigate=useNavigate();
    const handleItemClick = () => {
        setIsOpen(false);
    };
   const fileInputRef = useRef<HTMLInputElement | null>(null);

const [previewFiles, setPreviewFiles] = useState<PreviewFile[]>([]);  
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []); // safely handle null

    const previewData: PreviewFile[] = files.map(file => ({
      file,
      url: URL.createObjectURL(file),
      type: file.type.startsWith('image') ? 'image' : 'video',
      name: file.name,
      size: formatSize(file.size),
      modifiedTime: formatDate(file.lastModified ? new Date(file.lastModified) : new Date()),
    }));

    setPreviewFiles(prev => [...prev, ...previewData]);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };
const handleDelete = (indexToRemove: number) => {
    setPreviewFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };
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
                            <h6 className="text-start font-weight-bolder mb-0 tblName">Create Product</h6>
                        </nav>
                    </div>
                    <div className="col-md-6 text-end dropdown">
                        <button
                            className="vendor-crt-btn"
                            onClick={()=>navigate("/vendor/catalog/product/details")}
                        >
                            <span>Back</span>
                        </button>
                    </div>
                </div>
                <div className="vendor-maincontent container-fluid py-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className="card-body px-0 pt-0 pb-2">
                                    <div className="table-responsive p-0 table-scroll-wrapper">
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
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7 sticky-col-1">
                                                        Actions
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2 sticky-col-2">
                                                        Images & Videos
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Title
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Description
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Website link
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Price
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Sale Price
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder text-center opacity-7 ps-2">
                                                        Facebook product category (Optional)
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder text-center opacity-7 ps-2">
                                                        Condition
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder text-center opacity-7 ps-2">
                                                        Availability
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder text-center opacity-7 ps-2">
                                                        Status
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder text-center opacity-7 ps-2">
                                                        Brand (Optional)
                                                    </th>
                                                    <th className="text-uppercase vendor-table-head text-xxs font-weight-bolder text-center opacity-7 ps-2">
                                                        Content ID (Optional)
                                                    </th>
                                                    {/*<th></th>*/}
                                                </tr>
                                            </thead>
                                            <tbody className="text-start">
                                            {/* {flowListData?.map((listData: any) => ( */}
                                                        <tr
                                                            // key={listData.id}
                                                        >
                                                    <td className='catalogprd-tbl-td sticky-col-1'>
                                                        <div className="d-flex justify-content-center px-3">
                                                            <div className="catalog-prddlt actionDelete-tooltip-container">
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
                                                            <div className="align-middle text-start text-sm catalogprd-drop">
                                                                <div className="catalog-dropdown-container">
                                                                <div className="catalog-dropdown" onClick={toggleDropdown}>
                                                                    <i className="fa-solid fa-clone"></i>
                                                                    <i
                                                                    className={`catalog-chevron fas fa-angle-down ${isOpen ? 'catalog-rotate-dropdown-arrow ' : ''}`}
                                                                    ></i>
                                                                </div>

                                                                {isOpen && (
                                                                    <div className="catalog-dropdown-menu">
                                                                        {[
                                                                        { iconClass: 'fa-regular fa-square-plus', label: 'Add Variant' },
                                                                        { iconClass: 'fa-regular fa-clone', label: 'Duplicate Item' }
                                                                        ].map((item, index) => (
                                                                        <span key={index} onClick={handleItemClick} className='text-start'>
                                                                            <i className={item.iconClass} style={{ marginRight: '8px' }}></i>
                                                                            {item.label}
                                                                        </span>
                                                                        ))}
                                                                    </div>
                                                                    )}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="catalogprd-tbl-td align-middle text-center text-sm sticky-col-2" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{cursor:"pointer"}}>
                                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="33px" height="33px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M595 4820 c-220 -30 -422 -174 -519 -371 -82 -168 -77 -54 -74 -1804 l3 -1550 27 -80 c61 -179 187 -329 339 -404 168 -82 30 -75 1633 -79 l1428 -3 62 -43 c519 -369 1241 -182 1521 393 159 326 131 722 -72 1029 -144 217 -422 392 -695 437 l-37 6 -3 962 -3 962 -26 72 c-85 232 -243 385 -469 455 l-75 23 -1490 1 c-820 1 -1517 -2 -1550 -6z m3042 -275 c145 -43 262 -162 299 -304 12 -46 14 -192 14 -840 l0 -785 -372 371 c-362 360 -374 372 -419 378 -33 5 -55 3 -75 -8 -16 -9 -276 -263 -579 -566 l-550 -551 -385 384 c-357 356 -388 385 -427 391 -28 4 -50 2 -70 -8 -15 -9 -205 -193 -420 -410 l-393 -394 0 991 c0 1074 -1 1048 54 1147 49 88 156 172 261 205 32 10 355 13 1526 13 1294 1 1492 -1 1536 -14z m131 -2236 c-103 -32 -167 -64 -288 -144 -315 -208 -492 -626 -425 -1006 17 -101 75 -275 110 -335 l26 -44 -1263 3 c-892 2 -1279 7 -1316 15 -168 36 -294 155 -337 317 -12 47 -15 124 -15 385 l0 325 426 433 c234 237 431 432 437 432 7 0 181 -169 387 -375 400 -400 406 -405 480 -385 28 8 149 124 590 565 l555 555 358 -358 357 -357 -82 -26z m425 -224 c189 -21 395 -146 512 -310 224 -315 184 -733 -94 -1005 -143 -139 -322 -210 -531 -210 -216 0 -405 82 -561 244 -137 141 -196 281 -206 486 -11 234 58 409 227 581 127 129 272 199 450 219 74 8 87 7 203 -5z"/><path d="M1861 3700 c-106 -22 -203 -99 -249 -198 -23 -49 -27 -70 -27 -147 0 -78 4 -97 28 -147 60 -122 164 -190 303 -196 125 -6 217 37 294 136 64 83 86 205 55 308 -50 170 -231 279 -404 244z"/><path d="M4030 1879 c-30 -12 -346 -323 -366 -361 -46 -87 14 -188 111 -188 47 0 69 12 128 68l47 46 0 -288 c0 -272 1 -291 20 -321 39 -64 125 -81 184 -38 53 38 56 58 56 364 l0 283 54 -53 c46 -46 61 -54 101 -59 107 -12 174 81 131 181 -17 40 -331 352 -369 366 -34 13 -63 13 -97 0z"/></g></svg>
                                                    </td>
                                                   <td className="catalogprd-tbl-td align-middle col-md-12 text-start text-sm" style={{ minWidth: "300px" }}>
                                                    <div className="w-100">
                                                        <div className="login-input-group">
                                                        <div className="vendor-create-container w-100">
                                                            <input
                                                            autoComplete="off"
                                                            type="text"
                                                            id="vendor-crt-input"
                                                            className="vendor-crt-input"
                                                            style={{ width: "100%", minWidth: "250px" }} 
                                                            placeholder=" "
                                                            required
                                                            />
                                                            <label htmlFor="vendor-crt-input" className="vendor-crt-label">
                                                            <i className="fa-brands fa-battle-net"></i> Title
                                                            </label>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </td>

                                                    <td className="catalogprd-tbl-td align-middle col-md-12 text-start text-sm" style={{ minWidth: "300px" }}>
                                                    <div className="w-100">
                                                        <div className="login-input-group">
                                                        <div className="vendor-create-container w-100">
                                                            <input
                                                            autoComplete="off"
                                                            type="text"
                                                            id="vendor-crt-input"
                                                            className="vendor-crt-input"
                                                            style={{ width: "100%", minWidth: "250px" }} 
                                                            placeholder=" "
                                                            required
                                                            />
                                                            <label htmlFor="vendor-crt-input" className="vendor-crt-label">
                                                            <i className="fa-brands fa-battle-net"></i> Description
                                                            </label>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </td>
                                                    <td className="catalogprd-tbl-td align-middle col-md-12 text-start text-sm" style={{ minWidth: "300px" }}>
                                                    <div className="w-100">
                                                        <div className="login-input-group">
                                                        <div className="vendor-create-container w-100">
                                                            <input
                                                            autoComplete="off"
                                                            type="text"
                                                            id="vendor-crt-input"
                                                            className="vendor-crt-input"
                                                            style={{ width: "100%", minWidth: "250px" }} 
                                                            placeholder=" "
                                                            required
                                                            />
                                                            <label htmlFor="vendor-crt-input" className="vendor-crt-label">
                                                            <i className="fa-brands fa-battle-net"></i> Website link	
                                                            </label>
                                                        </div>
                                                        </div>
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
                                                    </td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                                <div
                                    className="modal fade"
                                    id="exampleModal"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                 >
                                    <div className="modal-dialog">
                                       <div className="modal-content all-modal-content">
                                          <div className="modal-header import-popup-header">
                                             <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                Add Images and Videos
                                             </h1>
                                          </div>
                                          <div className='ps-3'>
                                             <p className='text-sm'>Your images and videos need to be at least 500 × 500 pixels, and no larger than 8 MB for images and 100 MB for videos.</p>
                                          </div>
                                          <div className="modal-body text-center px-3 p-0">
                                             <form className="form-container" encType="multipart/form-data">
                                             <div className="upload-files-container" onDragOver={(e) => e.preventDefault()} 
                                            //  onDrop={handleFileDrop}
                                             >
                                                   <div className="drag-file-area">
                                                      <div>
                                                        <img onClick={handleImageClick} className='browse-files-text w-75 mb-4' src={CatalogUpload} alt="" />
                                                      </div>
                                                      <p className="dynamic-message mt-2 mb-n1">
                                                         Drop Anywhere to Import
                                                      </p>
                                                      <label className="label tblName">
                                                         or{" "}
                                                         <span className="browse-files">
                                                            <input
                                                               multiple
                                                               type="file"
                                                               className="default-file-input"
                                                               onChange={handleFileChange}
                                                               ref={fileInputRef}
                                                            />
                                                            <span className="browse-files-text text-dark">
                                                               browse file
                                                            </span>{" "}
                                                            <span>from device</span>
                                                         </span>
                                                      </label>
                                                   </div>
                                               <div className="upload-container">
                                                    {previewFiles.map((item, index) => (
                                                        <div className="upload-item" key={index}>
                                                        <div className="upload-thumbnail">
                                                            {item.type === 'image' ? (
                                                            <img src={item.url} alt={item.name} />
                                                            ) : (
                                                            <video controls>
                                                                <source src={item.url} type={item.file.type} />
                                                            </video>
                                                            )}
                                                        </div>
                                                        <div className="upload-details">
                                                            <p ><strong>{item.name}</strong></p>
                                                            <p>Size: {item.size}</p>
                                                            <p>Modified Time: {item.modifiedTime}</p>
                                                            <button type="button" onClick={() => handleDelete(index)}><i className="fa-solid fa-trash catalog-imgUpload"></i></button>
                                                        </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                </div>
                                             </form>
                                          </div>
                                          <div className="modal-footer d-flex border-0 justify-content-end">
                                             <button type="button" 
                                            //  onClick={() => { setFileName('') }} 
                                             className="btn btn-secondary" data-bs-dismiss="modal" id="closepopup">
                                                Close
                                             </button>
                                             <button type="button" className="btn btn-primary import-btn-bg" 
                                            //  onClick={handleImport}
                                             >
                                                Save
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                <Footer />
            </main> 
        </DashboardLayout>
    </>
  )
}

export default CatalogProductCreate