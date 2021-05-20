import React from "react";
import { Header, Container, Grid, Image } from 'semantic-ui-react';
import './style.css';

function RadGradStart() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center”"> RadGrad Initial Join Up </Header>
      <Grid textAlign = "center">
      <Grid.Row>
      <p> RadGrad2, Summer 2021 Internship Program, Software Engineering</p>
      </Grid.Row>
<Grid.Row>
<p><span className="bold-list">May 21, 2021</span></p>
</Grid.Row>
</Grid>
<Container text>
<b><u>Overview Of Issue 468 Task 6</u></b>
<br/>
As an introduction task to the first week of the RadGrad 2.0 Summer 2021 Internship, there was a list of tasks for newcomers to do. Issue 468 centered around programming tasks for us to get used to the RadGrad environment.
<br/>
<b><u>Task 1 – Hello World</u></b>
<br/>
Regardless of the country in which you learned programming; the first task is always called “Hello-World”. This was no different for the RadGrad summer 2021 interns too. Using the sandbox portion provided by Professor Johnson and Professor Moore, we began by writing “Hello-World”.
  However, this process also allowed us to see <span className="bold-list">components</span> unique to RadGrad such as “RadGradHeader” and the “RadGradSegment”.
  Additionally, this was the first time for me to use <a href={"https://fomantic-ui.com/"}>Fomantic UI</a> programming assignment.
<Image src={"https://github.com/saitoshi/images/blob/main/radgrad-task1.png?raw=true"} size='large' centered/>
</Container>
        <div className ="push"/>
          </Container>



);
}

export default RadGradStart;
