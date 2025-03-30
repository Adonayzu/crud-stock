import React, { useState } from 'react'
import Modal from '../ModalEdit/Modal'; // Importamos el modal para editar el producto

const ItemTable = ({item, editItem}) => {
  const { id, name, price, stock } = item; // Desestructuramos los items de las props
  const [modalShow, setModalShow] = useState(false); // Estado para mostrar el modal para editar el producto

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{stock}</td>
        <td style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <i style={{cursor:'pointer'}} className="bi bi-pencil-square" onClick={() => setModalShow(true)}></i>
          <i style={{cursor:'pointer'}} className="bi bi-trash3" ></i>
          
        </td>
      </tr>
      {/* Modal para editar el producto */}
      {/* el modalShow es el estado que controla si se muestra o no el modal */}
      {/*onHide es la funcion que se ejecuta al cerrar el modal */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={item} // Pasamos el item al modal
        onSubmit={editItem} //  Pasamos la funcion editItem al modal

        
      /> {/* Pasamos el item y la funcion editItem al modal */}
    </>
  );
}

export default ItemTable
