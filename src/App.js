import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Card, Container } from 'react-bootstrap';
import Game from './Game';
function App() {
  return (
    <div className="App">
      <Card.Title style={{fontWeight:"bold",fontSize:"60px"}}>ENDER BENDER</Card.Title>
    <header className='App-header' >
      
      <Container >
      <Card  style={{ color: "#000" ,padding:"20px",margin:"69px"}}>
      <Card.Img style={{width:"100%",height:"auto"}} variant="top" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3I3M2VoZXpwNnpwYnJ2eDF6ODVrazF5d3I1Z3NlNnZ1aGZmYjY1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bubpLP4o75fmIVukRr/giphy.gif"/>
      <Card.Body >
      <Card.Text style={{textDecoration:"underline"}}>NOTE:</Card.Text>
      <Card.Text><h6>This is the game in which the last letter of the word is used to create a new word. </h6></Card.Text>
      </Card.Body>
    </Card>
    </Container>
    <Container>
      <Card.Body>
      <h3 style={{textDecoration:"underline"}}>Rule</h3>
        <Card.Text>
         <h6> rules of the game is should only provoide the WORD of the which is not a NAME and Should have a meaning.</h6>
        </Card.Text>
      </Card.Body>
    </Container>
    </header>
    <Game/>
    </div>
  );
}

export default App;
