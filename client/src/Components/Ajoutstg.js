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
import { Link } from "react-router-dom";

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

  // Get interns From DataBase
  const getStagiaires = () => {
    window.scrollTo(100, 500);
    Axios.get("http://localhost:3001/stagiaires").then((response) => {
      setStagiaireList(response.data);
    });
  };

  const getStagiairesAfterDelete = () => {
    Axios.get("http://localhost:3001/stagiaires").then((response) => {
      setStagiaireList(response.data);
    });
  };

  const deleteStagiaire = (cne) => {
    
    Axios.delete(`http://localhost:3001/delete/${cne}`).then((response) => {
      setStagiaireList(
        stagiaireList.filter((val) => {
          return val.cne !== cne;
        })
      );
    });
      
  };

  return (
    <div className='ajout__stg'>
      <Link to="/">
      <Button className="home__btn AiFillHome"><b>H</b></Button>
      </Link>
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
        </Form.Group>
      </Form>
      <div className='show__btn'>
        <Button variant='outline-primary' type='submit' onClick={getStagiaires}>
          ⮟ Spectacle Stagiaires ⮟
        </Button>
      </div>

      <div className='cards'>
        {stagiaireList.map((val, key) => {
          return (
            <Container>
              <Row>
                <Col className='col'>
                  <Card style={{ width: "18rem" }}>
                    <QRCode
                      style={{ margin: "15px auto" }}
                      value={"" + val.CNE}
                    />
                    <ListGroup className='list-group-flush'>
                      <ListGroupItem>
                        Code de stagiaire &nbsp;:&nbsp;{" "}
                        <strong>
                          <u>{val.CNE}</u>
                        </strong>
                      </ListGroupItem>
                      <ListGroupItem>
                        Nom &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{" "}
                        {val.NOM}
                      </ListGroupItem>
                      <ListGroupItem>
                        Prenom &nbsp;&nbsp;&nbsp;:&nbsp; {val.PRENOM}
                      </ListGroupItem>

                      <ListGroupItem>
                        Filiére &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;
                        {val.FILIERE}
                      </ListGroupItem>
                    </ListGroup>
                    <Card.Body className='card__bnts'>
                      <Button variant='outline-primary' className='card__btn'>
                        Edit
                      </Button>

                      <Button
                        variant='outline-danger'
                        className='card__btn delete__btn'
                        onClick={() => {
                          deleteStagiaire(val.CNE);  
                          getStagiairesAfterDelete()
                        }}
                      >
                        Delete
                      </Button>

                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
    </div>
  );
}

export default Ajoutstg;
