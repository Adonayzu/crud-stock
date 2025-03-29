import React,{ useEffect, useState }from 'react'
import { axiosInstance } from '../services/axios.config';
import Tabla from '../components/Tabla/Tabla';

function ShowProducts() {

  // Estado para almacenar los productos ya que es dinamico para obtener los productos de la api
  const [items, setItems] = useState([]) // Estado para almacenar los productos

  useEffect(() => {
    axiosInstance.get('/') // Realizamos una petición GET a la API para obtener los productos
      .then((response) => {
        if (response.status === 200) { // Si la respuesta es 200 (OK), almacenamos los productos en el estado
          setItems(response.data); // Almacenamos los productos en el estado
        }
        else { // Si no, lanzamos un error
          throw new Error(`[${response.status}] Error en la solicitud`);
        }
      }) // Cerramos correctamente el .then
      .catch((error) => {
        console.error('Error al obtener los productos:', error); // Mostramos el error en consola
      });
  }, []); // [] significa que el efecto se ejecutará una sola vez al montar el componente

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Productos en Sistema</h1>
        <div className='container mt-3'>
         
          {
          items.length > 0 ? // si es mayor a 0 significa que hay productos
          // un componente padre puede pasarle props a un componente hijo, en este caso le pasamos los productos a la tabla
            <Tabla items={items}/> // si hay productos mostramos la tabla con los productos este es un componente que se encarga de mostrar la tabla con los productos 
          
          : // si no hay productos mostramos un mensaje 
          <h2 style={{textAlign:'center'}}>No hay productos en el sistema</h2>

          }
        
          
        </div>
    </div>
  )
}

export default ShowProducts

