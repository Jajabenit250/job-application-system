import React, { Component, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export default function Vacancies() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {}, []);
  return (
    <div>
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
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ minWidth: 350 }} style={{ marginRight: "20px" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 25 }}
                      color="black"
                      gutterBottom
                    >
                      Job Title
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      The purpose of the job is to implement the Bank’s
                      reporting policies and procedures in the preparation of
                      accounting records and reports so as to ensure the
                      provision
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={handleOpen}
                      style={{ marginLeft: "120px" }}
                    >
                      Apply Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ minWidth: 350 }} style={{ marginRight: "20px" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 25 }}
                      color="black"
                      gutterBottom
                    >
                      Job Title
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      The purpose of the job is to implement the Bank’s
                      reporting policies and procedures in the preparation of
                      accounting records and reports so as to ensure the
                      provision
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={handleOpen}
                      style={{ marginLeft: "120px" }}
                    >
                      Apply Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ minWidth: 350 }} style={{ marginRight: "20px" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 25 }}
                      color="black"
                      gutterBottom
                    >
                      Job Title
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      The purpose of the job is to implement the Bank’s
                      reporting policies and procedures in the preparation of
                      accounting records and reports so as to ensure the
                      provision
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={handleOpen}
                      style={{ marginLeft: "120px" }}
                    >
                      Apply Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ minWidth: 350 }} style={{ marginRight: "20px" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 25 }}
                      color="black"
                      gutterBottom
                    >
                      Job Title
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      The purpose of the job is to implement the Bank’s
                      reporting policies and procedures in the preparation of
                      accounting records and reports so as to ensure the
                      provision
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={handleOpen}
                      style={{ marginLeft: "120px" }}
                    >
                      Apply Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </center>
    </div>
  );
}
