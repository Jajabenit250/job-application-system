import React, { Component, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Footer() {
  useEffect(() => {}, []);
  return (
    <div>
      <br />
      <br />
      <center>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            Career Page
          </Grid>

          <br />
          <br />
          <Grid item xs={12} sm={12} md={12}>
            List Of Available Jobs
            <br />
          <br />
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Card sx={{ minWidth: 350 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Job Title
                    </Typography>
                    <Typography variant="h5" component="div">
                      
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    description
                    </Typography>
                    <Typography variant="body2">
                      description
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                   <Button size="small">Apply Now</Button> 
                  </CardActions> 
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ minWidth: 350}} style={{  marginRight: "20px"}}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Job Title
                    </Typography>
                    <Typography variant="h5" component="div">
                      
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    description
                    </Typography>
                    <Typography variant="body2">
                      description
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                   <Button size="small">Apply Now</Button> 
                  </CardActions> 
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ minWidth: 350 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                      
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                   <Button size="small">Apply Now</Button> 
                  </CardActions> 
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ minWidth: 350 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                      
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                   <Button size="small">Apply Now</Button> 
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
