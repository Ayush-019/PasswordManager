import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import styles from "./list.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  getAllEntries,
  clearErrors,
  deleteEntry,
} from "../../Redux/Actions/entryAction";

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

  const addEntryHandler = () => {
    navigate("/newentry");
    dispatch(getAllEntries());
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
      headerName: "S No.",
      minWidth: 50,
      flex: 0.3,
    },

    {
      field: "sitename",
      headerName: "Site Name",
      minWidth: 250,
      flex: 0.9,
    },
    {
      field: "username",
      headerName: "Username",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "password",
      headerName: "Password",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
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
    entries.forEach((entry) => {
      rows.push({
        id: entry.id,
        username: entry.username,
        password: entry.password,
        sitename: entry.sitename,
      });
    });

  return (
    <Fragment>
      <div className={styles.entriesWrapper}>
        <div className={styles.entriesContainer}>
          <h1 id={styles.entriesHeading}>ALL Entries</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className={styles.entriesListTable}
            autoHeight
          />
        </div>
      </div>

      <div className={styles.btn}>
        <button className={styles.addButton} onClick={addEntryHandler}>
          Add New Entry
        </button>
      </div>
    </Fragment>
  );
};

export default List;
