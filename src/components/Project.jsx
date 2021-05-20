import React from "react";
import { Header, Container, Card, Image, Button, Grid } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
function Project() {
  return (
      <Container>
        <Header as ="h2" textAlign="center">PROJECT</Header>
        <hr/>
        <Card.Group itemsPerRow={3}>
          <Card>
            <Image src="https://saitoshi.github.io/images/RadGrad.png"/>
            <Card.Content>
              <Card.Header textAlign='center'>RadGrad 2.0</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>ON GOING</span>
              </Card.Meta>
              <Card.Description>
                A project created during my Summer 2021 internship program.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering, Meteor, React <br/>
              <br/>
              <Grid>
                <Grid.Column textAlign="center">
                  <Button as = {NavLink} exact to = "/radgrad">MORE DETAILS</Button>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
        </Card.Group>


      </Container>


  );
}

export default Project;
