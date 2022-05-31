import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./list.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LogoutIcon from "../../Assets/logout.png";
import {
  getAllEntries,
  clearErrors,
  deleteEntry,
} from "../../Redux/Actions/entryAction";
import { logout } from "../../Redux/Actions/userAction";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const allentries = useSelector((state) => state.allentries);
  const error = allentries?.error;
  const entries = allentries?.entries;
  const deleteentryrow = useSelector((state) => state.deleteentry);

  const deleteProductHandler = (id) => {
    dispatch(deleteEntry(id));
    if (deleteentryrow?.success) {
      alert.success("Entry Deleted Successfully");
      dispatch(getAllEntries());
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
    alert.success("Logged Out Successfully");
  };

  const addEntryHandler = () => {
    navigate("/newentry");
    dispatch(getAllEntries());
  };

  const [val, setVal] = useState([]);

  useEffect(() => {
    if (entries) {
      setVal(new Array(entries.length).fill(false));
    }
  }, [entries]);

  const clickHanler = (id) => {
    entries &&
      setVal((val) => {
        const newVal = [...val];
        let elementIndex = entries.findIndex((el) => el.id === id);
        newVal[elementIndex] = !val[elementIndex];
        return newVal;
      });
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteentryrow?.error) {
      alert.error(deleteentryrow?.error);
      dispatch(clearErrors());
    }

    dispatch(getAllEntries());
  }, [dispatch, alert, error, deleteentryrow]);

  const columns = [
    {
      field: "id",
      type: "number",
      headerName: "SNo.",
      // minWidth: 100,
      flex: 0.5,
      headerAlign: "left",
      align: "left",
    },

    {
      field: "sitename",
      headerName: "Site Name",
      // minWidth: 250,
      flex: 0.7,
    },
    {
      field: "username",
      headerName: "Username",
      type: "password",
      // minWidth: 150,
      flex: 0.7,
    },

    {
      field: "password",
      headerName: "Password",
      // minWidth: 270,
      flex: 0.7,
    },
    {
      field: "showPassword",
      headerName: "show Password",
      // minWidth: 270,
      flex: 0.6,
      renderCell: (params) => {
        return (
          <Button
            id="myButton"
            onClick={() => clickHanler(params.getValue(params.id, "id"))}
          >
            <VisibilityIcon />
          </Button>
          // <Fragment>
          //   <input
          //     type="button"
          //     id="myButton"
          //     value="Show Password"
          //     onClick={() => clickHanler(params.getValue(params.id, "id"))}
          //   ></input>
          // </Fragment>
        );
      },
    },

    {
      field: "actions",
      flex: 0.7,
      headerName: "Actions",
      // minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/updateentry/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  // console.log(entry);
  entries &&
    entries.forEach((entry, index) => {
      rows.push({
        id: entry.id,
        username: entry.username,
        password: val[index] ? entry.password : "********",
        sitename: entry.sitename,
      });
    });

  return (
    <div className="entriesWrapper">
      <div className="entriesContainer">
        <div>
          <img
            id="logout"
            src={LogoutIcon}
            alt="logout"
            onClick={logoutHandler}
          />
        </div>

        <div className="entriesHeadingBox">
          <h1 id="entriesHeading">ALL Entries</h1>
        </div>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          className="entriesListTable"
          autoHeight
        />
      </div>

      <div className="btn">
        <button className="addButton" onClick={addEntryHandler}>
          Add New Entry
        </button>
      </div>
    </div>
  );
};

export default List;
