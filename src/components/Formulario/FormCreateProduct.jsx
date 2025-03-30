import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Importamos Formik, Form, Field y ErrorMessage de formik para crear formularios
import * as Yup from 'yup'; // Importamos Yup para validar los campos del formulario
import Button from 'react-bootstrap/Button'; // Importamos el componente Button de react-bootstrap
import FormBs from 'react-bootstrap/Form'; // Importamos el componente Form de react-bootstrap
import './formulario.css'; // Importamos el archivo CSS para estilos personalizados
import { axiosInstance } from '../../services/axios.config'; // Importamos axiosInstance para realizar peticiones HTTP


const FormCreateProduct = () => {
  
   // Valores iniciales del formulario
   const initialCredentials = {
    name: '',
    description: '',
    image: '',
    stock: '',
    price: '',
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
    <div className="container">
      {/* Formulario manejado por Formik */}
      <Formik
        initialValues={initialCredentials} // Valores iniciales del formulario
        validationSchema={formSchema} // Esquema de validación
        onSubmit={(values, { setSubmitting }) => {
          // Función que se ejecuta al enviar el formulario
          console.log(values); // Mostramos los valores en consola

          // Realizamos la petición HTTP con axios
          axiosInstance
            .post('/', values)
            .then((response) => {
              if (response.status === 201) {
                // Si la respuesta es 201 (creado), mostramos el éxito
                console.log('Producto creado:', response.data);
              } else {
                // Si no, lanzamos un error
                throw new Error(`[${response.status}] Error en la solicitud`);
              }
            })
            .catch((error) => {
              // Mostramos el error en consola
              console.error('Error al enviar la solicitud:', error);
            })
            .finally(() => {
              // Finalizamos el estado de envío
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting, errors, touched }) => (
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
              />
              {/* Mensaje de error para el campo "price" */}
              <ErrorMessage name="price" component="div" className="text-danger" />
            </FormBs.Group>

            {/* Botón para enviar el formulario */}
            <Button className="btn btn-primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Cargar nuevo producto'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormCreateProduct
