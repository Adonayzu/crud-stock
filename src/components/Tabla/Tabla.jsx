import React from 'react'
import TableBs from 'react-bootstrap/Table'; //le cambie nombre para no confundir el componente de bootstrap con el de react-bootstrap
import ItemTable from '../ItemTable/ItemTable';

//se puede asi const Tabla = (props) => {  o
const Tabla = ({items, editItem}) => {
   // console.log(items);
   //const { items } = props // Desestructuramos los items de las props

  return (
    //como le cambie de nombre el componente de bootstrap a TableBs, ahora lo llamo TableBs
    <TableBs striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#ID</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Stock</th>
          <th style={{textAlign:'center'}}>Modificar</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <ItemTable item={item} key={i} editItem={editItem} />
        ))}
      </tbody>
    </TableBs>
  );
}

export default Tabla

