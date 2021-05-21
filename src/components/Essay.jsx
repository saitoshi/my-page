import React from "react";
import { Header, Container, Card, Image, Button, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function Essay() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">ESSAY</Header>
        <hr/>
        <Container text>
        <Card.Group itemsPerRow={3}>
          <Card>
            <Image src="https://saitoshi.github.io/images/RadGrad.png"/>
            <Card.Content>
              <Card.Header textAlign='center'>RadGrad Initial Join Up</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>05-21-21</span>
              </Card.Meta>
              <Card.Description>
              Essay reflecting on the first week tasks on RadGrad Summer Internship that are programming related.
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering, Meteor, React <br/>
              <br/>
              <Grid>
                <Grid.Column textAlign="center">
                  <Button as = {NavLink} exact to = "/radgradstart">READ ESSAY</Button>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
          <Card>
            <Image src="https://saitoshi.github.io/images/RadGrad.png"/>
            <Card.Content>
              <Card.Header textAlign='center'>RadGrad Grad Feedback</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>05-20-21</span>
              </Card.Meta>
              <Card.Description>
                A response on the RadGrad research: purpose and ways to get student feedback.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering, Meteor, React <br/>
              <br/>
              <Grid>
                <Grid.Column textAlign="center">
                  <Button as = {NavLink} exact to = "/radgradfeedback">READ ESSAY</Button>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>

          <Card>
            <Image src="https://saitoshi.github.io/images/RadGrad.png"/>
            <Card.Content>
              <Card.Header textAlign='center'>RadGrad Grad Review</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>05-19-21</span>
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
                  <Button as = {NavLink} exact to = "/radgradreview">READ ESSAY</Button>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
        </Card.Group>
        </Container>
      </Container>


  );
}

export default Essay;
