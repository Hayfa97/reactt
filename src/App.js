
import "./App.css";
import { Form,Card,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Naav from "./navv";

function App() {
  return (
    <div className="App">
<Naav/>
      <Form className="myform">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Introduce your self</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Card style={{ width: '20rem' }}>
  <Card.Img className="abc" variant="top"  src="./image/gomycode.jpeg" />
  
  <Card.Body>
    <Card.Title>Go my code</Card.Title>
    <Card.Text style={{fontSize:15 , color:"black"}}>
    GOMYCODE aims to be a pan-African educational platform that helps tomorrow’s talent improve their digital skills
     through affordable, quality training and the assistance of the best instructors. GOMYCODE is the largest developer
     community in Africa and the Middle East.
     We train the next generation of developers and connect them with the best digital projects from around the world.
    </Card.Text>
    <Button variant="secondary">Visit our Plateforme</Button>
  </Card.Body>
</Card>
</div>
)
}

export default App;

