import { Link } from "react-router-dom";

import "./signup.css";

const SignupPage = () => {
    return(
        <main class="form-container">
        <h4 class="h4">SIGN UP</h4>
        <p class="my-5">Signing Up will give you access to special discounts right in your email inbox!</p>
        <form action="" class="flex-col">
            <div class="form-row flex">
                <label for="firstname" class="input-label input-required ">First Name</label>
                <input id="firstname" type="text" class="input-field my-5" placeholder="Enter your first name here"
                    required />
            </div>
            <div class="form-row flex">
                <label for="lastname" class="input-label input-required ">Last Name</label>
                <input id="lastname" type="text" class="input-field my-5" placeholder="Enter your last name here"
                    required />
            </div>
            <div class="form-row flex">
                <label for="email-id" class="input-label input-required ">Email address</label>
                <input id="email-id" type="email" class="input-field my-5" placeholder="Enter your email here" required />
            </div>
            <div class="form-row flex">
                <label class="input-label input-required ">Password</label>
                <div class="my-5 hide-pswrd">
                    <input type="password" class="input-field" placeholder="Enter password" required maxlength="20"
                        minlength="6" />
                    <span><i class="fa fa-eye-slash"></i></span>
                </div>
            </div>
            <button class="button button-primary btn-solid login-btn">Sign Up</button>
            <div class="signup-msg my-5">Already a user?{" "}
                <Link to="/login" class="button button-primary button-link">
                    Login here
                </Link>.
            </div>
        </form>
    </main>
    )
}; 

export { SignupPage };