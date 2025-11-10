import { Link, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../layouts/DashboardLayout";
import TopNav from "../../../shared/TopNav";
import './whatchat.css';
import { useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface Message {
    text: string;
    file: File | null;
    timestamp: string;
    type: "text" | "file";
}

const WhatsApp_Chat: React.FC = () => {
    const [ShowChat, setShowChat] = useState(true);
    const [ShowChat1, setShowChat1] = useState(false);
    const [activeTab, setActiveTab] = useState("all");

    const ClickMe = () => {
        setShowChat(true);
        setShowChat1(false);
        setActiveTab("all");

    }

    const ClickMe1 = () => {
        setShowChat(false);
        setShowChat1(true);
        setActiveTab("mine");

    }
    const [messages, setMessages] = useState<Message[]>([]);
    const [message, setMessage] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [showPicker, setShowPicker] = useState(false);
    const [chatPopup, setChatPopup] = useState<number | null>(null);

    const handleEmojiClick = (emojiObject: EmojiClickData) => {
        setMessage((prev) => prev + emojiObject.emoji);
        setShowPicker(false);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const sendMessage = () => {
        if (!message.trim() && !selectedFile) return;

        const formattedTimestamp = new Date().toLocaleString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });

        const newMessage: Message = {
            text: selectedFile ? selectedFile.name : message,
            file: selectedFile,
            timestamp: formattedTimestamp,
            type: selectedFile ? "file" : "text",
        };

        setMessages([...messages, newMessage]);
        setMessage("");
        setSelectedFile(null);
    };


    return (
        <>
            <DashboardLayout>
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                    <TopNav />
                    <div className="container-fluid py-1">
                        <div className="row">
                            <div className="col-md-6">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                        <li className="breadcrumb-item text-sm"><Link className="opacity-5 text-dark" to={"/vendor/dashboard"}>Dashboard</Link></li>
                                        <li className="breadcrumb-item text-sm text-dark active" aria-current="page">WhatsApp Chat</li>
                                    </ol>
                                    <h6 className="text-start font-weight-bolder mb-0">WhatsApp Chat</h6>
                                </nav>
                            </div>
                        </div>
                        <div className="card p-3 mt-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <h4>WhatsApp Chat</h4>
                                    <p className="whatsapp-chat-hr"></p>
                                    <div className="form-check form-switch ms-1 is-filled">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                        /> <span>Show All</span>
                                    </div>
                                    <div className="mt-3">
                                        <ul className="nav nav-tabs custom-tabs">
                                            <li className="nav-item" onClick={ClickMe}>
                                                <p className={`nav-link ${activeTab === "all" ? "active-tab" : ""}`}>All</p>
                                            </li>
                                            <li className="nav-item" onClick={ClickMe1}>
                                                <p className={`nav-link ${activeTab === "mine" ? "active-tab" : ""}`}>Mine</p>
                                            </li>
                                        </ul>
                                        {ShowChat && (
                                            <>
                                                <div className="mt-3">
                                                    <div className="input-group">
                                                        <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
                                                        <input type="text" className="form-control" placeholder="Type here..." />
                                                    </div>

                                                    <div className="mt-2">
                                                        <div className="card p-3 first-colm-scroll">
                                                            <div className="d-flex gap-2">
                                                                <div>
                                                                    <h5 className="whatsapp-chat-profile-first">DR</h5>
                                                                </div>
                                                                <div>
                                                                    <h6>Danial D Rajiah - +91 9841652232</h6>
                                                                    <p className="whatsapp-chat-profile-first-p mt-n2">1 days 8 hours 10 minutes 41 Sec Ago</p>
                                                                </div>
                                                            </div>
                                                            <p className="whatsapp-chat-hr"></p>
                                                            <div className="d-flex gap-2">
                                                                <div>
                                                                    <h5 className="whatsapp-chat-profile-first">TC</h5>
                                                                </div>
                                                                <div>
                                                                    <h6>Test Contact - +91 9841652232</h6>
                                                                    <p className="whatsapp-chat-profile-first-p mt-n2">2 months 8 hours 10 minutes 41 Sec Ago</p>
                                                                </div>
                                                            </div>
                                                            <p className="whatsapp-chat-hr"></p>
                                                            <div className="d-flex gap-2">
                                                                <div>
                                                                    <h5 className="whatsapp-chat-profile-first">DR</h5>
                                                                </div>
                                                                <div>
                                                                    <h6>Danial D Rajiah - +91 9841652232</h6>
                                                                    <p className="whatsapp-chat-profile-first-p mt-n2">1 days 8 hours 10 minutes 41 Sec Ago</p>
                                                                </div>
                                                            </div>
                                                            <p className="whatsapp-chat-hr"></p>
                                                            <div className="d-flex gap-2">
                                                                <div>
                                                                    <h5 className="whatsapp-chat-profile-first">TC</h5>
                                                                </div>
                                                                <div>
                                                                    <h6>Test Contact - +91 9841652232</h6>
                                                                    <p className="whatsapp-chat-profile-first-p mt-n2">2 months 8 hours 10 minutes 41 Sec Ago</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {ShowChat1 && (
                                            <>
                                                <div className="mt-3">
                                                    <div className="input-group">
                                                        <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
                                                        <input type="text" className="form-control" placeholder="Type here..." />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="chat-container">
                                        <div className="chat-header">
                                            <div className="d-flex gap-2">
                                                <div>
                                                    <h5 className="whatsapp-chat-profile-first">DR</h5>
                                                </div>
                                                <div>
                                                    <h6 className="text-white">Danial D Rajiah - <span className="text-success">+91 9841652232</span></h6>
                                                    <p className="whatsapp-chat-profile-first-p mt-n2 text-warning">You can't reply, they need to reply back to start the conversation.</p>
                                                </div>
                                            </div>
                                            <div className="btn-group dropstart">
                                                <i className="fa-solid fa-ellipsis-vertical cursor-pointer" data-bs-toggle="dropdown"></i>
                                                <ul className="dropdown-menu chat-three-dot-drop">
                                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-mars"></i> Send template message</a></li>
                                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-eraser"></i> Clear chat history</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="chat-body">
                                            <div className="conversation whatsapp-chat-msg-design">
                                                <div className="conversation-container chat-message-new">
                                                    <div className="p-2 message received">
                                                        <p className="message-text">Hi</p>
                                                        <p className="timestamp">Sunday 8th December 2024 6:27:23 pm</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {messages.map((msg, index) => (
                                                <div
                                                    key={index}
                                                    className={`conversation ${msg.type === "text" || msg.type === "file" ? "whatsapp-chat-msg-design" : ""}`}
                                                >
                                                    <div className="mt-5 d-flex justify-content-end">
                                                        <div className={`p-2 chat-msg-2 ${msg.type === "text" || msg.type === "file" ? "received" : "sent"}`}>
                                                            {msg.type === "file" ? (
                                                                <div className="file-message-container">
                                                                    <i className="fa-solid fa-file text-primary me-2"></i>
                                                                    <span className="file-name">{msg.text}</span>
                                                                </div>
                                                            ) : (
                                                                <p className="message-text">{msg.text}</p>
                                                            )}
                                                            <p className="timestamp">{msg.timestamp}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>


                                        <div className="chat-footer">
                                            <div className="chat-input-container">
                                                <button className="emoji-btn" onClick={() => setShowPicker((prev) => !prev)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aba9a9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <path d="M15 16a3 3 0 0 1-6 0"></path>
                                                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                                    </svg>
                                                </button>
                                                {showPicker && (
                                                    <div className="emoji-dropdown-whtaspp">
                                                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                                                    </div>
                                                )}

                                                {/* {/ Message Input /} */}
                                                <input
                                                    type="text"
                                                    className="chat-input"
                                                    placeholder="Type a message..."
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />

                                                {/* {/ File Upload /} */}
                                                <div className="btn-group dropup">
                                                    <button className="file-btn" data-bs-toggle="dropdown">
                                                        <i className="fa-solid fa-paperclip"></i>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li onClick={() => setChatPopup(1)} data-bs-toggle="modal" data-bs-target="#exampleModal"><a className="dropdown-item" href="#"><i className="fa-solid fa-file"></i> Send Document</a></li>
                                                        <li onClick={() => setChatPopup(2)} data-bs-toggle="modal" data-bs-target="#exampleModal"><a className="dropdown-item" href="#"><i className="fa-solid fa-image"></i> Send Image</a></li>
                                                        <li onClick={() => setChatPopup(3)} data-bs-toggle="modal" data-bs-target="#exampleModal"><a className="dropdown-item" href="#"><i className="fa-solid fa-camera"></i> Send Video</a></li>
                                                        <li onClick={() => setChatPopup(4)} data-bs-toggle="modal" data-bs-target="#exampleModal"><a className="dropdown-item" href="#"><i className="fa-solid fa-microphone"></i> Send Audio</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* {/ Send Button /} */}
                                            <button className="footer-btn-send" onClick={sendMessage}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        {/* {/ Modal for File Upload /} */}
                                        <div className="modal fade" id="exampleModal" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header border-0">
                                                        <h1 className="modal-title fs-5">Send Media</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        {chatPopup && (
                                                            <div className="file-upload-container">
                                                                <input type="file" id="fileUpload" className="file-whatsapp-popup" onChange={handleFileChange} />
                                                                <label htmlFor="fileUpload" className="custom-file-label">
                                                                    {chatPopup === 1 ? "Select Document" :
                                                                        chatPopup === 2 ? "Select Image" :
                                                                            chatPopup === 3 ? "Select Video" : "Select Audio"}
                                                                </label>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="text-center text-success fw-bold">
                                                        {selectedFile ? `Selected File: ${selectedFile}` : "No file selected"}
                                                    </div>
                                                    <div className="modal-footer border-0">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={sendMessage}>Send</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="bg-white card campaign-template mt-5">
                                        <h6 className="campaign-temp-head">Contact Info</h6>
                                        <div>
                                            <div className="text-end">
                                                <button className="whatsapp-border-btn-0" type="button" data-bs-toggle="modal" data-bs-target="#vendorview"><i className="fa-solid fa-pen"></i>  Edit Contact</button>
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <h6 className="mt-n2">Name</h6>
                                            <p className="mt-n2">Test Contact</p>
                                            <h6 className="mt-n2">Phone</h6>
                                            <p className="mt-n2">+91 9842289835</p>
                                            <h6 className="mt-n2">Email</h6>
                                            <p className="mt-n3">-</p>
                                            <h6 className="mt-n2">Language</h6>
                                            <p className="mt-n3">-</p>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="vendorview" aria-labelledby="vendorviewLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content vendorcreate-modal-content">
                                                <div className="modal-header vendorcreate-modal-header">
                                                    <h1 className="modal-title vendorcreate-modal-title fs-6 text-center" id="vendorviewLabel">Edit Contact</h1>
                                                </div>
                                                <div className="p-0 modal-body text-center">
                                                    <div className="row ms-4 mx-4">
                                                        <div className="col-md-12 login-input-group">
                                                            <div className="vendor-create-container">
                                                                <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                                <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-file-signature"></i> First Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 login-input-group">
                                                            <div className="vendor-create-container">
                                                                <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                                <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-file-signature"></i> Last Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 login-input-group">
                                                            <div className="vendor-create-container dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <input
                                                                    type="text"
                                                                    //  onClick={handleGetStoreDrop}
                                                                    id="vendor-crt-input"
                                                                    className={`vendor-crt-input`}
                                                                    //  value={storeName}
                                                                    placeholder=" "
                                                                    required
                                                                    readOnly
                                                                />
                                                                <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-earth-americas"></i> Country</label>
                                                                <i className="dropdown-icon font-size-dash-arrow fa-solid fa-chevron-down"></i>
                                                                <ul className="dropdown-menu storename-dropdown-menu">

                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                        >
                                                                            Other
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 login-input-group">
                                                            <div className="vendor-create-container">
                                                                <input type="number" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                                <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-location-crosshairs"></i> Mobile Number</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 login-input-group">
                                                            <div className="vendor-create-container">
                                                                <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                                <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-code-compare"></i> Language Code</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 login-input-group">
                                                            <div className="vendor-create-container">
                                                                <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                                <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-envelope"></i>  Email</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 login-input-group">
                                                            <div className="vendor-create-container">
                                                                <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                                <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-layer-group"></i> Groups</label>
                                                            </div>
                                                        </div>
                                                        <div className="form-check form-switch ms-1 is-filled text-start">
                                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                                            /> <span className="">Opt out Marketing Messages</span>
                                                        </div>
                                                    </div>
                                                    <div className="campaign-template mt-5 ms-4 mx-4">
                                                        <h6 className="campaign-temp-head">Other Information</h6>
                                                        <div className="row ms-4 mx-4">
                                                            <div className="col-md-12 login-input-group">
                                                                <div className="vendor-create-container">
                                                                    <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                                    <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-calendar"></i> DOB</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 login-input-group">
                                                                <div className="vendor-create-container">
                                                                    <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                                    <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-address-book"></i> Address</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 login-input-group">
                                                                <div className="vendor-create-container">
                                                                    <input type="text" id="vendor-crt-input" className={`vendor-crt-input`} placeholder=" " required />
                                                                    <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-street-view"></i> loyalty_rs</label>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="modal-footer text-end vendor-view-footer ms-4 mx-4">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white card campaign-template mt-5">
                                        <h6 className="campaign-temp-head">Assign Team Member</h6>
                                        <div>
                                            <div className="vendor-create-container dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                <input
                                                    type="text"
                                                    id="vendor-crt-input"
                                                    className={"vendor-crt-input loginfilled-frame-username"}
                                                    placeholder=" "
                                                    required
                                                    readOnly
                                                />
                                                <label htmlFor="vendor-crt-input" className="vendor-crt-label"><i className="fa-solid fa-phone"></i> Not Assigned</label>
                                                <i className="dropdown-icon font-size-dash-arrow fa-solid fa-chevron-down"></i>
                                                <ul className="dropdown-menu storename-dropdown-menu">
                                                    <li >
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        > Not Assigned
                                                        </a>
                                                    </li>
                                                    <li >
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        > GRP Mr
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div className="text-end">
                                                <button className="vendor-crt-btn" data-bs-toggle="modal" data-bs-target="#vendorcreate">Save</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white card campaign-template mt-5">
                                        <h6 className="campaign-temp-head">Labels/Tags</h6>
                                        <div className="card p-3">
                                            <div>
                                                <span className="bg-danger text-white p-1 m-1">Priority</span>
                                                <span className="bg-black text-warning p-1 m-1">In Progress</span>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <button className="vendor-crt-btn" data-bs-toggle="modal" data-bs-target="#vendorcreate">Update</button>
                                        </div>
                                    </div>

                                    <div className="bg-white card campaign-template mt-5">
                                        <h6 className="campaign-temp-head">Notes</h6>
                                        <div>
                                            <h6>TEST - Task has been assigned</h6>
                                            <p>Status Updated</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </DashboardLayout>
        </>
    )
}

export default WhatsApp_Chat;
