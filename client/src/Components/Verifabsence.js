/* eslint-disable no-undef */
import React from "react";
import { QrReader } from "react-qr-reader";
import Axios from "axios";
import { useState } from "react";
import "./Verifabsence.css";
import { Link } from "react-router-dom";
import { Button, Tab, Table } from "react-bootstrap";
import { useEffect } from "react";

function Verifabsence() {
  const [cne, setCne] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [filiere, setFiliere] = useState("");
  const [data, setData] = useState([]);
  const [stagiaireList, setStagiaireList] = useState([]);

  const getMyStagiaires = () => {
    Axios.get(`http://localhost:3001/stagiaires`).then((response) => {
      setStagiaireList(response.data);
    });
  };

  const updateStagiaire = (cne) => {
    Axios.put(`http://localhost:3001/update/${cne}`, {
      cne: cne,
    }).then((response) => {
      setStagiaireList(
        stagiaireList.map((val) => {
          return val.cne === cne 
            ? {
                id: val.id,
                cne: val.cne,
                nom: val.nom,
                prenom: val.prenom,
                filiere: val.filiere,
                status: val.status,                
              }
            : val;
        })
      );
    });
  };

  return (
    <div>
      <div className='qr__container'>
        <Link to='/'>
          <Button className='home__btn'>
            <b>H</b>
          </Button>
        </Link>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "50%" }}
        />

        <h4 style={{ textAlign: "center" }}>
          CNE :{" "}
          <b>
            <u>{data}</u>
          </b>
        </h4>
        {getMyStagiaires(data)}
        {updateStagiaire(data)}

        
      </div>
      <div className="content">
  <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>CNE</th>
              <th>NOM</th>
              <th>PRENOM</th>
              <th>FILIERE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {stagiaireList.map((val, key) => {
              return (
                <tr>
                  <td>{val.ID}</td>
                  <td>{val.CNE}</td>
                  <td>{val.NOM}</td>
                  <td>{val.PRENOM}</td>
                  <td>{val.FILIERE}</td>
                  <td>{val.STATUS}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
</div>
    </div>
  );
}

export default Verifabsence;
