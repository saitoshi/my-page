import React from "react";
import { Header, Container } from 'semantic-ui-react';

function About() {
  return (
      <Container>
        <Header as ="h2" textAlign="center">ABOUT ME</Header>
        <Container text>
          <hr/>
          <p>My name is <b>Shin</b>. Currently an undergraduate student studying Computer Science and Mathematics.
          My interests are in Software Engineering, Mathematic Teaching, and Design.
            <br/>
            The current three mottos I follow for my daily life are
            <b>WORK MORE & PLAY LESS, JUST KEEP WORKING, BOTH QUALITY AND QUANTITY</b>.</p>
        </Container>
      </Container>


  );
}

export default About;
