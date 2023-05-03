import React from 'react'

import { Helmet } from 'react-helmet'

import './dashboard.css'

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - Logintest</title>
        <meta property="og:title" content="Dashboard - Logintest" />
      </Helmet>
      <div className="dashboard-container1">
        <div className="dashboard-container2">
          <div className="dashboard-container3">
            <div className="dashboard-container4">
              <img
                alt="image"
                src="/playground_assets/up2datalogo%20%5B1%5D-1500h.png"
                className="dashboard-image"
              />
            </div>
            <span className="dashboard-text">Up2Data</span>
          </div>
          <div className="dashboard-container5">
            <span className="dashboard-text1">Search...</span>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="dashboard-icon"
            >
              <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
            </svg>
          </div>
        </div>
        <div className="dashboard-container6">
          <div className="dashboard-container7">
            <span className="dashboard-text2">Overview</span>
            <span>Lets see an overview</span>
          </div>
          <div className="dashboard-container8"></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
