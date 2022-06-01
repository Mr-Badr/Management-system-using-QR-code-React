import React from 'react'
import './Home.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Ajoutstg from "./Ajoutstg";


function Home() {
  return (
    <div className='home d-grid gap-2'>
      <Link to='/ajoutstg'>
        <Button variant="outline-primary">Inserer Stagiaire</Button>
      </Link>
      <Link to='/verifabsence'>
        <Button variant="outline-secondary">Vérification des Absence</Button>
      </Link>
    </div>
  )
}

export default Home