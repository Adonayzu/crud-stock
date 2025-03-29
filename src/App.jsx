import React, { useState } from 'react' // importar useState para poder usarlo en el componente y el React para poder usar JSX
// En el siguiente import se importa BrowserRouter as Router para poder usar las rutas, Routes para poder definir las rutas, Route para
//  poder definir una ruta y Link para poder crear un enlace
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' // importar BrowserRouter as Router para poder usar las rutas
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // importar los iconos de bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // importar el js de bootstrap
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/Routes';



function App() {
  



  return (
    <>
      <Router> {/* esto sirve para poder usar las rutas */} 
        <Navbar/>
        <AppRoutes/>
        
      </Router>
    </>
  )
}

export default App


