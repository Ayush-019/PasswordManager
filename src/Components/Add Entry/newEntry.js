import React, { Fragment, useEffect, useState } from "react";
import styles from "./newEntry.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { clearErrors, createEntry } from "../../Redux/Actions/entryAction";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";


const NewEntry= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const alert  = useAlert();

  const [username, setUserName] = useState("");
  const [sitename, setSiteName] = useState("");
  const [password, setPassword] = useState("");

  const entry = useSelector((state) => state.entry);

    useEffect(() => {
      if (entry?.error) {
        alert.error(entry?.error);
        dispatch(clearErrors());
      }

      if (entry?.success) {
        alert.success("Entry added Successfully");
        navigate("/");
        entry.success = false;
      }
    }, [dispatch, alert, entry,navigate]);

  const createEntrySubmitHandler = (e) => {
    e.preventDefault();

    const myForm = {
      username,
      sitename,
      password,
    };
    dispatch(createEntry(myForm));
  };

  return (
    <Fragment>
      <div className={styles.newEntryWrapper}>
        <div className={styles.newEntryContainer}>
          <form
            className={styles.createEntryForm}
            encType="multipart/form-data"
            onSubmit={createEntrySubmitHandler}
          >
            <h1>Add Entry</h1>

            <div>
              <DescriptionIcon />

              <input
                placeholder="Site Name"
                value={sitename}
                onChange={(e) => setSiteName(e.target.value)}
                cols="30"
                rows="1"
              ></input>
            </div>
            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <LockOpenIcon />
              <input
                type="text"
                placeholder="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button id={styles.createEntryBtn} type="submit">
              ADD Entry
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewEntry;
