import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Ajoutstg from "./Components/Ajoutstg";
import Verifabsence from "./Components/Verifabsence";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={[<Home />]} />
        <Route path='/ajoutstg' element={[<Ajoutstg />]} />
        <Route path='/verifabsence' element={[<Verifabsence />]} />
      </Routes>
    </Router>
  );
}

export default App;
