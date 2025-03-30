import React from "react";
import Button from "react-bootstrap/Button";
import ModalBs from "react-bootstrap/Modal"; //le cambie nombre para no confundir el componente de bootstrap con el de react-bootstrap
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Importamos Formik, Form, Field y ErrorMessage de formik para crear formularios
import * as Yup from 'yup'; // Importamos Yup para validar los campos del formulario
import FormBs from 'react-bootstrap/Form'; // Importamos el componente Form de react-bootstrap


//los props son las propiedades que se le pasan al componente Modal
//los props trae todas las propiedade del padre del ItemTable se puede colocar las tres tambien 
// pero props es mas generico se trae todo esto show={modalShow} onHide={() => setModalShow(false)}item={item} // Pasamos el item al moda
const Modal = (props) => {

   // Valores iniciales del formulario
     const initialCredentials = {
      name: props.item.name || '', // Si no hay nombre, se deja vacío
      // Se utiliza props.item para acceder a los valores del producto que se está editando
      description: props.item.description || '', // Si no hay descripción, se deja vacío
      image: props.item.image || '', // Si no hay imagen, se deja vacío
      stock: props.item.stock || '', // Si no hay stock, se deja vacío
      price: props.item.price || '', // Si no hay precio, se deja vacío
    };
  
    // Esquema de validación con Yup
    const formSchema = Yup.object().shape({
      name: Yup.string()
        .min(4, 'Nombre demasiado corto') // Validación: mínimo 4 caracteres
        .max(150, 'Nombre demasiado largo') // Validación: máximo 150 caracteres
        .required('El nombre es obligatorio'), // Validación: campo obligatorio
      description: Yup.string()
        .min(10, 'Descripción demasiado corta') // Validación: mínimo 10 caracteres
        .max(200, 'Descripción demasiado larga') // Validación: máximo 200 caracteres
        .required('La descripción es obligatoria'), // Validación: campo obligatorio
      image: Yup.string().required('La imagen es obligatoria'), // Validación: campo obligatorio
      stock: Yup.number()
        .typeError('El stock debe ser un número') // Validación: debe ser un número
        .required('El stock es obligatorio'), // Validación: campo obligatorio
      price: Yup.number()
        .typeError('El precio debe ser un número') // Validación: debe ser un número
        .required('El precio es obligatorio'), // Validación: campo obligatorio
    });

  return (
    
    <ModalBs
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <ModalBs.Header closeButton className="bg-dark">
        <ModalBs.Title id="contained-modal-title-vcenter">
        Modal heading
        </ModalBs.Title>
    </ModalBs.Header>
    <ModalBs.Body className="bg-dark">
        <h4>Centered Modal</h4>
         {/* Formulario manejado por Formik */}
      <Formik
        initialValues={initialCredentials} // Valores iniciales del formulario
        validationSchema={formSchema} // Esquema de validación
        //async es para que la funcion sea asincrona y se pueda esperar a que se ejecute
        //setSubmitting es una funcion que se encarga de manejar el estado de envio del formulario
        onSubmit={async (values, { setSubmitting }) => {
          // Función que se ejecuta al enviar el formulario
          console.log(values); // Mostramos los valores en consola
          //await es para esperar a que se ejecute la funcion onSubmit
          await props.onSubmit(props.item.id, values); // Llamamos a la función onSubmit pasada como prop y le pasamos el id del producto y los valores del formulario
          setSubmitting(false); // Finalizamos el estado de envío
          props.onHide(); // Cerramos el modal al enviar el formulario

         
        }}
      >
        {({ isSubmitting, errors, touched, handleChange}) => ( // el handleChange es una funcion que se encarga de manejar los cambios en los inputs
          // el isSubmitting es un booleano que indica si el formulario esta siendo enviado o no
          <Form>
            {/* Campo: Nombre del Producto */}
            <FormBs.Group className="mb-3">
              <label htmlFor="name">Nombre del Producto</label>
              <Field
                id="name"
                type="text"
                placeholder="Buzo"
                name="name"
                className="form-control field-input"
                onChange={handleChange} // el onChange es una funcion que se encarga de manejar los cambios en los inputs
              />
              {/* Mensaje de error para el campo "name" */}
              <ErrorMessage name="name" component="div" className="text-danger" />
            </FormBs.Group>

            {/* Campo: Descripción */}
            <FormBs.Group className="mb-3">
              <label htmlFor="description">Descripción</label>
              <Field
                id="description"
                type="text"
                placeholder="Descripción del producto"
                name="description"
                className="form-control field-input"
                onChange={handleChange} // el onChange es una funcion que se encarga de manejar los cambios en los inputs
              />
              {/* Mensaje de error para el campo "description" */}
              <ErrorMessage name="description" component="div" className="text-danger" />
            </FormBs.Group>

            {/* Campo: Imagen */}
            <FormBs.Group className="mb-3">
              <label htmlFor="image">Imagen</label>
              <Field
                id="image"
                type="text"
                placeholder="URL de la imagen"
                name="image"
                className="form-control field-input"
                onChange={handleChange} // el onChange es una funcion que se encarga de manejar los cambios en los inputs
              />
              {/* Mensaje de error para el campo "image" */}
              <ErrorMessage name="image" component="div" className="text-danger" />
            </FormBs.Group>

            {/* Campo: Stock */}
            <FormBs.Group className="mb-3">
              <label htmlFor="stock">Stock</label>
              <Field
                id="stock"
                type="number"
                placeholder="Cantidad en stock"
                name="stock"
                className="form-control field-input"
                onChange={handleChange} // el onChange es una funcion que se encarga de manejar los cambios en los inputs
              />
              {/* Mensaje de error para el campo "stock" */}
              <ErrorMessage name="stock" component="div" className="text-danger" />
            </FormBs.Group>

            {/* Campo: Precio */}
            <FormBs.Group className="mb-3">
              <label htmlFor="price">Precio</label>
              <Field
                id="price"
                type="number"
                placeholder="Precio del producto"
                name="price"
                className="form-control field-input"
                onChange={handleChange} // el onChange es una funcion que se encarga de manejar los cambios en los inputs
              />
              {/* Mensaje de error para el campo "price" */}
              <ErrorMessage name="price" component="div" className="text-danger" />
            </FormBs.Group>

            {/* Botón para enviar el formulario */}
            <Button className="btn btn-primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Actualizar producto'}
            </Button>
          </Form>
        )}
      </Formik>
    </ModalBs.Body>
    <ModalBs.Footer className="bg-dark">
        <Button onClick={props.onHide}>Close</Button>
    </ModalBs.Footer>
    </ModalBs>
    
  );
};

export default Modal;


