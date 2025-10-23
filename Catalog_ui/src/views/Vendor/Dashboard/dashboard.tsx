import SoftUI from "../../../assets/img/small-logos/logo-xd.svg";
import AddProgress from "../../../assets/img/small-logos/logo-atlassian.svg";
import FixPlat from "../../../assets/img/small-logos/logo-slack.svg";
import LaunchIcon from "../../../assets/img/small-logos/logo-spotify.svg";
import DashboardLayout from "../../../layouts/DashboardLayout";
import TopNav from "../../../shared/TopNav";
import Footer from "../../../shared/Footer";
import "./dashboard.css"
import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import VendorAPI from "../../../api/services/vendorLogin/vendorApi";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";

function VendorDashboard() {
   const [redirect, setRedirect] = React.useState<string | null>(null);
   const navigate = useNavigate();
   
   const [vendorDashcount,setVendorDashcount]=useState<any>("")
   const [catalogDashcount,setCatalogDashcount]=useState<any>("")
   const [loading, setLoading] = useState(false);


   const handleVendorDashcount = () => {
      setLoading(true)
            VendorAPI.commonVendorDashCount()
               .then((responseData:any) => {
                  if (responseData.apiStatus.code === '200') {
                     setVendorDashcount(responseData?.VendorDashCountData);
                     setLoading(false)
                  } else {
                     toast.error(responseData.apiStatus.message);
                     setLoading(false)
                  }
               })
               .catch((error:any) => {
                  console.error("Error while fetching dahboard count:", error);
                  toast.error("An error occurred while fetching dahboard count.");
                  setLoading(false)
               });
   };
   const handleCatalogDashCount = () => {
      setLoading(true)
            VendorAPI.commonCatalogDashCount()
               .then((responseData:any) => {
                  if (responseData.apiStatus.code === '200') {
                     setCatalogDashcount(responseData?.CatalogVendorDashCountData);
                     setLoading(false)
                  } else {
                     toast.error(responseData.apiStatus.message);
                     setLoading(false)
                  }
               })
               .catch((error:any) => {
                  console.error("Error while fetching dahboard count:", error);
                  toast.error("An error occurred while fetching dahboard count.");
                  setLoading(false)
               });
   };
   useEffect(()=>{
      handleVendorDashcount();
      handleCatalogDashCount();
   },[])
   if (redirect) {
      return <Navigate to={redirect} />;
   }
   return (
      <>
         <DashboardLayout>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
               <TopNav />
               <div className="container-fluid py-1">
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm"><a className="opacity-5 grayFont" href="#">Home</a></li>
                        <li className="breadcrumb-item text-sm grayFont active" aria-current="page"> Dashboard</li>
                     </ol>
                     <h6 className="font-weight-bolder text-start mb-0 grayFont"> Dashboard</h6>
                  </nav>
               </div>
               <div className="dashboard-maincontent container-fluid py-4">
               {
                        loading ? (
                           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "100px" }}>
                              <FadeLoader color="#36d7b7" />
                           </div>
                        ) : vendorDashcount.length === 0 ? (
                           <p className="" style={{ textAlign: "center", marginTop: "0px" }}><span>
                              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="120"
                                 height="120"
                                 viewBox="0 0 512 512">
                           <path d="M0 0 C2.1198433 0.0056486 4.23967858 0.00846379 6.35952759 0.0110817 C26.90876038 0.04796487 47.20245193 0.45946186 67.58584595 3.31805801 C68.90952917 3.49711854 70.23326122 3.67581845 71.55703735 3.85419083 C122.10618129 10.7519002 161.99715664 22.87437544 199.58584595 58.31805801 C200.36959595 59.04766739 201.15334595 59.77727676 201.96084595 60.52899551 C246.20161285 103.03173229 256.87271381 167.97321338 258.693573 226.79831314 C258.74930531 230.49916141 258.77664528 234.19884115 258.78897095 237.90008926 C258.79179832 238.57637564 258.7946257 239.25266201 258.79753876 239.94944191 C258.81241841 243.54603185 258.82171203 247.14258302 258.82608032 250.73920059 C258.83041279 253.63288723 258.84411448 256.52626689 258.86709595 259.41986465 C259.07109196 285.67523071 257.56872945 311.62284962 253.27334595 337.56805801 C253.06387329 338.86541885 252.85440063 340.16277969 252.63858032 341.4994545 C245.28859483 386.25892924 231.90547881 420.10300068 200.58584595 453.31805801 C199.85623657 454.10180801 199.1266272 454.88555801 198.37490845 455.69305801 C155.57595956 500.24214979 90.27638402 510.59645208 31.10108948 512.42578506 C27.52674671 512.4810209 23.95355962 512.5083338 20.3788147 512.52118301 C19.06685623 512.52819733 17.75489777 512.53521164 16.40318298 512.54243851 C12.19323232 512.56183151 7.98333677 512.56687235 3.77334595 512.56805801 C3.05619415 512.56849987 2.33904236 512.56894173 1.60015869 512.56939697 C-19.88157172 512.5763392 -41.09596572 512.29262146 -62.41415405 509.31805801 C-63.70869507 509.14645157 -65.00323608 508.97484512 -66.33700562 508.79803848 C-123.55513301 501.15002596 -173.89688934 484.10638108 -210.45516968 436.68744278 C-245.09649875 390.67863511 -253.41426233 330.59176764 -253.61727905 274.11102676 C-253.62780052 272.14308907 -253.62780052 272.14308907 -253.63853455 270.13539505 C-253.65792755 265.92544439 -253.66296839 261.71554884 -253.66415405 257.50555801 C-253.66459591 256.78840622 -253.66503777 256.07125443 -253.66549301 255.33237076 C-253.67243459 233.85265288 -253.3997857 212.63327349 -250.41415405 191.31805801 C-250.23502298 189.98901301 -250.05632561 188.65990949 -249.87802124 187.33075333 C-245.81401581 157.40883305 -240.95374301 127.08707284 -226.41415405 100.31805801 C-225.59817749 98.77891739 -225.59817749 98.77891739 -224.76571655 97.20868301 C-217.29031399 83.71649302 -207.4622158 71.76033947 -196.76327515 60.71405411 C-195.54666068 59.45516856 -194.34836607 58.17864047 -193.1524353 56.90008926 C-170.24546708 32.97691543 -140.58720361 18.16238506 -108.53915405 11.25555801 C-107.77734833 11.08852371 -107.0155426 10.92148941 -106.23065186 10.74939346 C-94.6253594 8.21783618 -82.98357064 6.13098144 -71.22665405 4.44305801 C-70.55853699 4.34564316 -69.89041992 4.2482283 -69.20205688 4.14786148 C-46.21087322 0.84801317 -23.20467134 -0.06283861 0 0 Z " fill="#FEE4E4" transform="translate(253.41415405273438,-0.3180580139160156)"/>
                           <path d="M0 0 C2.19148005 -0.01550846 4.38292651 -0.03715274 6.57427979 -0.06536865 C18.24346049 -0.20147824 28.73988525 -0.30238202 39.63735962 4.35147095 C40.66748169 4.78628784 41.69760376 5.22110474 42.75894165 5.6690979 C51.42366615 9.49963633 58.42395776 15.33894581 65.63735962 21.35147095 C66.7205019 22.2397248 67.80383057 23.12775143 68.88735962 24.01553345 C84.76718886 37.14062407 100.46676982 51.47203644 113.63735962 67.35147095 C114.29607056 68.13264282 114.95478149 68.9138147 115.63345337 69.71865845 C118.00485461 72.56772161 120.3310715 75.44973493 122.63735962 78.35147095 C123.12462524 78.96087524 123.61189087 79.57027954 124.11392212 80.19815063 C134.54773431 93.3387244 142.64018277 106.24172549 143.24673462 123.44522095 C143.28385559 124.38039551 143.32097656 125.31557007 143.35922241 126.27908325 C143.91392334 142.12794945 143.87993515 157.99494973 143.88735962 173.85147095 C143.88868519 175.1479229 143.88868519 175.1479229 143.89003754 176.4705658 C143.91108249 199.71750479 143.63493585 222.88970056 142.26235962 246.10147095 C142.19923584 247.17389038 142.13611206 248.24630981 142.07107544 249.35122681 C141.45190727 259.550644 140.66567931 269.73098329 139.64517212 279.89834595 C139.57077911 280.66112854 139.49638611 281.42391113 139.41973877 282.20980835 C137.70640029 298.28256582 130.05482842 312.21456447 117.87954712 322.73428345 C106.60924383 331.65047639 94.38985295 336.15885269 80.14126587 337.1678772 C79.34945419 337.22926376 78.55764252 337.29065033 77.74183655 337.35389709 C75.22828312 337.54699807 72.71413105 337.73048464 70.19985962 337.91397095 C68.5494233 338.04032868 66.89903215 338.16727773 65.24868774 338.29483032 C60.37932656 338.66558842 55.51005036 339.02697343 50.63735962 339.35147095 C49.38737183 339.43659943 48.13738403 339.52172791 46.84951782 339.60943604 C36.72825821 340.27087883 26.64574736 340.52705722 16.50454712 340.55459595 C14.9073128 340.56149095 13.31007871 340.56844018 11.71284485 340.57543945 C6.64601398 340.59443967 1.57922158 340.59909506 -3.48764038 340.60147095 C-4.77703962 340.60279652 -4.77703962 340.60279652 -6.09248734 340.60414886 C-31.59956488 340.62744473 -57.00829424 340.48277985 -82.36264038 337.35147095 C-83.6238269 337.19605835 -84.88501343 337.04064575 -86.18441772 336.88052368 C-99.04144471 335.17764522 -109.12191531 331.4106331 -119.36264038 323.35147095 C-120.20182007 322.70822876 -121.04099976 322.06498657 -121.90560913 321.4022522 C-134.26518159 311.08623385 -140.45937417 296.90356436 -142.23764038 281.28897095 C-145.25103848 246.39136721 -145.73912507 211.48805837 -145.73324585 176.47842407 C-145.73308402 171.33537627 -145.74689869 166.19268745 -145.77426147 161.04971313 C-145.917962 133.5700232 -145.59349121 106.24079876 -143.52670288 78.82803345 C-143.40345705 77.15594881 -143.40345705 77.15594881 -143.27772141 75.45008469 C-141.43248506 51.06124352 -137.05398245 33.70531609 -118.24642944 16.93252563 C-107.15977887 7.62755556 -94.82283055 5.03653986 -80.73764038 3.78897095 C-80.07648224 3.72865692 -79.4153241 3.6683429 -78.73413086 3.60620117 C-52.54047074 1.23184185 -26.29733714 0.17266566 0 0 Z " fill="#F14648" transform="translate(257.3626403808594,85.64852905273438)"/>
                           <path d="M0 0 C18.67666855 -0.20399856 33.16812845 9.47083845 47 21 C48.08314228 21.88825385 49.16647095 22.77628049 50.25 23.6640625 C66.12982924 36.78915312 81.8294102 51.12056549 95 67 C95.65871094 67.78117187 96.31742187 68.56234375 96.99609375 69.3671875 C99.36749499 72.21625067 101.69371188 75.09826398 104 78 C104.48726563 78.6094043 104.97453125 79.21880859 105.4765625 79.84667969 C114.56653817 91.29479603 124.16364642 103.92058474 124.0390625 119.20703125 C124.03342285 120.10526611 124.0277832 121.00350098 124.02197266 121.92895508 C124.01109619 122.95412231 124.01109619 122.95412231 124 124 C73.43332631 124.42797315 73.43332631 124.42797315 55 122 C54.23574707 121.90879883 53.47149414 121.81759766 52.68408203 121.72363281 C36.06314359 119.66094287 23.9196237 111.49751541 13.25 98.75 C4.21047286 86.21405198 2.5908211 74.12966644 1.2668457 59.03564453 C1.10011923 57.13895933 0.91655102 55.24359115 0.70776367 53.35107422 C-0.38807638 42.68515425 -0.10798839 31.95779449 -0.0625 21.25 C-0.05747502 19.18489692 -0.05291388 17.11979265 -0.04882812 15.0546875 C-0.03790143 10.0364287 -0.02069175 5.01822765 0 0 Z " fill="#494865" transform="translate(276,86)"/>
                           <path d="M0 0 C6.93858886 6.19603812 10.69652852 12.23186575 11.5625 21.63671875 C11.67263445 32.14354544 10.23106475 39.47585399 3.04296875 47.3125 C-0.57248691 50.64804941 -4.69484268 53.25952095 -8.7734375 55.98828125 C-10.78142066 57.3936097 -12.78152507 58.81026539 -14.7734375 60.23828125 C-15.6809375 60.8828125 -16.5884375 61.52734375 -17.5234375 62.19140625 C-20.13514026 64.2771411 -21.63820986 65.86589181 -22.046875 69.2578125 C-22.08039063 70.09699219 -22.11390625 70.93617188 -22.1484375 71.80078125 C-22.54104729 76.51898658 -23.58656813 79.34614483 -26.7734375 82.98828125 C-29.97751053 85.3379348 -32.87618515 85.53389658 -36.7734375 84.98828125 C-40.20109074 82.9205554 -42.48053162 80.8669989 -43.7734375 76.98828125 C-44.45469979 68.14497266 -43.86976615 60.85940593 -38.5234375 53.61328125 C-34.28074737 48.94203656 -28.71336632 45.77895294 -23.4296875 42.41796875 C-16.19236201 37.93162133 -16.19236201 37.93162133 -11.7734375 30.98828125 C-11.01863238 25.65697349 -10.77353183 21.38814918 -13.9609375 16.92578125 C-18.88733696 13.5320394 -22.73294562 12.69525354 -28.7109375 12.67578125 C-29.89558594 12.65902344 -31.08023438 12.64226562 -32.30078125 12.625 C-38.75095686 13.29976528 -42.44926996 16.17172418 -46.3984375 21.015625 C-47.79963731 23.02586904 -48.85449141 25.02397373 -49.8984375 27.23828125 C-52.43940514 32.54653752 -52.43940514 32.54653752 -55.7734375 33.98828125 C-60.46017111 34.68424357 -63.69968211 34.65937837 -67.7734375 32.11328125 C-71.16226669 28.51265024 -71.23526426 25.65504593 -71.1796875 20.84765625 C-70.14039888 13.53266324 -65.38982695 6.58082383 -60.01953125 1.6171875 C-42.07844203 -11.39400242 -18.33587084 -13.94601251 0 0 Z " fill="#FEF5F5" transform="translate(285.7734375,241.01171875)"/>
                           <path d="M0 0 C3.25 1.6875 3.25 1.6875 5 5 C5.88295249 10.84394828 6.02726712 15.9835127 3.3125 21.3125 C-2.01996586 24.02903921 -7.15257642 23.87599047 -13 23 C-16.3125 21.3125 -16.3125 21.3125 -18 18 C-18.6037666 13.58355915 -18.81350802 9.3929433 -18 5 C-13.04589661 -1.06852338 -7.42015564 -0.80030973 0 0 Z " fill="#FED6D6" transform="translate(260,336)"/>
                           </svg></span>
                           <p className="table-list-nodata or-text" style={{ textAlign: "center", marginTop: "10px",background:"#f5f5f5" }}>
                              <span>No data found</span></p>
                           </p>
                        ) : (
                           <>
                  <div className="row">
                     
                     <div className="col-lg-12 col-12">
                        <div className="row">
                        <div className="col-lg-4 col-md-4 col-6 dashboard-card">
                              <div className="card">
                                 <span className="mask vendor-dash-bg-img opacity-10 border-radius-lg"></span>
                                 <div className="card-body p-3 position-relative">
                                    <div className="row">
                                       <div className="col-9 text-start">
                                          <div className="icon icon-shape bg-dark vendor-dashboard-iconbg shadow text-center border-radius-2xl">
                                          <i className="fa-solid fa-store vendor-dashboard-icon"></i>        
                                          </div>
                                          <h5 className="grayFont font-weight-bolder mb-0 mt-3">
                                             {vendorDashcount?.contactCount || 0}
                                          </h5>
                                          <span className="vendordash-total">Total Customer</span>
                                          <p className="text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer" onClick={()=>{navigate("/vendor/contacts")}}>Manage Customers</p>
                                       </div>
                                       <div className="col-3">
                                          <div className="dropstart text-end mb-6">
                                             <a href="javascript:;" className="cursor-pointer" id="dropdownUsers2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-ellipsis-h grayFont"></i>
                                             </a>
                                             <ul className="dropdown-menu vendor-dashboard-card" aria-labelledby="dropdownUsers2">
                                                <li><Link className="dropdown-item border-radius-md" to={"/vendor/contacts"}>View all</Link></li>
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
                                          <h5 className="grayFont font-weight-bolder mb-0 mt-3">
                                             {vendorDashcount?.WhatsappQueueCount || 0}
                                          </h5>
                                          <span className="vendordash-total">Queue Whatsapp</span>
                                          <p className="text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer" onClick={()=>{navigate("/vendor/campaign")}}>Manage Queue Whatsapp</p>
                                       </div>
                                       <div className="col-3">
                                          <div className="dropstart text-end mb-6">
                                             <a href="javascript:;" className="cursor-pointer" id="dropdownUsers2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-ellipsis-h grayFont"></i>
                                             </a>
                                             <ul className="dropdown-menu vendor-dashboard-card" aria-labelledby="dropdownUsers2">
                                                <li><Link className="dropdown-item border-radius-md" to={"/vendor/campaign"}>View all</Link></li>
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
                                          <h5 className="grayFont font-weight-bolder mb-0 mt-3">
                                            0
                                          </h5>
                                          <span className="vendordash-total">Messages in Queue SMS</span>
                                          <p className="text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer" onClick={()=>{navigate("/vendor/sms/campaign")}}>Manage Queue SMS</p>
                                       </div>
                                       <div className="col-3">
                                          <div className="dropstart text-end mb-6">
                                             <a href="javascript:;" className="cursor-pointer" id="dropdownUsers2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-ellipsis-h grayFont"></i>
                                             </a>
                                             <ul className="dropdown-menu vendor-dashboard-card" aria-labelledby="dropdownUsers2">
                                                <li><Link className="dropdown-item border-radius-md" to={"/vendor/sms/campaign"}>View all</Link></li>
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
                                          <h5 className="grayFont font-weight-bolder mb-0 mt-3">
                                             0
                                          </h5>
                                          <span className="vendordash-total">Total SMS Balance </span>
                                          <p className="text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer" onClick={()=>{navigate("/vendor/sms/campaign")}}>Manage SMS Balance</p>
                                       </div>
                                       <div className="col-3">
                                          <div className="dropstart text-end mb-6">
                                             <a href="javascript:;" className="cursor-pointer" id="dropdownUsers2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-ellipsis-h grayFont"></i>
                                             </a>
                                             <ul className="dropdown-menu vendor-dashboard-card" aria-labelledby="dropdownUsers2">
                                                <li><Link className="dropdown-item border-radius-md" to={"/vendor/sms/campaign"}>View all</Link></li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="col-lg-4 col-md-4 col-6 dashboard-card">
                              <div className="card">
                                 <span className="mask vendor-dash-bg-img4 opacity-10 border-radius-lg"></span>
                                 <div className="card-body p-3 position-relative">
                                    <div className="row">
                                       <div className="col-9 text-start">
                                          <div className="icon icon-shape bg-dark vendor-dashboard-iconbg shadow text-center border-radius-2xl">
                                             <i className="fa-solid fa-shop text-white"></i>
                                          </div>
                                          <h5 className="grayFont font-weight-bolder mb-0 mt-3">
                                             {catalogDashcount?.totalCatalogs}
                                          </h5>
                                          <span className="vendordash-total">Total Catalog </span>
                                          <p className="text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer" onClick={()=>{navigate("/vendor/catalog/details")}}>Manage catalog</p>
                                       </div>
                                       <div className="col-3">
                                          <div className="dropstart text-end mb-6">
                                             <a href="javascript:;" className="cursor-pointer" id="dropdownUsers2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-ellipsis-h grayFont"></i>
                                             </a>
                                             <ul className="dropdown-menu vendor-dashboard-card" aria-labelledby="dropdownUsers2">
                                                <li><Link className="dropdown-item border-radius-md" to={"/vendor/catalog/details"}>View all</Link></li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="col-lg-4 col-md-4 col-6 dashboard-card">
                              <div className="card">
                                 <span className="mask vendor-dash-bg-img5 opacity-10 border-radius-lg"></span>
                                 <div className="card-body p-3 position-relative">
                                    <div className="row">
                                       <div className="col-9 text-start">
                                          <div className="icon icon-shape bg-dark vendor-dashboard-iconbg shadow text-center border-radius-2xl">
                                            <i className="fa-solid fa-bag-shopping text-white"></i>
                                          </div>
                                          <h5 className="grayFont font-weight-bolder mb-0 mt-3">
                                             {catalogDashcount?.totalProducts}
                                          </h5>
                                          <span className="vendordash-total">Total Product </span>
                                          <p className="text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer" onClick={()=>{navigate("/vendor/catalog/product/details")}}>Manage Product</p>
                                       </div>
                                       <div className="col-3">
                                          <div className="dropstart text-end mb-6">
                                             <a href="javascript:;" className="cursor-pointer" id="dropdownUsers2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-ellipsis-h grayFont"></i>
                                             </a>
                                             <ul className="dropdown-menu vendor-dashboard-card" aria-labelledby="dropdownUsers2">
                                                <li><Link className="dropdown-item border-radius-md" to={"/vendor/catalog/product/details"}>View all</Link></li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="col-lg-4 col-md-4 col-6 dashboard-card">
                              <div className="card">
                                 <span className="mask vendor-dash-bg-img6 opacity-10 border-radius-lg"></span>
                                 <div className="card-body p-3 position-relative">
                                    <div className="row">
                                       <div className="col-9 text-start">
                                          <div className="icon icon-shape bg-dark vendor-dashboard-iconbg shadow text-center border-radius-2xl">
                                            <i className="fa-solid fa-cart-arrow-down text-white"></i>
                                          </div>
                                          <h5 className="grayFont font-weight-bolder mb-0 mt-3">
                                             {catalogDashcount?.totalOrders}
                                          </h5>
                                          <span className="vendordash-total">Total Order </span>
                                          <p className="text-sm text-start font-weight-bolder mt-auto mb-0 cursor-pointer" onClick={()=>{navigate("/vendor/catalog/orders")}}>Manage Order</p>
                                       </div>
                                       <div className="col-3">
                                          <div className="dropstart text-end mb-6">
                                             <a href="javascript:;" className="cursor-pointer" id="dropdownUsers2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-ellipsis-h grayFont"></i>
                                             </a>
                                             <ul className="dropdown-menu vendor-dashboard-card" aria-labelledby="dropdownUsers2">
                                                <li><Link className="dropdown-item border-radius-md" to={"/vendor/catalog/orders"}>View all</Link></li>
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
                  </>)} 
               </div>
            </main>
         </DashboardLayout>
      </>
   )
}
export default VendorDashboard;