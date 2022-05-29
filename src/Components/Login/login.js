import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import bg from "../../Assets/christopher-gower-m_HRfLhgABo-unsplash.jpg";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const Login = () => {
//   const dispatch = useDispatch();
//   const alert = useAlert();
//   const navigate = useNavigate();


  const [user, setUser] = useState({
    name: "",
    MobileNo: "",
    TableNo: "",
  });

//   const detailsDataChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };
//   const detailsSubmit = (e) => {
//     e.preventDefault();

//     const myForm = {
//       name: name,
//       MobileNo: MobileNo,
//       TableNo: TableNo,
//     };
//     dispatch(register(myForm));
//   };

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }

//     if (isRegistered) {
//       navigate("/home");
//     }
//   }, [dispatch, error, alert, navigate, isRegistered]);

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.leftContainer}>
        <img src={bg} alt="Rise n Dine"></img>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rightWrapper}>
          <div className={styles.heading}>
            <h2>Sign In</h2>
          </div>
          <form
            className={styles.detailsForm}
            encType="multipart/form-data"
            // onSubmit={detailsSubmit}
          >
            <div className={styles.loginEmail}>
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                // value={loginEmail}
                // onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className={styles.loginPassword}>
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                // value={loginPassword}
                // onChange={(e) => setLoginPassword(e.target.value)}
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
