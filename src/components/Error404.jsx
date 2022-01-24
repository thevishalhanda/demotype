import React from 'react';
import "../common/Images/robot.jpg";
import {Grid, Card,CardContent,Typography} from "@material-ui/core";
import Image from "../common/Images/logo.png";
import robotImage from "../common/Images/robot.jpg"

function Error404() {
  return (<>
      <Grid
        container
        spacing={24}
        justify="center"
        sm={12}
        //   style={{ minHeight: '100vh', maxWidth: '100%' }}
      >
        <Grid item xs={11} sm={10} md={10} lg={5} align="center"
         justifyContent='center'
        >
          <img
            src={Image}
            alt=""
            style={{
              width: "20%",
              height: "5%",
              marginTop: "10%",
              fontFamily:"CircularStd"
            }}
          />

          <Card
            style={{
              width: "100%",
              marginTop: "5%",
              height:"70vh",
              fontFamily:"CircularStd",

              borderRadius:"2.5%"
            }}
            elevation={5}
          >
            <CardContent sx={1} md={10} lg={6}>
                
                 <img src = {robotImage} alt = "" 
                     
                     style = {{
                         width:"38%",
                         height:"80%",
                         marginTop:"4%"

                     }}

                  />
                     <Typography
                      style = {{
                          marginTop:"1%",
                          fontSize:"260%",
                          fontWeight:"bold",
                          color:"#4B5A5D",
                          
                      }}
                     >404</Typography>
                     <Typography
                     style = {{
                         marginTop:"-1%",
                        fontSize:"180%",
                          fontWeight:"bold",
                          color:"#4B5A5D",
                          fontWeight:"750"

                     }}
                     
                     >Page Not Found !</Typography>


                                
                </CardContent>
                   



          </Card>
        </Grid>
      </Grid>

  </>)
}

export default Error404;
