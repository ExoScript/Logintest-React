import React from 'react'

import { Helmet } from 'react-helmet'

import LoginBox from '../components/login-box'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Logintest</title>
        <meta property="og:title" content="Logintest" />
      </Helmet>
      <div className="login-container1">
        <div className="login-container2">
          <img
            src="/playground_assets/up2datalogo%20%5B1%5D-200h.png"
            alt="image"
            className="login-image"
          />
        </div>
        <span className="login-text">Up2Data</span>
      </div>
      <div className="login-container3">
        <LoginBox rootClassName="login-box-root-class-name"></LoginBox>
      </div>
      <div className="login-container4">
        <span className="login-text1">
          Copyright © 2023 LottieFiles by Design Barn Inc. All rights reserved.
        </span>
      </div>
    </div>
  )
}

export default Login
