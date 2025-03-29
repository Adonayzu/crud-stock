import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import CreateProduct from '../pages/CreateProduct'  // importar el componente CreateProduct
import ShowProducts from '../pages/ShowProducts'  // importar el componente ShowProducts


function AppRoutes() {
  return (
    <>
        <Routes> {/* esto sirve para poder definir las rutas */}
            <Route path= '/' element={<Home/>}/> {/* esto sirve para poder definir una ruta */}
            <Route path= '/create' element={<CreateProduct/>}/>
            <Route path= '/show' element={<ShowProducts/>}/>
        </Routes>
    
    </>
    
  )
}

export default AppRoutes
