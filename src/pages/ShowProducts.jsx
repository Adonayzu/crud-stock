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

  //el parametro data es el objeto que contiene los datos del producto a editar
  //el id es el id del producto a editar
  const editItem = (id, data) => {
    console.log("Editando producto con ID:", id); // Log para depuración
    // Realizamos la petición HTTP con axios
    axiosInstance
      .put(`/${id}`, data) // Usamos PUT y pasamos el ID del producto en la URL
      .then((response) => {
        if (response.status === 200) {
          // Si la respuesta es 200 (OK), mostramos el éxito
          console.log("Producto actualizado:", response.data);
          // Opcional: Actualizar la lista de productos en el estado
          setItems((prevItems) =>
            prevItems.map((item) =>
              item.id === id ? { ...item, ...data } : item // lleva 3 puntos, el primero es el id, el segundo es el producto y el tercero es el nuevo producto
            )
          );
        } else {
          // Si no, lanzamos un error
          throw new Error(`[${response.status}] Error en la solicitud`);
        }
      })
      .catch((error) => {
        // Mostramos el error en consola
        console.error("Error al enviar la solicitud:", error);
      });
  };

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Productos en Sistema</h1>
        <div className='container mt-3'>
         
          {
          items.length > 0 ? // si es mayor a 0 significa que hay productos
          // un componente padre puede pasarle props a un componente hijo, en este caso le pasamos los productos a la tabla
            <Tabla items={items} editItem={editItem}/> // si hay productos mostramos la tabla con los productos este es un componente que se encarga de mostrar la tabla con los productos 
          
          : // si no hay productos mostramos un mensaje  es como un else
          <h2 style={{textAlign:'center'}}>No hay productos en el sistema</h2>

          }
        
          
        </div>
    </div>
  )
}

export default ShowProducts

