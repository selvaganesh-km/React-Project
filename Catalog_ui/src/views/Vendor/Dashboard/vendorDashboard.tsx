import React from "react";
import AuthLayout from "../../../layout/AuthLayout";

function VendorDashboard() {
  return (
    <AuthLayout>
      {/* <!-- Dashboard Container --> */}
      <div className="dashboard-container">
        {/* <!-- Main Dashboard Content --> */}
        <div className="dashboard-main">
          {/* <!-- Transfer Cards --> */}
          <div className="transfer-cards">
            <div className="transfer-card">
              <div className="card-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <p className="card-title">Digital Payments</p>
              <h2 className="card-amount">$1,875</h2>
            </div>

            <div className="transfer-card">
              <div className="card-icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <p className="card-title">External Transfers</p>
              <h2 className="card-amount">$263</h2>
            </div>

            <div className="transfer-card">
              <div className="card-icon">
                <i className="fas fa-university"></i>
              </div>
              <p className="card-title">Domestic Transfers</p>
              <h2 className="card-amount">$394</h2>
            </div>
          </div>

          {/* <!-- Transaction & Transfer Sections --> */}
          <div className="transaction-section">
            <div className="transaction-card">
              <h3 className="section-title">Recent Expenses</h3>

              <div className="transaction-item">
                <div className="transaction-icon">
                  <i className="fas fa-hamburger"></i>
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Dining Out</div>
                  <div className="transaction-time">
                    <i className="far fa-clock"></i> Today, 14:45
                  </div>
                </div>
                <div className="transaction-amount negative">-$78</div>
              </div>

              <div className="transaction-item">
                <div className="transaction-icon">
                  <i className="fas fa-tshirt"></i>
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Retail Purchase</div>
                  <div className="transaction-time">
                    <i className="far fa-clock"></i> Yesterday, 16:08
                  </div>
                </div>
                <div className="transaction-amount negative">-$125</div>
              </div>
            </div>

            <div className="transaction-card">
              <h3 className="section-title">Your Connections</h3>

              <div className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="Lisa Johnson"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Lisa Johnson</div>
                  <div className="transaction-time">
                    <i className="far fa-clock"></i> Today, 09:35
                  </div>
                </div>
                <div className="transaction-amount positive">+$85</div>
              </div>

              <div className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src="https://i.pravatar.cc/100?img=11"
                    alt="Michael Torres"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Michael Torres</div>
                  <div className="transaction-time">
                    <i className="far fa-clock"></i> Monday, 17:45
                  </div>
                </div>
                <div className="transaction-amount negative">-$42</div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Dashboard Sidebar --> */}
        <div className="dashboard-sidebar">
          <div className="savings-card">
            <h3 className="savings-title">Monthly Savings</h3>
            <div className="savings-amount">$467.5</div>

            <div className="time-filter">
              <button className="time-option">Daily</button>
              <button className="time-option">Weekly</button>
              <button className="time-option active">Monthly</button>
              <button className="time-option">Annual</button>
            </div>

            <div className="chart-container">
              <svg
                className="chart"
                viewBox="0 0 300 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="gradientFill"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#4270F4" stop-opacity="0.7" />
                    <stop
                      offset="100%"
                      stop-color="#4270F4"
                      stop-opacity="0.1"
                    />
                  </linearGradient>
                </defs>
                <path
                  className="chart-line-path"
                  d="M0,80 C20,70 40,30 60,60 C80,90 100,40 120,30 C140,20 160,50 180,20 C200,30 220,60 240,80 C260,60 280,40 300,60"
                ></path>
                <path
                  className="chart-area"
                  d="M0,80 C20,70 40,30 60,60 C80,90 100,40 120,30 C140,20 160,50 180,20 C200,30 220,60 240,80 C260,60 280,40 300,60 L300,100 L0,100 Z"
                ></path>
                <circle
                  cx="180"
                  cy="20"
                  r="6"
                  fill="#4270F4"
                  stroke="#ffffff"
                  stroke-width="3"
                />
              </svg>
            </div>

            <div className="timeline">
              <div className="month">Oct</div>
              <div className="month">Nov</div>
              <div className="month active">Dec</div>
              <div className="month">Jan</div>
              <div className="month">Feb</div>
              <div className="month">Mar</div>
            </div>
          </div>

          <div className="plan-card">
            <div className="plan-info">
              <div className="plan-title">Budget Goal Q1 2025</div>
              <div className="plan-status">On Track</div>
            </div>

            <div className="plan-progress">
              <div className="plan-percentage">68%</div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default VendorDashboard;
