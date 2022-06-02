const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const moment = require("moment");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  // FIXME : Use (.env) File
  user: "root",
  host: "localhost",
  password: "startaymz1598753",
  database: "node_mysql_ts",

    // host: process.env.DB_HOST,
    // username: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // port: process.env.DB_PORT,
    // database: process.env.DB_DATABASE
});

app.post("/create", (req, res) => {
  const cne = req.body.cne;
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const filiere = req.body.filiere;

  db.query(
    "INSERT INTO stagiaire (cne, nom, prenom, filiere) VALUES (?,?,?,?)",
    [cne, nom, prenom, filiere],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/stagiaires", (req, res) => {
  
  db.query("SELECT * FROM stagiaire"  , (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.delete("/delete/:cne", (req, res) => {
  const cne = req.params.cne;
  db.query("DELETE FROM stagiaire WHERE cne = ?", cne, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// This code working with Qr code Scanner, to Get stagiaires from DB 
// app.get("/getStg/:code", (req, res) => {
//   cne = req.params.cne;
//   db.query('SELECT NOM FROM stagiaire where cne = ? ' , cne , (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });


  app.put("/update/:cne", (req, res) => {
    const cne = req.params.cne;
    db.query(
      "UPDATE stagiaire SET STATUS = 'present ✔' WHERE cne = ?",
      cne,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

//   app.put("/updateOutDate/:code", (req, res) => {
//     const code = req.params.code;
//     db.query(
//       "UPDATE employees SET Sortit = ? WHERE code = ?",
//       [moment().format('MMMM Do YYYY, h:mm:ss a'), code],
//       (err, result) => {
//         if (err) {
//           //console.log(err);
//         } else {
//           res.send(result);
//         }
//       }
//     );
//   });


// // QR Reader
// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         //console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });


app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
