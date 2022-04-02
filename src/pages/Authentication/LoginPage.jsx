import { Link } from "react-router-dom";

import "./login.css";

const LoginPage = () => {
  return (
    <main className="form-container">
      <h4 className="h4">LOGIN</h4>
      <form action="" className="flex-col">
        <input
          type="email"
          className="input-field my-5"
          placeholder="Enter your email here"
          required
        />
        <div className="my-5 hide-pswrd">
          <input
            type="password"
            className="input-field"
            placeholder="Enter password"
            required
            maxlength="20"
            minlength="6"
          />
          <span>
            <i className="fa fa-eye-slash"></i>
          </span>
        </div>
        <div className="forgot-pwd-row my-5">
          <div className="remember-chkbox">
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label for="remember-me" className="mx-2">
              Remember Me
            </label>
          </div>
          <button className="button button-primary button-link">
            Forgot Password?
          </button>
        </div>
        <button className="button button-primary btn-solid login-btn">Login</button>
        <div className="signup-msg my-5">
          Not a user yet?{" "}
          <Link to="/signup"
            href=""
            className="button button-primary button-link create-acc-btn"
          >
        Create an account here
          </Link>
          .
        </div>
        <div className="signup-msg my-5">
          <Link to="/"
            className="button button-secondary btn-outline"
          >
            Go to Logout page
          </Link>
        </div>
      </form>
    </main>
  );
};

export { LoginPage };
