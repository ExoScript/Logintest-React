import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './login-box.css'

const LoginBox = (props) => {
  const [usernameIsVisible, setUsernameIsVisible] = useState(false)
  return (
    <div className={`login-box-login-box ${props.rootClassName} `}>
      <div className="login-box-container">
        <span className="login-box-text">Login</span>
      </div>
      <div className="login-box-container01">
        <div className="login-box-container02">
          <span className="login-box-text1">Log in </span>
          <div className="login-box-container03">
            <span className="login-box-text2">New to Up2Data?</span>
            <span className="login-box-text3">Contact us now</span>
          </div>
        </div>
        <div className="login-box-container04">
          <div className="login-box-container05">
            <div className="login-box-container06">
              <svg viewBox="0 0 1024 1024" className="login-box-icon">
                <path
                  d="M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="login-box-container07">
              <svg viewBox="0 0 1024 1024" className="login-box-icon2">
                <path
                  d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
          <div className="login-box-container08">
            <div className="login-box-container09"></div>
            <span className="login-box-text4">or</span>
            <div className="login-box-container10"></div>
          </div>
        </div>
        <div className="login-box-container11">
          <div className="login-box-user-email">
            <input
              type="text"
              placeholder="Email"
              className="login-box-textinput input"
            />
          </div>
          <div className="login-box-password">
            <input
              type="password"
              placeholder="Password"
              className="login-box-textinput1 input"
            />
            <span className="login-box-text5">Forget your password?</span>
          </div>
        </div>
        <div className="login-box-container12">
          <span className="login-box-text6">Login</span>
        </div>
      </div>
    </div>
  )
}

LoginBox.defaultProps = {
  rootClassName: '',
  text: 'or',
  text1: 'Text',
}

LoginBox.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default LoginBox
