import React from "react";
import { Header, Container, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function RadGrad2() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">RadGrad 2.0</Header>
        <Grid textAlign = "center">
          <p textAlign="center"> <b> Software Engineering, Meteor, React </b> <br/></p>
        </Grid>
        <Grid textAlign="center">
          <p><span className="bold-list"> On Going</span> </p>
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
          <b><u>Week 1 Tasks</u></b><br/>
          For this project, we used the GitHub Project <i>Kanban</i> Board to list the different issues that need to be worked on.
          In the first week, the intern group concentrated on the welcoming task which centered around on reviewing the rules and conducts,
          the research progress, and some review or learning Javascript and TypeScript.<br/>
          Additionally, for the first week issues, we were asked to write essays on the different topics. Below here are the link to the essays.
          <ul>
            <li><NavLink exact to = "/radgradreview">RadGrad Reivew </NavLink></li>
            <li><NavLink exact to = "/radgradfeedback">Comments on the Current RadGrad</NavLink></li>
            <li><NavLink exact to = "/radgradstart">Review and Writing Code</NavLink></li>
          </ul>



        </Container>
      </Container>


  );
}

export default RadGrad2;
