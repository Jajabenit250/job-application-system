import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { connect } from "react-redux";
import { getVacancies, uploadCvAction } from "../redux/actions";
import TextField from "@mui/material/TextField";

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

function Vacancies(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = React.useState();
  const [applicantName, setApplicantName] = React.useState();
  const [coverLetter, setCoverLetter] = React.useState();
  const [age, setAge] = React.useState();
  const [degree, setDegree] = React.useState();
  const [jobID, setJobID] = React.useState();

  function handleChangeFile(event) {
    setFile(event.target.files[0]);
  }

  function applyToJob (){
    const formData = new FormData();
    formData.append('file', file);
    formData.append('jobID', jobID);
    formData.append('applicantName', applicantName);
    formData.append('coverLetter', coverLetter);
    formData.append('age', age);
    formData.append('degree', degree);
    props.uploadCvAction(formData);
  }
  useEffect(() => {
    props.getVacancies();
  }, []);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <center>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Add Your Information to apply
            </Typography>
          </center>
          <TextField
            fullWidth
            label="Candidate FullName"
            id="fullWidth"
            onChange={(e) => setApplicantName(e.target.value)}
            style={{ margin: "5px", marginTop: "10px"}}
          />
          <TextField
            fullWidth
            label="Candidate Age"
            id="fullWidth"
            type="number"
            onChange={(e) => setAge(e.target.value)}
            style={{ margin: "5px" }}
          />
          <TextField
            fullWidth
            label="Degree"
            id="fullWidth"
            onChange={(e) => setDegree(e.target.value)}
            style={{ margin: "5px" }}
          />

          <TextField
            fullWidth
            label="Cover Letter"
            id="fullWidth"
            onChange={(e) => setCoverLetter(e.target.value)}
            style={{ margin: "5px" }}
            multiline
            rows={4}
            maxRows={7}
          />
          <center>
          <TextField
            // label="Add Resume"
            type="file"
            onChange={handleChangeFile} 
            style={{ margin: "5px" }}
          />
            <Button
              variant="contained"
              color="primary"
              style={{
                marginTop: "10px",
                width: "40%",
                textTransform: "none",
              }}
              onClick={applyToJob}
            >
              Submit
            </Button>{" "}
          </center>
        </Box>
      </Modal>
      <br />
      <center>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            Career Page
          </Grid>

          <br />
          <br />
          <Grid item xs={12} sm={12} md={12}>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              List Of Available Vacancies{" "}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {" "}
              Search & apply for a Job When applying, remember to have your
              resume ready.{" "}
            </Typography>

            <Grid container spacing={4}>
              {props.allVacancy ? props.allVacancy.datas
                ? props.allVacancy.datas.map(function (vacancy, i) {
                    return (
                      <Grid item xs={12} sm={6} md={3}>
                        <Card
                          sx={{ minWidth: 320 }}
                          style={{ marginRight: "20px" }}
                        >
                          <CardContent>
                            <Typography
                              sx={{ fontSize: 25 }}
                              color="black"
                              gutterBottom
                            >
                              {vacancy.jobName}
                            </Typography>
                            <Typography
                              variant="h5"
                              component="div"
                            ></Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              {vacancy.description}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              size="small"
                              onClick={() => {handleOpen();
                                setJobID(vacancy._id)
                              }}
                              style={{ marginLeft: "120px" }}
                            >
                              Apply Now
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })
                : " " : " "}
            </Grid>
          </Grid>
        </Grid>
      </center>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allVacancy: state.vacancy.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getVacancies: () => dispatch(getVacancies()),
    uploadCvAction: (data) => dispatch(uploadCvAction(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vacancies);
