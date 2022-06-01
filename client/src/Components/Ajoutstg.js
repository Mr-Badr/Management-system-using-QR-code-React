import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Ajoutstg.css";

function Ajoutstg() {
  return (
    <div className='ajout__stg'>
      <Form className='form'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>CNE *</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Nom</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Prenom</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Filiére</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group className='btns'>
          <Button variant='primary' type='submit'>
            Ajouter Stagiaire
          </Button>
          <Button variant='outline-primary' type='submit'>
            Spectacle Stagiaires
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Ajoutstg;
