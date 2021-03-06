import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts";
import { signupFunc } from "../../utilities";

import "./signup.css";

const SignupPage = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const redirect = useNavigate();
  const { setAuth } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);
  const [signupError, setSignupError] = useState("");

  const signupSubmitHandler = async (user) => {
    const {
      encodedToken,
      createdUser: { notes, archives, ...userDetails },
    } = await signupFunc(user);
    try {
      if (encodedToken) {
        localStorage.setItem("SCRIPTUS_AUTH_TOKEN", encodedToken);
        localStorage.setItem("scriptus_user", JSON.stringify(userDetails));
        setAuth({
          isAuth: true,
          token: encodedToken,
          user: { ...userDetails },
        });
        redirect("/addnote");
      } else {
        throw new Error("Signup failed");
      }
    } catch (error) {
      setSignupError(error.message);
    }
  };

  return (
    <main className="form-container">
      <h4 className="h4">SIGN UP</h4>
      <p className="my-5">
        Signing Up will give you access to special discounts right in your email
        inbox!
      </p>
      <form
        className="flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          signupSubmitHandler(user);
        }}
      >
        <div className="form-row flex">
          <label htmlFor="firstname" className="input-label input-required">
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            className="input-field my-5"
            placeholder="Enter your first name here"
            required
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </div>
        <div className="form-row flex">
          <label htmlFor="lastname" className="input-label input-required ">
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            className="input-field my-5"
            placeholder="Enter your last name here"
            required
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>
        <div className="form-row flex">
          <label htmlFor="email-id" className="input-label input-required ">
            Email address
          </label>
          <input
            id="email-id"
            type="email"
            className="input-field my-5"
            placeholder="Enter your email here"
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="form-row flex">
          <label className="input-label input-required" htmlFor="password">
            Password
          </label>
          <div className="my-5 hide-pswrd">
            <input
              type={`${passwordVisible ? "text" : "password"}`}
              className="input-field"
              placeholder="Enter password"
              required
              maxLength="20"
              minLength="6"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button
              className="hide-pass-btn"
              onClick={(e) => {
                e.preventDefault();
                setPasswordVisible(!passwordVisible);
              }}
            >
              {passwordVisible ? (
                <i className="fa fa-eye-slash"></i>
              ) : (
                <i className="fa fa-eye"></i>
              )}
            </button>
          </div>
        </div>
        <div className="form-row flex">
          <label className="input-label input-required" htmlFor="password">
            Confirm Password
          </label>
          <div className="my-5 hide-pswrd">
            <input
              type={`${confirmPassVisible ? "text" : "password"}`}
              className="input-field"
              placeholder="Re-enter password"
              required
              maxLength="20"
              minLength="6"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
            <button
              className="hide-pass-btn"
              onClick={(e) => {
                e.preventDefault();
                setConfirmPassVisible(!confirmPassVisible);
              }}
            >
              {confirmPassVisible ? (
                <i className="fa fa-eye-slash"></i>
              ) : (
                <i className="fa fa-eye"></i>
              )}
            </button>
          </div>
        </div>
        <div className="forgot-pwd-row my-5">
          <div className="remember-chkbox">
            <input type="checkbox" id="accept-conditions" required/>
            <label htmlFor="accept-conditions" className="mx-2">
              I accept the terms and conditions.
            </label>
          </div>
        </div>
        {user.password !== user.confirmPassword && (
          <p className="my-5 pswrd-match">Passwords don't match</p>
        )}
        <button
          className="button button-primary btn-solid login-btn"
          disabled={user.password !== user.confirmPassword}
        >
          Sign Up
        </button>
        {signupError !== "" && <p className="pswrd-match">{signupError}</p>}
        <div className="signup-msg my-5">
          Already a user?{" "}
          <Link to="/login" className="button button-primary button-link">
            Login here
          </Link>
          .
        </div>
      </form>
    </main>
  );
};

export { SignupPage };
