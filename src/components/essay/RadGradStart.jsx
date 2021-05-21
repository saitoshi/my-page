import React from 'react';
import { Header, Container, Grid, Image } from 'semantic-ui-react';
import '../style.css';

function RadGradStart() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center"> RadGrad Initial Join Up </Header>
        <Grid textAlign = "center">
          <p> RadGrad2, Summer 2021 Internship Program, Software Engineering</p>
        </Grid>
        <Grid textAlign="center">
          <p><span className="bold-list">May 21, 2021</span></p>
        </Grid>
        <Container text>
          <br/>
          <b><u>Overview Of Issue 468 Task 6</u></b>
          <br/>
          As an introduction task to the first week of the RadGrad 2.0 Summer 2021 Internship, there was a list of tasks for newcomers to do. Issue 468 centered around programming tasks for us to get used to the RadGrad environment.
          <br/>
          <b><u>Task 1 – Hello World</u></b>
          <br/>
          Regardless of the country in which you learned programming; the first task is always called “Hello-World”. This was no different for the RadGrad summer 2021 interns too. Using the sandbox portion provided by Professor Johnson and Professor Moore, we began by writing “Hello-World”.
          However, this process also allowed us to see <span className="bold-list">components</span> unique to RadGrad such as “RadGradHeader” and the “RadGradSegment”.
          Additionally, this was the first time for me to use <a href={"https://fomantic-ui.com/"}>Fomantic UI</a> programming assignment.
          <Image src={'https://github.com/saitoshi/images/blob/main/radgrad-task1.png?raw=true'} size='huge' centered/>
          <div className="comment">A screenshot of the sandbox after Task 1.</div>
          <b><u>Task 2 - User Display</u></b>
          <br/>
          After doing Hello World, the next task is to display the user names of the sandbox owner and the current user. To do begin, I created a component that stored the header and paragraphs in a separate component file.
          Then using withTracker, I created two const called "urlUser", which stores the owner of the page and "loggedInUser" to store the current user by the help from meteor.
          The challenging part for this task was grabbing the user display, but after taking a 15 minute break the solution I ended up was the following.
          <br/>
          <Image src={'https://github.com/saitoshi/images/blob/main/task2code.png?raw=true'} size='big' centered/>
          <br/>
         <div className={'comment'}>The code I wrote to display the correct users.</div>
          To test whether the code worked I logged in as an Admin to see whether it displayed the right users. After logging in it did as it displayed radgrad@hawaii.edu as the current user and my email as the owner of the sandbox.
          <Image src={'https://github.com/saitoshi/images/blob/main/radgrad-task2.png?raw=true'} size='huge' centered/>
          <div className={'comment'}>A screenshot when I log in as radgrad@hawaii.edu.</div>
          <b><u>Task 3 - Career Goal Display</u></b>
          For task 3, we had to create a career goal segment in which every time it refreshes, it displayed a new career option and its description.
          Additionally, on the bottom it should display the total number of career choices available. <br/>
          For this task, similar to Task 2, I created a component in which stored the basic parts required in Task 3 and in the SandBox page recreated the interface to store the consts from Task 2 and Task 3 into one area.
          However, the difficult part was getting the consts as I had a hard time displaying the randomization of careers.
          Initially, it would only display "Data Science" for me because the Career Interests when I played with RadGrad in ICS 211 was Data Science.
        <Image src={'https://github.com/saitoshi/images/blob/main/task3.png?raw=true'} size='big' centered/>
        </Container>
        <div className ="push"/>
      </Container>
);
}

export default RadGradStart;
