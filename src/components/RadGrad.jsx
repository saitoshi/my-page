import React from "react";
import { Header, Container, Grid } from 'semantic-ui-react';

function RadGrad2() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">RadGrad 2.0</Header>
        <Grid textAlign = "center">
          <p textAlign="center"> <b> Software Engineering, Meteor, React </b> <br/>
            <span className="bold-list"> On Going</span> </p>
          <br/>
        </Grid>
        <Container text>
          <hr/>
          <b><u>Overview</u></b> <br/>

          RadGrad is an application in which registered ICS students can use as a undergraduate career planner.
          For example, if a certain student is interested in cybersecurity, using RadGrad they are able to see the recommended courses and possible intern programs.
          Furthermore, RadGrad also has a point system in which as students advance through their studies they level up

          <ul>
            <li> For the repository <a href="https://github.com/radgrad/radgrad2">page</a></li>
            <li> For the organization <a href={"https://www.radgrad.org/"}>page</a></li>
          </ul>
          


        </Container>
      </Container>


  );
}

export default RadGrad2;
