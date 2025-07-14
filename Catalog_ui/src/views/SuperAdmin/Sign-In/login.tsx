import React, { useEffect, useState } from 'react'
import './login.css'
import SignUp from "../../../assets/img/sign-upImg1.png";
import SignIn from "../../../assets/img/sign-inImg.png";
import Inputs from '../../../common/Inputs';

function Login() {
    const [submit, setSubmit] = useState(false);
    const EMAIL_VALIDATION_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
    // sign in
    const [userName,setuserName]=useState("");
    const [password,setpassword]=useState("");
    const [signInPassword, setsignInPassword] = useState(false);

    //sign up
    const [regsubmit, setregSubmit] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyPhone, setCompanyPhone] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [vendorUserName, setVendorUserName] = useState('');
    const [vendorPassword, setVendorPassword] = useState('');
    const [vendorCPassword, setVendorCPassword] = useState('');
    const [vendorEmail, setVendorEmail] = useState('');
    const [vendorPhone, setVendorPhone] = useState('');
    const [vendorFName, setVendorFName] = useState('');
    const [vendorLName, setVendorLName] = useState('');
    const [signUpPassword, setsignUpPassword] = useState(false);
    const [signUpConfPassword, setsignUpConfPassword] = useState(false);
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [step, setStep] = useState(1);
    const totalSteps = 3;
    const handlePhoneChange = (e: { target: { value: string } }) => {
        let value = e.target.value;
        if (value === "" || /^\+?[0-9]*$/.test(value)) {
           setCompanyPhone(value);
        }
     };
     const handleVendorPhoneChange = (e: { target: { value: string } }) => {
        let value = e.target.value;
        if (value === "" || /^\+?[0-9]*$/.test(value)) {
           setVendorPhone(value);
        }
     };
    const handleNext = () => {
        setregSubmit(true);
        if (!companyName || !companyAddress || !companyEmail || !companyPhone || !companyType) {
            return;
         }
        if (step < totalSteps) {
          setStep(step + 1);
          setCurrentStep(Math.min(currentStep + 1, totalSteps));
        }
      };
    const handleNext1 = () => {
        if (step < totalSteps) {
            setStep(step + 1);
            setCurrentStep(Math.min(currentStep + 1, totalSteps));
          }
    }
    const handleBack = () => {
        if (step > 1) {
          setStep(step - 1);
          setCurrentStep(Math.max(currentStep - 1, 1));
        }
      };
    const handleBack1 = () => {
        if (step > 1) {
            setStep(step - 1);
            setCurrentStep(Math.max(currentStep - 1, 1));
          }
    }
    const progressWidth = `${((currentStep - 1) / (totalSteps - 1)) * 100}%`;
    const handleLogin=(e:any)=>{
        e.preventDefault();
        setSubmit(true);
        if(!userName || !password){
            return
        }
    }
    const stepLabels = [
        <>
          <i className="fa-solid fa-user-plus" style={{ marginRight: '2px' }}></i>SIGN UP
        </>,
        <>
          <i className="fa-solid fa-user-tie" style={{ marginRight: '2px' }}></i>VENDOR ADMIN USER
        </>,
        <>
          <i className="fa-solid fa-lock" style={{ marginRight: '2px' }}></i>PASSWORD
        </>
      ];
      
    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".login-container");
    
        if (sign_in_btn && sign_up_btn && container) {
          sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
          });
    
          sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
          });
        }
    
        return () => {
          if (sign_up_btn && sign_in_btn) {
            sign_up_btn.removeEventListener("click", () => {});
            sign_in_btn.removeEventListener("click", () => {});
          }
        };
      }, []);
  return (
    <>
    <div className="login-container">
		<div className="forms-container">
			<div className="signin-signup">

                {/* Sign In */}
			<form action="#" className="sign-in-form" id='signIn-form'>
					<h4 className="login-title">SIGN IN</h4>
                    <div className="input-wrapper">
					<div className={`input-field ${submit && !userName ? 'error' : ''}`}>
						<i className={`fas fa-user ${submit && !userName ? 'error' : ''}`}></i>
						<input type="text" placeholder="Username" onChange={(e)=>setuserName(e.target.value)}/>
					</div>
                    {submit && userName.length === 0 && (<div className="error-text">Username is required</div>)}
                    <div
                        className={`input-field ${submit && !password ? 'error' : ''} password-field`}
                    >
                        <i className={`fas fa-lock ${submit && !password ? 'error' : ''}`}></i>
                        <input
                            type={signInPassword ? "text" : "password"}
                            placeholder="Password"
                            name="new-password"
                            autoComplete="new-password"
                            onChange={(e)=>setpassword(e.target.value)}
                        />
                        <i
                            className={`fas ${signInPassword ? "fa-eye-slash" : "fa-eye"} toggle-password`}
                            onClick={() => setsignInPassword(!signInPassword)}
                        ></i>
                    </div>
                    {submit && password.length === 0 && (<div className="error-text">Password is required</div>)}
                </div>
                <button className="btn-alpha mt-2 text-end" onClick={handleLogin}>Sign In</button>
			</form>


            {/* Sign Up */}
			<form action="#" className="sign-up-form" id="signIn-form">
                <div className="wizard-header mb-5">
                <div className="progress-container">
                    <div className="progress" style={{ width: progressWidth }}></div>
                    {stepLabels.map((label, idx) => (
                    <div
                        key={idx}
                        className={`circle ${idx < currentStep ? 'active' : ''}`}
                    >
                        <div className="step-number">{idx + 1}</div>
                        <div className={`step-label ${idx < currentStep ? 'active' : ''}`}>{label}</div>
                    </div>
                    ))}
                </div>
                </div>

                {step === 1 && (
                    <>
                    <div className="input-wrapper">
                        <div className={`input-field ${regsubmit && !companyName ? 'error' : ''}`}>
                            <i className={`fa-solid fa-building ${regsubmit && !companyName ? 'error' : ''}`}></i>
                            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company Name" />
                        </div>
                        {regsubmit && companyName.length === 0 && (<div className="error-text">Company name is required</div>)}
                        <div className={`input-field ${regsubmit && !companyType ? 'error' : ''}`}>
                            <i className={`fa-solid fa-layer-group ${regsubmit && !companyType ? 'error' : ''}`}></i>
                            <input type="text" value={companyType} onChange={(e) => setCompanyType(e.target.value)} placeholder="Category Type" />
                        </div>
                        {regsubmit && companyType.length === 0 && (<div className="error-text">Company type is required</div>)}
                        <div className={`input-field ${regsubmit && !companyAddress ? 'error' : ''}`}>
                            <i className={`fa-solid fa-location-dot ${regsubmit && !companyAddress ? 'error' : ''}`}></i>
                            <input type="text" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} placeholder="Address" />
                        </div>
                        {regsubmit && companyAddress.length === 0 && (<div className="error-text">Company address is required</div>)}
                        <div className={`input-field ${regsubmit && !companyPhone || companyPhone.length > 0 && companyPhone.length < 10 ? 'error' : ''}`}>
                            <i className={`fa-solid fa-mobile-screen ${regsubmit && !companyPhone || companyPhone.length > 0 && companyPhone.length < 10 ? 'error' : ''}`}></i>
                            <input type="text" value={companyPhone} onChange={handlePhoneChange} placeholder="Mobile.no" />
                        </div>
                        {regsubmit && companyPhone.length === 0 && (<div className="error-text">Company mobile.no is required</div>)}
                        {companyPhone.length < 10 && companyPhone.length > 0 && (<div className="error-text">Mobile.no should be at least 10 digits</div>)}
                        <div className={`input-field ${(regsubmit && !companyEmail) || (companyEmail.length > 0 && !EMAIL_VALIDATION_REGEX.test(companyEmail))? 'error' : ''}`}>
                        <i className={`fas fa-envelope ${(regsubmit && !companyEmail) || (companyEmail.length > 0 && !EMAIL_VALIDATION_REGEX.test(companyEmail))? 'error': ''}`}></i>
                            <input type="email" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} placeholder="Email" />
                        </div>
                        {regsubmit && companyEmail.length === 0 && (<div className="error-text">Company email is required</div>)}
                        {companyEmail.length > 0 && !EMAIL_VALIDATION_REGEX.test(companyEmail) && (<div className="error-text">Invalid email format</div>)}
                        </div>
                        <button type="button" className="btn-alpha mt-2 mb-2" onClick={handleNext}>
                            Next <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="input-field">
                            <i className="fa-solid fa-signature"></i>
                            <input type="text" onChange={(e) => setVendorUserName(e.target.value)} placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" onChange={(e) => setVendorFName(e.target.value)} placeholder="Firstname" />
                        </div>
                        <div className="input-field">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" onChange={(e) => setVendorLName(e.target.value)} placeholder="Lastname" />
                        </div>
                        <div className="input-field">
                            <i className="fa-solid fa-mobile-screen"></i>
                            <input type="text" onChange={(e) => setVendorPhone(e.target.value)} placeholder="Mobile.no" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" onChange={(e) => setVendorEmail(e.target.value)} placeholder="Email" />
                        </div>
                        
                        <div className="btn-group mb-2">
                        <button type="button" className="btn-alpha mt-2" onClick={handleBack}>
                        <i className="fa-solid fa-chevron-left"></i> Back
                            </button> &nbsp;&nbsp;&nbsp;
                            <button type="button" className="btn-alpha mt-2" onClick={handleNext1}>
                            Next <i className="fa-solid fa-chevron-right"></i>
                            </button> 
                        </div>
                    </>
                )}
                {step === 3 && (
                    <>
                        <div className="input-field password-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type={signUpPassword ? 'text' : 'password'}
                                placeholder="Password"
                                name="new-password"
                                autoComplete="new-password"
                                onChange={(e) => setVendorPassword(e.target.value)}
                            />
                            <i
                                className={`fas ${signUpPassword ? 'fa-eye-slash' : 'fa-eye'} toggle-password`}
                                onClick={() => setsignUpPassword(!signUpPassword)}
                            ></i>
                        </div>
                        <div className="input-field password-field ">
                            <i className="fas fa-lock"></i>
                            <input
                                type={signUpConfPassword ? 'text' : 'password'}
                                placeholder="Confirm Password"
                                name="new-password"
                                autoComplete="new-password"
                                onChange={(e) => setVendorCPassword(e.target.value)}
                            />
                            <i
                                className={`fas ${signUpConfPassword ? 'fa-eye-slash' : 'fa-eye'} toggle-password`}
                                onClick={() => setsignUpConfPassword(!signUpConfPassword)}
                            ></i>
                        </div>
                        <div className="input-field password-field border-0"> 
                        </div>
                        <div className="input-field password-field border-0"> 
                        </div>
                        <div className="input-field password-field border-0"> 
                        </div>

                        <div className="btn-group mb-2">
                            <button type="button" className="btn-alpha mt-2" onClick={handleBack1}>
                                Back
                            </button> &nbsp;&nbsp;&nbsp;
                            <button type="submit" className="btn-alpha mt-2">
                                Sign Up
                            </button>
                        </div>
                        </>
                        )}
            </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New to our community ?</h3>
                        <p>
                            Discover a world of possibilities! Join us and explore a vibrant
                            community where ideas flourish and connections thrive.
                        </p>
                        <button className="login-btn transparent mb-3" id="sign-up-btn">
                            Sign up
                        </button>
                    </div>
                    <img  src={SignUp} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of Our Valued Vendor</h3>
                        <p>
                            Thank you for being part of our community. Your presence enriches our
                            shared experiences. Let's continue this journey together!
                        </p>
                        <button className="login-btn transparent mb-3" id="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <img src={SignIn}  className="image" alt="" />
                </div>
            </div>
	    </div>
    </>
  )
}

export default Login