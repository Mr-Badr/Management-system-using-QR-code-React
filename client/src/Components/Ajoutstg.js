import React from "react";
import { useState } from "react";
import Axios from "axios";
import QRCode from "react-qr-code";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import "./Ajoutstg.css";

function Ajoutstg() {
  const [cne, setCne] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [filiere, setFiliere] = useState("");

  const [stagiaireList, setStagiaireList] = useState([]);

  // Add intern to DataBase
  const addStagiaire = () => {
    Axios.post("http://localhost:3001/create", {
      cne: cne,
      nom: nom,
      prenom: prenom,
      filiere: filiere,
    }).then(() => {
      setStagiaireList([
        ...stagiaireList,
        {
          cne: cne,
          nom: nom,
          prenom: prenom,
          filiere: filiere,
        },
      ]);
    });
  };

  return (
    <div className='ajout__stg'>
      <Form className='form'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>CNE *</Form.Label>
          <Form.Control
            type='text'
            onChange={(event) => {
              setCne(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type='text'
            onChange={(event) => {
              setNom(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Prenom</Form.Label>
          <Form.Control
            type='text'
            onChange={(event) => {
              setPrenom(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Filiére</Form.Label>
          <Form.Control
            type='text'
            onChange={(event) => {
              setFiliere(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className='btns'>
          <Button variant='primary' type='submit' onClick={addStagiaire}>
            Ajouter Stagiaire
          </Button>
          <Button variant='outline-primary' type='submit'>
            Spectacle Stagiaires
          </Button>
        </Form.Group>
      </Form>


      s{/* Containers */}
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href='#'>Card Link</Card.Link>
                <Card.Link href='#'>Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href='#'>Card Link</Card.Link>
                <Card.Link href='#'>Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href='#'>Card Link</Card.Link>
                <Card.Link href='#'>Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Ajoutstg;
