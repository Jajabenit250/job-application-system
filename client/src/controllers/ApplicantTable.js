import * as React from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { connect } from "react-redux";
import { applicantsByJob, hrDecision } from "../redux/actions";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

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
  const [applicantData, setApplicantData] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [job, setJob] = React.useState("6231d9ad6087cc81bc6cc6d1");

  const handleChange = (event) => {
    setJob(event.target.value);
    props.applicantsByJob(event.target.value);
  };
  useEffect(() => {
    props.applicantsByJob();
  }, [0]);

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
      renderCell: (params) => {
        return params ? params.row.status ? (
          <center>
            {" "}
            <h2 style={{ color: params.row.status === "pass" ? "blue" : "red" }}>
              {" "}
              {params.row.status}ed{" "}
            </h2>{" "}
          </center>
        ) : (
          <Grid container>
            <Grid item xs={6}>
              {" "}
              {params ? (
                <Button
                  onClick={() =>
                    props.hrDecision({ id: params.row._id, status: "pass" })
                  }
                >
                  Pass
                </Button>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={6}>
              {" "}
              {params ? (
                <Button
                  onClick={() =>
                    props.hrDecision({ id: params.row._id, status: "drop" })
                  }
                >
                  Drop
                </Button>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        ): "";
      },
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
          e.stopPropagation();
          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          return setApplicantData(thisRow);
        };

        return <Button onClick={onClick}>View Details</Button>;
      },
    },
  ];
  
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          {" "}
          <center>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ marginTop: "20px" }}
            >
              {" "}
              List Of Applicant Applying for :{" "}
            </Typography>
          </center>
        </Grid>
        <Grid item xs={6}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={job}
              label="Select a Job"
              style={{ marginTop: "20px" }}
              onChange={handleChange}
            >
              {props.allVacancy
                ? props.allVacancy.datas
                  ? props.allVacancy.datas.map(function (vacancy, i) {
                      return (
                        <MenuItem value={vacancy ? vacancy._id : ""}>
                          {vacancy.jobName}
                        </MenuItem>
                      );
                    })
                  : ""
                : ""}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Typography> </Typography>
      <br />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <center>
            <h2> Details </h2>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Applicant Name: {applicantData.applicantName}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {" "}
              Age: {applicantData.age}{" "}
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {" "}
              Degree: {applicantData.degree}{" "}
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {" "}
              Status: {applicantData.status}{" "}
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {" "}
              Cover Letter
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {" "}
              {applicantData.coverLetter}
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {" "}
              Resume : <a href={applicantData.fileURL}> Click here to View </a>
            </Typography>
          </center>
        </Box>
      </Modal>
      <div style={{ height: 400, width: "100%" }}>
        {props.allAllicant ? props.allAllicant.datas ? (
          <DataGrid
            rows={props.allAllicant.datas}
            columns={columns}
            pageSize={5}
            getRowId={() => Math.random()}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        ) : (
          ""
        ) : " "}
      </div>{" "}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    allAllicant: state.applicantList.data,
    allVacancy: state.vacancy.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    applicantsByJob: (data) => dispatch(applicantsByJob(data)),
    hrDecision: (data) => dispatch(hrDecision(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
