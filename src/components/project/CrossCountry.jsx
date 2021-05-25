import React from "react";
import { Header, Container, Grid } from 'semantic-ui-react';

function CrossCountry() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">Algo-Trix</Header>
        <Grid textAlign = "center">
          <p textAlign="center"> Software Engineering, Software Quality Assurance, React <br/></p>
        </Grid>
        <Grid textAlign ="center">
          <p textAlign ="center">  <span className="bold-list"> On Going</span></p>
        </Grid>
        <Container text>
          <hr/>
          <Header as ="h3" textAlign="left">OVERVIEW OF ICS 427</Header>
          During the 6 week period of ICS 427, the class was broken into teams of 3-4 people of their choice and were
          asked to work on a single application project that highlighted the elements of Software Quality Assurance.
          <br/>
          The group I was part of was called <a href="https://cross-country-coders.github.io/">Cross Country Coders</a>.
          The application that the group created was called Algo-Trix which is a user-based application that people can study algorithms.
          <br/>
          <ul>
            <li> The link to the <a href="https://cross-country-coders.github.io/">GitHub Organization Page</a></li>
            <li> The link to the <a href="https://github.com/cross-country-coders/Cross-Country-Coders">GitHub Repository Page</a></li>
          </ul>
        </Container>
      </Container>
  );
}

export default CrossCountry;
