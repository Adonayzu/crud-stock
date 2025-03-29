import React from 'react'

const ItemTable = ({item}) => {
  const { id, name, price, stock } = item; // Desestructuramos los items de las props

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <i style={{cursor:'pointer'}} className="bi bi-trash3"></i>
        <i style={{cursor:'pointer'}} className="bi bi-pencil-square"></i>
      </td>
    </tr>
  );
}

export default ItemTable
