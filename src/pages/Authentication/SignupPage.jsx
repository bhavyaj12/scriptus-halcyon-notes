import { Link } from "react-router-dom";

import "./signup.css";

const SignupPage = () => {
    return(
        <main className="form-container">
        <h4 className="h4">SIGN UP</h4>
        <p className="my-5">Signing Up will give you access to special discounts right in your email inbox!</p>
        <form action="" className="flex-col">
            <div className="form-row flex">
                <label htmlFor="firstname" className="input-label input-required ">First Name</label>
                <input id="firstname" type="text" className="input-field my-5" placeholder="Enter your first name here"
                    required />
            </div>
            <div className="form-row flex">
                <label htmlFor="lastname" className="input-label input-required ">Last Name</label>
                <input id="lastname" type="text" className="input-field my-5" placeholder="Enter your last name here"
                    required />
            </div>
            <div className="form-row flex">
                <label htmlFor="email-id" className="input-label input-required ">Email address</label>
                <input id="email-id" type="email" className="input-field my-5" placeholder="Enter your email here" required />
            </div>
            <div className="form-row flex">
                <label className="input-label input-required ">Password</label>
                <div className="my-5 hide-pswrd">
                    <input type="password" className="input-field" placeholder="Enter password" required maxLength="20"
                        minLength="6" />
                    <span><i className="fa fa-eye-slash"></i></span>
                </div>
            </div>
            <button className="button button-primary btn-solid login-btn">Sign Up</button>
            <div className="signup-msg my-5">Already a user?{" "}
                <Link to="/login" className="button button-primary button-link">
                    Login here
                </Link>.
            </div>
        </form>
    </main>
    )
}; 

export { SignupPage };