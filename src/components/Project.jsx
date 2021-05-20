import React from "react";
import { Header, Container, Card, Image, Button, Grid } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
const shockingLogo = require('./images/shocking.png');

function Project() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">PROJECT</Header>
        <Container text>
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

          <Card>
            <Image src="https://saitoshi.github.io/images/shocking.png" />
            <Card.Content>
              <Card.Header textAlign='center'>Shocking Emissions</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2021-05-04</span>
              </Card.Meta>
              <Card.Description>
                A meteor based application in which customers of Hawaiian Electric Industries can see how much green house gases they save in their transportation to work.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering, Meteor, React <br/>
              <br/>
              <Grid>
                <Grid.Column textAlign="center">
                  <Button as = {NavLink} exact to = "/shocking">MORE DETAILS</Button>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>

          <Card>
            <Image src="https://saitoshi.github.io/images/tregear.png" />
            <Card.Content>
              <Card.Header textAlign='center'>Tregear Story Translation</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2020-12-13</span>
              </Card.Meta>
              <Card.Description>
                A Japanese to English translation for the short story called "Tregear Story" written by NAKANO Takao.              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Japanese to English Translation<br/>
              <br/>
              <Grid>
                <Grid.Column textAlign="center">
                  <Button as = {NavLink} exact to = "/tregear">MORE DETAILS</Button>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
          <Card>
            <Image src="https://saitoshi.github.io/images/math.jpeg" />
            <Card.Content>
              <Card.Header textAlign='center'>UH Math Review</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2020-06-01</span>
              </Card.Meta>
              <Card.Description>
                A review website where college students can study or prepare for Math courses offered at UH Manoa.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Mathematics, HTML, LaTex <br/>
              <br/>
              <Grid>
                <Grid.Column textAlign="center">
                  <Button as = {NavLink} exact to = "/textbookhunt">MORE DETAILS</Button>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>

          <Card>
            <Image src="https://saitoshi.github.io/images/textbookhunt.png" />
            <Card.Content>
              <Card.Header textAlign='center'>Textbook Hunt</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2020-05-15</span>
              </Card.Meta>
              <Card.Description>
                A meteor and react based application where students can sell used textbooks to others               </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering, Meteor, React<br/>
              <br/>
              <Grid>
                <Grid.Column textAlign="center">
                  <Button as = {NavLink} exact to = "/textbookhunt">MORE DETAILS</Button>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>

        </Card.Group>

        </Container>
        <div className="push"/>
      </Container>


  );
}

export default Project;
