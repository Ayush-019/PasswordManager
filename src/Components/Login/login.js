import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import bg from "../../Assets/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { useAlert } from "react-alert";
import { login, clearErrors } from "../../Redux/Actions/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.user);

  const detailsSubmit = (e) => {
    e.preventDefault();

    const myForm = {
      email,
      password,
    };
    dispatch(login(myForm));
  };

  useEffect(() => {
    if (user?.error) {
      alert.error(user?.error);
      dispatch(clearErrors());
    }

    if (user?.isAuthenticated) {
      navigate("/home");
    }
  }, [dispatch, alert, navigate, user]);

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.leftContainer}>
        <img src={bg} alt="Password Manager"></img>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rightWrapper}>
          <div className={styles.heading}>
            <h2>Sign In</h2>
          </div>
          <form
            className={styles.detailsForm}
            encType="multipart/form-data"
            onSubmit={detailsSubmit}
          >
            <div className={styles.loginEmail}>
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.loginPassword}>
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <input type="submit" value="Submit" className={styles.submitbtn} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
