const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const moment = require("moment");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "startaymz1598753",
  database: "node_mysql_ts",
});

app.post("/create", (req, res) => {
  const code = req.body.code;
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (code, name, age, country, position, wage) VALUES (?,?,?,?,?,?)",
    [code, name, age, country, position, wage],
    (err, result) => {
      if (err) {
        //console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

//////////////////

app.post("/insertDate/:code", (req, res) => {
  code = req.params.code;
  db.query(
    "INSERT INTO employees (Entree) SELECT TO_CHAR(systimestamp,'DD-MON-YYYY HH24:MI:SS') from dual where code = ?",
    code,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});



app.get("/employees", (req, res) => {
  
  db.query("SELECT * FROM employees"  , (err, result) => {
    if (err) {
      //console.log(err);
    } else {
      res.send(result);
    }
  });
});

// This code working with Qr code Scanner, to Get employees from DB 
app.get("/getEmp/:code", (req, res) => {
  code = req.params.code;
  db.query("SELECT * FROM employees where code =?" , code , (err, result) => {
    if (err) {
      //console.log(err);
    } else {
      res.send(result);
    }
  });
});



app.get("/users/:code", (req, res) => {
  
  db.query("SELECT Entree FROM employees where code = ? ", code , (err, result) => {
    if (err) {
      //console.log(err);
    } else {
      if (!result) {return res.send("Insert First")}  
      else if (result) {return end()   } else {res.send("You are Already Done!")} 
    }
  });
});


  app.put("/updateEnterDate/:code", (req, res) => {
    const code = req.params.code;
    const d = moment().format('MMMM Do YYYY, h:mm:ss a')
    db.query(
      "UPDATE employees SET Entree = ? WHERE code = ?",
      [d, code],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.put("/updateOutDate/:code", (req, res) => {
    const code = req.params.code;
    db.query(
      "UPDATE employees SET Sortit = ? WHERE code = ?",
      [moment().format('MMMM Do YYYY, h:mm:ss a'), code],
      (err, result) => {
        if (err) {
          //console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });







// QR Reader
app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        //console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      //console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
