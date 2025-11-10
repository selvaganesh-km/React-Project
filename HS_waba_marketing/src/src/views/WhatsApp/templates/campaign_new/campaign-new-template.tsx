import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Userimg from "../../../assets/img/team-2.jpg";
import Userimg1 from "../../../assets/img/small-logos/logo-spotify.svg"
import "./campaign-new-template.css";
import DashboardLayout from "../../../../layouts/DashboardLayout";
import TopNav from "../../../../shared/TopNav";
import Footer from "../../../../shared/Footer";
import VendorAPI from "../../../../api/services/vendorLogin/vendorApi";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
interface TempDrop {
   id: string;
   name: string;
}
function Createcampaign() {
   const [tempDrop, setTempDrop] = useState<TempDrop[]>([]);
   const [template, setTemplate] = useState(true);
   const [headerActive, setheaderActive] = useState(false);
   const [names, setNames] = useState('')
   const [whatsappId, setWhatsappId] = useState('')
   const [category, setCategory] = useState('')
   const [languageCode, setLaguageCode] = useState('')
   const [getId, setGetId] = useState('')
   const [tempIdId, settempIdId] = useState('')
   const [tempName, settempName] = useState('')
   const [selectedValue, setSelectedValue] = useState('None');
   const [bodyselectedValue, setBodySelectedValue] = useState('');
   const [fileName, setFileName] = useState<string | null>(null);
   const [textInput, setTextInput] = useState('');
   const [BodytextInput, setBodyTextInput] = useState<{ __html: string }>({ __html: '' });
   const removeHtmlTags = (html: string) => {
      return html.replace(/<\/?[^>]+(>|$)/g, '');
   };
   const cleanedText = removeHtmlTags(BodytextInput.__html);
   console.log(cleanedText);
   const [footertextInput, setFooterTextInput] = useState('');
   const [bodyTextValues, setBodyTextValues] = useState('')
   // const [bodyTextValues1, setBodyTextValues1] = useState('')
   const [bodyTextValues1, setBodyTextValues1] = useState<string[]>([]);
   const [bodyArrayValues, setBodyArrayValues] = useState<string[]>([]);
   const [bodyStringValue, setBodyStringValue] = useState<string>("");
   const [textValues, setTextValues] = useState('')
   const [phoneNumber, setPhoneNumber] = useState('');
   const [imgValue, setImgValue] = useState('')
   const [vdoValue, setVdoValue] = useState('')
   const [docValue, setDocValue] = useState('')
   const [compbodyActive, setCompbodyActive] = useState(false);
   const [compheaderActive, setCompheaderActive] = useState(false);
   const [compActive, setCompActive] = useState(false);
   const [headerTextInput, setHeaderTextInput] = useState<string>('');
   const [quickbtn, setquickbtn] = useState('None')
   const [phoenobtn, setphoenobtn] = useState('None')
   const [copybtn, setcopybtn] = useState('None')
   const [urlbtn, seturlbtn] = useState('None')
   const [dynamicurlbtn, setdynamicurlbtn] = useState('None')
   const [buttonQuicktxt, setButtonQuicktxt] = useState('');
   const [buttonPhonetxt, setButtonPhonetxt] = useState('');
   const [buttonPhoneNotxt, setButtonPhoneNotxt] = useState('');
   const [buttonCopycodetxt, setButtonCopycodetxt] = useState('');
   const [buttonurltxt, setButtonurltxt] = useState('');
   const [buttonwebUrltxt, setButtonwebUrltxt] = useState('');
   const [buttondynamicwebUrltxt, setButtondynamicwebUrltxt] = useState('');
   const [buttonexampleUrltxt, setButtonexampleUrltxt] = useState('');
   const [buttondynamicUrltxt, setButtondynamicUrltxt] = useState('');
   const [loading, setLoading] = useState(false)
   const navigate = useNavigate();
   const handleBacktoSadmin = (e: any) => {
      e.preventDefault();
      navigate("/dashboard", { replace: true });
   };
   const handleActive = () => {
      setTemplate(false);
   }
   const [setValue, setSetValue] = useState("")
   useEffect(() => {
      const queryParams = window.location.pathname;
      const myArray = queryParams.split("/");
      setSetValue(myArray[5]);
      setGetId(myArray[6]);
   })
   useEffect(() => {
      if (getId !== null) {
         whatsappGetApi(getId);
      }
   }, [getId]);
   const handlePhoneClick = (phone: any) => {
      setPhoneNumber(phone);
   };

   const whatsappMsgSend = () => {
      let apiData = {
         messaging_product: "whatsapp",
         to: phoneNumber,
         type: "template",
         template: {
            name: names,
            language: {
               code: languageCode
            },
            ...(compbodyActive ? {
               components: [
                  ...(headerActive ? [{
                     type: "HEADER",
                     format: "TEXT",
                     text: textInput,
                     ...(headerTextInput ? [{
                        parameters: [
                           {
                              type: "text",
                              text: headerTextInput
                           }
                        ]
                     }] : []),
                  }] : []),
                  ...(compActive ? [{
                     type: "HEADER",
                     parameters: [
                        {
                           type: imgValue ? "image" : "video",
                           [imgValue ? "image" : "video"]: {
                              id: "1021898589803177"
                           }
                        }
                     ]
                  }] : []),
                  {
                     type: "BODY",
                     parameters: bodyArrayValues
                  }
               ]
            } : {})
         }
      };


      VendorAPI.whatsappMsgSendAPI(apiData)
         .then((responseData: any) => {
            console.log("API Response:", responseData);
            if (responseData.apiStatus.code === "200") {
               toast.success(responseData.apiStatus.message);
               navigate("/vendor/whatsapp-template");
            } else {
               toast.error(responseData.error.error_user_msg);
            }
         })
         .catch((error: any) => {
            console.error("Error during API call:", error);
         });
   };

   const whatsappGetApi = async (id: any) => {
      setLoading(true);
      console.log(getId === id, "idzzz");
      if (getId === id) {
         setTemplate(false);
      }
      else {
         setTemplate(true);
      }
      setWhatsappId(id);

      try {
         const responseData = await VendorAPI.whatsappGet(id);
         console.log("API Response:", responseData);
         if (responseData.apiStatus.code === '200') {
            const data = responseData?.responseData;
            setNames(data?.name);
            setLaguageCode(data?.language);
            setCategory(data?.category);
            const componentFormat = data?.components?.[0]?.format?.toLowerCase();
            if (componentFormat) {
               setSelectedValue(componentFormat);
            }
            const bodyTextComponent = data?.components?.find((comp: any) => comp.example?.body_text);
            const textComponent = data?.components?.find((comp: any) => comp.text);

            if (bodyTextComponent) {
               const bodyText = bodyTextComponent.example.body_text;
               if (bodyText?.[0].length > 1) {
                  const formattedArray = bodyText.shift().map((item: any) => ({
                     type: "text",
                     text: item
                  }));
                  setBodyArrayValues(formattedArray)
               } else {
                  const formattedArray = bodyText.flatMap((innerArray: string[]) =>
                     innerArray.map((item: string) => ({
                        type: "text",
                        text: item
                     }))
                  );
                  setBodyArrayValues(formattedArray)
               }
               if (Array.isArray(bodyText)) {
                  setCompbodyActive(true)
                  setBodyTextValues1(bodyText.flat(Infinity));
               }
            } else if (textComponent) {
               const textData = textComponent.text;
               if (Array.isArray(textData)) {
                  setBodyTextValues(textData[0]);
               } else {
                  setBodyTextValues(textData);
               }
            }
            data?.components?.forEach((component: any) => {
               switch (component.type) {
                  case "HEADER":
                     if (component?.format === "TEXT" || component?.format === "text") {
                        setheaderActive(true);
                        setTextInput(component.text);
                        setHeaderTextInput(component?.example?.header_text?.[0])
                     }
                     if (component?.format === "IMAGE") {
                        setCompActive(component?.format === "IMAGE")
                        setImgValue(component?.example?.header_handle[0])
                     }
                     else if (component?.format === "VIDEO") {
                        setCompActive(component?.format === "VIDEO")
                        setVdoValue(component?.example?.header_handle[0])
                     }
                     if (component.type === "HEADER") {
                        switch (component.format) {
                           case "IMAGE":
                              setImgValue(component?.example.header_handle[0])
                              break;
                           case "VIDEO":
                              setVdoValue(component?.example.header_handle[0])
                              break;
                           case "DOCUMENT":
                              setDocValue(component?.example.header_handle[0])
                              break;
                           default:
                              console.log("Imagevalue")
                              break;
                        }
                     }
                     console.log("HEADER Text:", component.text);
                     break;
                  case "BODY":
                     setBodyTextInput({ __html: component.text });
                     console.log("BODY Text:", component.text);
                     break;
                  case "FOOTER":
                     setFooterTextInput(component.text);
                     console.log("FOOTER Text:", component.text);
                     break;

                  case "BUTTONS":
                     component?.buttons.forEach((buttonsValue: any) => {
                        if (buttonsValue) {
                           switch (buttonsValue?.type) {
                              case "QUICK_REPLY":
                                 console.log("Quick Reply button detected");
                                 setquickbtn("QUICK_REPLY");
                                 setButtonQuicktxt(buttonsValue?.text);
                                 break;
                              case "PHONE_NUMBER":
                                 console.log("Phone Number button detected");
                                 setphoenobtn("PHONE_NUMBER");
                                 setButtonPhonetxt(buttonsValue?.text);
                                 setButtonPhoneNotxt(buttonsValue?.phone_number);
                                 break;
                              case "COPY_CODE":
                                 console.log("Copy Code button detected");
                                 setcopybtn("COPY_CODE");
                                 setButtonCopycodetxt(buttonsValue?.text);
                                 break;
                              case "URL":
                                 console.log("URL button detected");
                                 seturlbtn("URL");
                                 setButtonurltxt(buttonsValue?.text);
                                 setButtonwebUrltxt(buttonsValue?.text);
                                 break;
                              case "URL":
                                 console.log("Dynamic URL button detected");
                                 setdynamicurlbtn("URL");
                                 setButtondynamicUrltxt(buttonsValue?.text);
                                 setButtondynamicwebUrltxt(buttonsValue?.text);
                                 setButtonexampleUrltxt(buttonsValue?.text);
                                 break;
                              default:
                                 console.log("Unknown button type:", buttonsValue?.type);
                                 break;
                           }
                        }
                     });
                     break;
                  default:
                     break;
                     setLoading(false)

               }


            });

         } else {
            setLoading(false)
            // Handle API error (optional)
            // toast.error(`get failed: ${responseData.apiStatus.message}`);
         }
      } catch (error) {
         setLoading(false)
         console.error("Error during API call:", error);
      }
   };

   const whatsappTemplateDropdwon = () => {
      VendorAPI.whatsappTemplateDropdwon()
         .then((responceData: any) => {
            console.log("API Response:", responceData);
            if (responceData.apiStatus.code === '200') {
               setTempDrop(responceData?.responseData?.templateList?.data)
            }
         })
         .catch((error: any) => {
            console.error("Error during login:", error);
         });
   };
   const handleTempChange = () => {
      setTemplate(true)
      if (template === true) {
         navigate('/vendor/campaign/create/new');
      }
   }

   const [togglebox, Settogglebox] = useState(true);
   const [checkboxset, SetCheckBox] = useState(false);
   const OpenToggle = () => {
      SetCheckBox(true);
      Settogglebox(false);
      if (togglebox === false) {
         Settogglebox(true);
         SetCheckBox(false)
      }
   }
   const location = useLocation();
   const contactDetailsValue = location.state?.contactDetailsValue || {};
   console.log(contactDetailsValue, "contact");

   return (
      <DashboardLayout>
         <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <TopNav />
            <div className="container-fluid py-1">
               <div className="row">
                  <div className="col-md-6">
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                           <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Dashboard</a></li>
                           <li className="breadcrumb-item text-sm text-dark active" aria-current="page">{contactDetailsValue.firstName ? "Send WhatsApp Template Message" : "Create New Campaigns"}</li>
                        </ol>
                        <h6 className="text-start font-weight-bolder mb-0">{contactDetailsValue.firstName ? "Send WhatsApp Template Message" : "Create New Campaigns"}</h6>
                     </nav>
                  </div>
                  <div className="col-md-6 text-end">
                     {contactDetailsValue.firstName ? (
                        <button className="vendor-crt-btn" onClick={() => navigate('/vendor/contacts')}>Back To Contact</button>
                     ) : null} &nbsp;
                     <button className="vendor-crt-btn" onClick={() => { whatsappGetApi(getId) }}>Sync WhatsApp Templates</button>&nbsp;
                     <button className="vendor-crt-btn" onClick={() => { navigate("/vendor/campaign") }}>Manage Campaigns</button>
                  </div>
               </div>
            </div>
            <div className="myprofile-maincontent container-fluid py-4">
               <div className="row myprofile-content">
                  {contactDetailsValue.firstName ? (
                     <div className="col-md-12 border-bottom mb-4">
                        <p className="text-sm">Name: {contactDetailsValue.firstName} {contactDetailsValue.lastName}</p>
                        <p className="mt-n3 text-sm">Phone: {contactDetailsValue.mobile}</p>
                        <p className="mt-n3 text-sm">Country: {contactDetailsValue.country}</p>
                     </div>
                  ) : null}
                  <div className="col-md-12">
                     <h5 className="text-start">Step 1</h5>
                     {template ? (
                        <div className="col-md-6 login-input-group">
                           <p className="text-start">Select templates</p>
                           <div className="edit-container dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                              <input type="text" id="vendor-crt-input" onClick={whatsappTemplateDropdwon}
                                 readOnly
                                 value={tempName}
                                 className="vendor-crt-input cursor-pointer"
                                 placeholder=" "
                                 required />
                              <label htmlFor="vendor-crt-input" className="vendor-crt-label">
                                 <i className="fa-regular fa-circle-check"></i> Select & Configure Template
                              </label>
                              <i className="dropdown-icon font-size-dash-arrow fa-solid fa-chevron-down"></i>
                              <ul className="dropdown-menu template-dropdown w-100" >
                                 {tempDrop.map((dropdownValue, id) => (
                                    <li key={id}>
                                       <a
                                          className="dropdown-item"
                                          href="#"
                                          onClick={() => { navigate(`/vendor/campaign/create/new/${dropdownValue?.name}/${dropdownValue?.id}`); settempIdId(dropdownValue?.id); settempName(dropdownValue?.name); setTemplate(false) }}
                                       >
                                          {dropdownValue?.name}
                                       </a>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ) : (
                        <>
                           {
                              loading ? (
                                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "100px" }}>
                                    <FadeLoader color="#36d7b7" />
                                 </div>
                              ) : (

                                 <div className="row">
                                    <div className="col-md-6 text-start ">
                                       <div className="campaign-template camp-template mb-4">
                                          <h6 className="campaign-temp-head">Template <span className="campaign-temp-change cursor-pointer" onClick={() => { handleTempChange(); settempName("") }}>Change</span></h6>
                                          <p>{textInput}</p>
                                          <p>Language Code: {languageCode}</p>
                                          <p>Category: <b>{category}</b></p>
                                       </div>
                                       <div className="text-start campaign-template">
                                          <h6 className="campaign-temp-head">Body</h6>
                                          <div className="row">
                                             <div className="col-md-6">
                                                Assign content for {"{{1}}"} variable
                                                <div className="vendor-create-container mt-3 dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                   <input type="text" id="vendor-crt-input" readOnly className="vendor-crt-input" placeholder=" " required />
                                                   <label htmlFor="vendor-crt-input" className="vendor-crt-label">Choose or write your own</label>
                                                   <i
                                                      className={"dropdown-icon font-size-dash-arrow fa-solid fa-chevron-down"}
                                                   ></i>
                                                   <ul className="dropdown-menu">
                                                      <li><a className="dropdown-item" href="#">Contact Full name</a></li>
                                                      <li><a className="dropdown-item" href="#">Contact First name</a></li>
                                                      <li><a className="dropdown-item" href="#">Contact Last name</a></li>
                                                      <li><a className="dropdown-item" href="#">Contact Phone</a></li>
                                                      <li><a className="dropdown-item" href="#">Language Code</a></li>
                                                      <li><a className="dropdown-item" href="#">Contatc Country</a></li>
                                                   </ul>
                                                </div>
                                             </div>
                                             <div className="col-md-6">
                                                Assign content for {"{{2}}"} variable
                                                <div className="vendor-create-container mt-3 dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                   <input type="text" id="vendor-crt-input" readOnly className="vendor-crt-input" placeholder=" " required />
                                                   <label htmlFor="vendor-crt-input" className="vendor-crt-label">Choose or write your own</label>
                                                   <i
                                                      className={"dropdown-icon font-size-dash-arrow fa-solid fa-chevron-down"}
                                                   ></i>
                                                   <ul className="dropdown-menu">
                                                      <li><a className="dropdown-item" href="#">Contact Full name</a></li>
                                                      <li><a className="dropdown-item" href="#">Contact First name</a></li>
                                                      <li><a className="dropdown-item" href="#">Contact Last name</a></li>
                                                      <li><a className="dropdown-item" href="#">Contact Phone</a></li>
                                                      <li><a className="dropdown-item" href="#">Language Code</a></li>
                                                      <li><a className="dropdown-item" href="#">Contatc Country</a></li>
                                                   </ul>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <h5 className="text-start">Step 2</h5>
                                       <div className="text-start campaign-template mt-4">
                                          <h6 className="campaign-temp-head">Contact and Schedule</h6>
                                          <div className="vendor-create-container">
                                             <input type="text" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                             <label htmlFor="vendor-crt-input" className="vendor-crt-label">Campaign Title</label>
                                          </div>
                                          <p className="pt-2 campaign-groupcnt">Groups/Contact</p>
                                          <div className="vendor-create-container dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                             <input type="text" readOnly id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                             <label htmlFor="vendor-crt-input" className="vendor-crt-label">Select Contacts Group</label>
                                             <i
                                                className={"dropdown-icon font-size-dash-arrow fa-solid fa-chevron-down"}
                                             ></i>
                                             <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">All Contact</a></li>
                                                <li><a className="dropdown-item" href="#">Data 1</a></li>
                                                <li><a className="dropdown-item" href="#">Data 2</a></li>
                                                <li><a className="dropdown-item" href="#">Test</a></li>
                                             </ul>
                                          </div>
                                          <div className="text-start pt-3 pb-3 form-check form-switch ms-1 is-filled">
                                             <input className="form-check-input campaign-create-inputstatus" type="checkbox" id="flexSwitchCheckDefault" />
                                             <span className="">Restrict by Language Code - Send only to the contacts whose language code matches with template language code.</span>
                                          </div>
                                          <div className="mb-4 text-start campaign-template border border-light">
                                             <h6 className="campaign-temp-head">Schedule</h6>
                                             <div className="text-start pt-2 pb-2 form-check form-switch ms-1 is-filled">
                                                <input className="form-check-input campaign-create-inputstatus" type="checkbox" id="flexSwitchCheckDefault" checked={togglebox} onClick={OpenToggle} />
                                                <span>Now</span>
                                             </div>
                                             {checkboxset && (
                                                <>
                                                   <div className="vendor-create-container dropdown mt-4" data-bs-toggle="dropdown" aria-expanded="false">
                                                      <input type="text" readOnly id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                                      <label htmlFor="vendor-crt-input" className="vendor-crt-label">Select your Timezone</label>
                                                      <i
                                                         className={"dropdown-icon font-size-dash-arrow fa-solid fa-chevron-down"}
                                                      ></i>
                                                      <ul className="dropdown-menu w-100">
                                                         <li><a className="dropdown-item" href="#">Asia / Kolkata</a></li>
                                                         <li><a className="dropdown-item" href="#">Asia / Chennai</a></li>
                                                         <li><a className="dropdown-item" href="#">Asia / Kerala</a></li>
                                                         <li><a className="dropdown-item" href="#">Asia / Delhi</a></li>
                                                      </ul>
                                                   </div>
                                                   <div className="vendor-create-container mt-4">
                                                      <input type="date" id="vendor-crt-input" className="vendor-crt-input" placeholder=" " required />
                                                      <label htmlFor="vendor-crt-input" className="vendor-crt-label">Schedule At</label>
                                                   </div>
                                                </>
                                             )}

                                          </div>
                                       </div>
                                       <div className="text-start campaign-template mt-5">
                                          <h6 className="campaign-temp-head">Send using Phone Number</h6>
                                          <div className="vendor-create-container dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                             <input type="text" readOnly value={phoneNumber} id="vendor-crt-input" className="vendor-crt-input cursor-pointer" placeholder=" " required />
                                             <label htmlFor="vendor-crt-input" className="vendor-crt-label"> Phone Number</label>
                                             <i
                                                className={"dropdown-icon font-size-dash-arrow fa-solid fa-chevron-down"}
                                             ></i>
                                             <ul className="dropdown-menu w-100">
                                                <li><a className="dropdown-item" onClick={() => handlePhoneClick('919342162357')}>919342162357</a></li>
                                                <li><a className="dropdown-item" onClick={() => handlePhoneClick('918248415806')}>918248415806</a></li>
                                                <li><a className="dropdown-item" onClick={() => handlePhoneClick('919025714445')}>919025714445</a></li>
                                                <li><a className="dropdown-item" onClick={() => handlePhoneClick('919841652232')}>919841652232</a></li>
                                                <li><a className="dropdown-item" onClick={() => handlePhoneClick('916384626418')}>916384626418</a></li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-6 text-start ">
                                       <div className="campaign-template">
                                          <h6 className="campaign-temp-head">Message Preview</h6>
                                          <div className="campaign-msgImg">
                                             <div className="conversation">
                                                <div className="conversation-container">
                                                   <div className=" p-4 message received">
                                                      <p className="campaign-msg-cnt template-headertxt"><b>{textInput}
                                                         {imgValue ? <div className='ps-0 rounded' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '35px', background: 'gainsboro' }}><i className="fa fa-5x fa-image text-white"></i></div> : null}
                                                         {vdoValue ? <div className='ps-0 rounded' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '35px', background: 'gainsboro' }}><i className="fa fa-5x fa-play-circle"></i></div> : null}
                                                         {docValue ? <div className='ps-0 rounded' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '35px', background: 'gainsboro' }}><i className="fa fa-5x fa-file-alt text-white"></i></div> : null}
                                                      </b></p>
                                                      <p className="campaign-msg-cnt template-bodytxt"
                                                         dangerouslySetInnerHTML={BodytextInput}
                                                      ></p>
                                                      {/* <p className="campaign-msg-cnt">You have earned loyalty points of {"{{2}}"}</p>
                                             <p className="campaign-msg-cnt">Visit Our Showroom !!!</p> */}
                                                      <p className="campaign-msg-cnt template-footertxt">{footertextInput} </p>
                                                      <div className="template-buttontxt">
                                                         {(quickbtn === 'None' || quickbtn === 'QUICK_REPLY') && (
                                                            <p className="template-buttontxt button-option-style text-center">{quickbtn === "QUICK_REPLY" ? <i className="fa-solid fa-reply bt-1"></i> : ""} {buttonQuicktxt}</p>
                                                         )}
                                                         {(phoenobtn === 'None' || phoenobtn === 'PHONE_NUMBER') && (
                                                            <p className="template-buttontxt button-option-style text-center">{phoenobtn === "PHONE_NUMBER" ? <i className="fa-solid fa-phone"></i> : ""} {buttonPhonetxt}</p>
                                                         )}
                                                         {(copybtn === 'None' || copybtn === 'COPY_CODE') && (
                                                            <p className="template-buttontxt button-option-style text-center">{copybtn === "COPY_CODE" ? <i className="fa-solid fa-copy"></i> : ""} {copybtn === "COPY_CODE" ? "Copy Code" : ""}</p>
                                                         )}
                                                         {(urlbtn === 'None' || urlbtn === 'URL') && (
                                                            <p className="template-buttontxt button-option-style text-center">{urlbtn === "URL" ? <i className="fa-solid fa-square-arrow-up-right"></i> : ""} {buttonurltxt}</p>
                                                         )}
                                                         {(dynamicurlbtn === 'None' || dynamicurlbtn === 'URL') && (
                                                            <p className="template-buttontxt button-option-style text-center">{dynamicurlbtn === "URL" ? <i className="fa-solid fa-square-arrow-up-right"></i> : ""} {buttondynamicUrltxt}</p>
                                                         )}
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="campaign-msgCnt">
                                             <p>
                                                <b>Please note:</b> Words like {"{{1}}"}, {"{{abc}}"} etc. are dynamic variables and will be replaced based on your selections.
                                             </p>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="my-4 text-start">
                                       <button className="campaign-create-btn" onClick={whatsappMsgSend}>Schedule Campaign</button>
                                    </div>
                                 </div>
                              )}
                        </>
                     )}
                  </div>
               </div>
               <Footer />
            </div>
         </main>
      </DashboardLayout>
   )
}
export default Createcampaign;