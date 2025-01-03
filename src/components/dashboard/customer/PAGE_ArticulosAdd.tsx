import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const validationSchema = Yup.object({
  Codigo: Yup.string().required('Código es requerido'),
  DescripcionArticulo: Yup.string().required('Descripción del Artículo es requerida'),
  Departamento: Yup.string().required('Departamento es requerido'),
  Costo: Yup.number().required('Costo es requerido').positive('Debe ser un número positivo'),
  PrecioVenta: Yup.number().required('Precio de Venta es requerido').positive('Debe ser un número positivo'),
  InventarioMinimo: Yup.number().required('Inventario Mínimo es requerido').positive('Debe ser un número positivo'),
  InventarioMaximo: Yup.number().required('Inventario Máximo es requerido').positive('Debe ser un número positivo'),
  TipoDeVenta: Yup.string().required('Tipo de Venta es requerido'),
  Proveedor: Yup.string().required('Proveedor es requerido')
});

export default function Page_ArticulosAdd({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values) => {
    // Lógica para manejar el envío del formulario
    console.log('Datos del formulario:', values);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Agregar Artículo</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{
            Codigo: '',
            DescripcionArticulo: '',
            Departamento: '',
            Costo: '',
            PrecioVenta: '',
            InventarioMinimo: '',
            InventarioMaximo: '',
            TipoDeVenta: '',
            Proveedor: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                name="Codigo"
                label="Código"
                fullWidth
                margin="dense"
                variant="outlined"
                error={touched.Codigo && Boolean(errors.Codigo)}
                helperText={touched.Codigo && errors.Codigo}
              />
              <Field
                as={TextField}
                name="DescripcionArticulo"
                label="Descripción del Artículo"
                fullWidth
                margin="dense"
                variant="outlined"
                error={touched.DescripcionArticulo && Boolean(errors.DescripcionArticulo)}
                helperText={touched.DescripcionArticulo && errors.DescripcionArticulo}
              />
              <Field
                as={TextField}
                name="Departamento"
                label="Departamento"
                fullWidth
                margin="dense"
                variant="outlined"
                error={touched.Departamento && Boolean(errors.Departamento)}
                helperText={touched.Departamento && errors.Departamento}
              />
              <Field
                as={TextField}
                name="Costo"
                label="Costo"
                type="number"
                fullWidth
                margin="dense"
                variant="outlined"
                error={touched.Costo && Boolean(errors.Costo)}
                helperText={touched.Costo && errors.Costo}
              />
              <Field
                as={TextField}
                name="PrecioVenta"
                label="Precio de Venta"
                type="number"
                fullWidth
                margin="dense"
                variant="outlined"
                error={touched.PrecioVenta && Boolean(errors.PrecioVenta)}
                helperText={touched.PrecioVenta && errors.PrecioVenta}
              />
              <Field
                as={TextField}
                name="InventarioMinimo"
                label="Inventario Mínimo"
                type="number"
                fullWidth
                margin="dense"
                variant="outlined"
                error={touched.InventarioMinimo && Boolean(errors.InventarioMinimo)}
                helperText={touched.InventarioMinimo && errors.InventarioMinimo}
              />
              <Field
                as={TextField}
                name="InventarioMaximo"
                label="Inventario Máximo"
                type="number"
                fullWidth
                margin="dense"
                variant="outlined"
                error={touched.InventarioMaximo && Boolean(errors.InventarioMaximo)}
                helperText={touched.InventarioMaximo && errors.InventarioMaximo}
              />
              <Field
                as={TextField}
                name="TipoDeVenta"
                label="Tipo de Venta"
                fullWidth
                margin="dense"
                variant="outlined"
                error={touched.TipoDeVenta && Boolean(errors.TipoDeVenta)}
                helperText={touched.TipoDeVenta && errors.TipoDeVenta}
              />
              <Field
                as={TextField}
                name="Proveedor"
                label="Proveedor"
                fullWidth
                margin="dense"
                variant="outlined"
                error={touched.Proveedor && Boolean(errors.Proveedor)}
                helperText={touched.Proveedor && errors.Proveedor}
              />
              <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button type="submit">Agregar</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}