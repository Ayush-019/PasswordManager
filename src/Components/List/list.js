import React, { Fragment, useEffect,useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import styles from "./list.css";
// import { useSelector, useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
// import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const List = ({ history }) => {

 

  // const navigate = useNavigate();
  //   const dispatch = useDispatch();

  //   const alert = useAlert();

  //   const deleteProductHandler = (id) => {
  //     dispatch(deleteProduct(id));
  //   };

    const addEntryHandler = (id) => {
      // dispatch(deleteProduct(id));
      // navigate('/newentry');
    };
  //   useEffect(() => {
  //     if (error) {
  //       alert.error(error);
  //       dispatch(clearErrors());
  //     }

  //     if (deleteError) {
  //       alert.error(deleteError);
  //       dispatch(clearErrors());
  //     }

  //     if (isDeleted) {
  //       alert.success("Product Deleted Successfully");
  //       history.push("/admin/dashboard");
  //       dispatch({ type: DELETE_PRODUCT_RESET });
  //     }

  //     dispatch(getProductAdmin());
  //   }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "id", headerName: "S No.", minWidth: 50, flex: 0.3 },

    {
      field: "sitename",
      headerName: "Site Name",
      minWidth: 250,
      flex: 0.9,
    },
    {
      field: "name",
      headerName: "Name",
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
            <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
            //   onClick={() =>
            //     deleteProductHandler(params.getValue(params.id, "id"))
            //   }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  //   products &&
  //     products.forEach((item) => {
  //       rows.push({
  //         id: item._id,
  //         stock: item.Stock,
  //         price: item.price,
  //         name: item.name,
  //       });
  //     });

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
