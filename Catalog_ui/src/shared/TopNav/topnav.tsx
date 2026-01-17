import React from "react";
import { useNavigate } from "react-router-dom";

function Topnav() {
    const navigate=useNavigate();
  return (
    <div className="header">
      <div className="welcome-section">
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Find transactions..." />
        </div>
      </div>

      <div className="header-right">
        <div className="notification-bell">
          <i className="fas fa-bell"></i>
          <div className="notification-indicator"></div>
        </div>

        <div className="user-profile" id="userProfile">
          <img
            src="https://i.pravatar.cc/100?img=8"
            alt="Alex Morgan"
            className="profile-pic"
          />
          <div className="dropdown-menu" id="dropdownMenu">
            <div className="user-info">
              <img src="https://i.pravatar.cc/100?img=8" alt="John Doe" />
              <div>
                <div className="user-name">John Doe</div>
                <div className="user-role">Admin</div>
              </div>
            </div>
            <ul className="menu-items">
              <li onClick={()=>navigate("/vendor/profile")}>
                <i className="fas fa-user"></i> My Profile
              </li>
              <li>
                <i className="fas fa-cog"></i> Settings
              </li>
              <li onClick={()=>navigate("/")}>
                <i className="fas fa-power-off"></i> Log Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
