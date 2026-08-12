import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Auth.css";
import { ToastContainer, toast } from "react-toastify";

const Register = ({ userInfo, setUserInfo }) => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordText =
    userInfo.password &&
    (userInfo.password.length < 6
      ? "Weak Password"
      : userInfo.password.length < 8
        ? "Medium Password"
        : "Strong Password");
  const passwordColor =
    userInfo.password.length < 6
      ? "red"
      : userInfo.password.length < 8
        ? "orange"
        : "green";
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  function signUp() {
    let newErrors = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    };
    if (userInfo.username.trim() === "") {
      newErrors.username = "Username is required";
    }
    if (userInfo.password.trim() === "") {
      newErrors.password = "Password is required";
    }
    if (userInfo.confirmPassword.trim() === "") {
      newErrors.confirmPassword = "ConfirmPassword is required";
    }
    if (userInfo.email.trim() === "") {
      newErrors.email = "Email is required";
    }
    setErrors(newErrors);

    if (
      newErrors.username ||
      newErrors.password ||
      newErrors.confirmPassword ||
      newErrors.email
    ) {
      return;
    }

    toast.success("Account Created Successfully");
  }

  function registerChangeHandler(event) {
    const { name, value } = event.target;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setErrors((prev) => {
      return {
        ...prev,
        [name]: "",
      };
    });
  }

  return (
    <div className="login-layout">
      <div className="login-card">
        <h3>Welcome ! Create An Account</h3>
        <div className="form-group">
          <div className="login-input-container">
            <label>User Name</label>
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Enter your username"
              value={userInfo.userName}
              name="username"
              onChange={registerChangeHandler}
              className={errors.username ? "input error-input" : "input"}
            ></input>
          </div>
          <p className="error1">{errors.username}</p>
        </div>
        <div className="form-group">
          <div className="login-input-container">
            <label>Password</label>
            <RiLockPasswordFill className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="*******"
              value={userInfo.password}
              name="password"
              onChange={registerChangeHandler}
              className={errors.password ? "input error-input" : "input"}
            ></input>
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <p className="error1">{errors.password}</p>
          <p
            style={{
              color: passwordColor,
            }}
            className="password-strength"
          >
            {passwordText}
          </p>
        </div>
        <div className="form-group">
          <div className="login-input-container">
            <label>Confirm Password</label>
            <RiLockPasswordFill className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="*******"
              value={userInfo.confirmPassword}
              name="confirmPassword"
              onChange={registerChangeHandler}
              className={errors.confirmPassword ? "input error-input" : "input"}
            ></input>
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {userInfo.confirmPassword &&
            (userInfo.password === userInfo.confirmPassword ? (
              <p className="success">PassWord Matched</p>
            ) : (
              <p className="error1">PassWord Doesn't Match</p>
            ))}
          <p className="error1">{errors.confirmPassword}</p>
        </div>
        <div className="form-group">
          <div className="login-input-container">
            <label>Email</label>
            <MdEmail className="input-icon" />
            <input
              type="email"
              placeholder="abc@gmail.com"
              value={userInfo.email}
              name="email"
              onChange={registerChangeHandler}
              className={errors.email ? "input error-input" : "input"}
            ></input>
          </div>
          <p className="error1">{errors.email}</p>
        </div>
        <button onClick={signUp}>Sign Up</button>
        <p>
          Already have an account?
          <Link className="sign-up" to="/">
            {" "}
            Sign In
          </Link>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Register;
