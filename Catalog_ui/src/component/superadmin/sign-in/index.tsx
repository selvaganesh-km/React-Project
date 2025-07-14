import React from 'react'
import { useNavigate } from 'react-router-dom'
import Inputs, { InputsOne } from '../../../common/Inputs'

function SignForm() {
    const navigate=useNavigate()
  return (
    <div>
        <form id="loginForm" className="loginForm">
          <div className="animate-label">
            <input className="loginInput" autoComplete='off' type="text" id="username" required />
            <label htmlFor="username"><i className="fa-solid fa-envelope"></i> Email</label>
            <line></line>
          </div>
          <div className="animate-label">
            {/* <Inputs label="Password" icon="fa-solid fa-lock"/> */}
            {/* <Inputs label="Username" icon="fa-solid fa-file-signature"/> */}
            <InputsOne label="Name" icon="fa-solid fa-file-signature"/>
          </div>

          <div className="animate-label mb-3">
            <input
              className="loginInput"
              type="password"
              id="password"
              autoComplete='off'
              required
            />
            <label htmlFor="password"><i className="fa-solid fa-lock"></i> Password </label>
            <line></line>
          </div>

          <a href="#" className='text-end '> Forgot Password? </a>

          <div className="flex justify-content-center">
            <button className="loginBtn" onClick={()=>navigate("/superAdmin/dashboard")}> LOGIN </button>
          </div>
        </form>
    </div>
  )
}

export default SignForm