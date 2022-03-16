import * as React from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { connect } from "react-redux";
import { applicantsByJob } from "../redux/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};





function DataTable(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    { field: "_id", headerName: "ID", minWidth: 70 },
    { field: "applicantName", headerName: "applicant Name", minWidth: 200 },
    { field: "coverLetter", headerName: "cover Letter", minWidth: 150 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      minWidth: 150,
    },
    {
      field: "degree",
      headerName: "degree",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      minWidth: 200,
    },
  
    {
      field: "fileURL",
      headerName: "Resume",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      minWidth: 200,
    },
    {
      field: "Status",
      headerName: "Status",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      minWidth: 150,
    },
  
    {
      field: "_first_login",
      headerName: "Action",
      sortable: false,
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) => {
        const onClick = (e) => {
          handleOpen(true);
          e.stopPropagation(); // don't select this row after clicking
  
          const api = params.api;
          const thisRow = {};
  
          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          return handleOpen(true);
        };
  
        return <Button onClick={onClick}>View Details</Button>;
      },
    },
  ];
  useEffect(() => {
    props.applicantsByJob();
  }, []);
  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <br /> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <div style={{ height: 400, width: "100%" }}>
      {props.allVacancy ? <DataGrid
          rows={props.allVacancy.datas }
          columns={columns}
          pageSize={5}
          getRowId={() => Math.random()}
          rowsPerPageOptions={[5]}
          checkboxSelection
        /> : "" }
        
      </div>{" "}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    allVacancy: state.applicantList.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    applicantsByJob: (data) => dispatch(applicantsByJob(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
