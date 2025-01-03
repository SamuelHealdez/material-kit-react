'use client';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';

import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';
import type { Customer } from '@/components/dashboard/customer/customers-table';
import Page_ArticulosAdd from '@/components/dashboard/customer/Page_ArticulosAdd';


const customers = [
  {
    "Id": 1,
    "Activo": true,
    "Codigo": "A1001",
    "DescripcionArticulo": "Laptop HP Pavilion 15",
    "Departamento": "Electrónica",
    "Costo": 650.00,
    "PrecioVenta": 850.00,
    "InventarioMinimo": 5,
    "InventarioMaximo": 50,
    "TipoDeVenta": "Unidad",
    "Proveedor": "Tech Solutions S.A."
  },
  {
    "Id": 2,
    "Activo": true,
    "Codigo": "A2003",
    "DescripcionArticulo": "Silla ergonómica de oficina",
    "Departamento": "Muebles",
    "Costo": 120.00,
    "PrecioVenta": 199.99,
    "InventarioMinimo": 10,
    "InventarioMaximo": 100,
    "TipoDeVenta": "Unidad",
    "Proveedor": "Muebles y Estilo Ltda."
  },
  {
    "Id": 3,
    "Activo": false,
    "Codigo": "A3005",
    "DescripcionArticulo": "Impresora multifuncional Epson",
    "Departamento": "Electrónica",
    "Costo": 180.00,
    "PrecioVenta": 250.00,
    "InventarioMinimo": 3,
    "InventarioMaximo": 30,
    "TipoDeVenta": "Unidad",
    "Proveedor": "Print Solutions Inc."
  }
] satisfies Customer[];

export default function Page(): React.JSX.Element {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  const page = 0;
  const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Articulos</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained" onClick={handleClickOpen}>
            Agregar
          </Button>
          <Page_ArticulosAdd open={open} setOpen={setOpen} />
        </div>
      </Stack>
      <CustomersFilters />
      <CustomersTable
        count={paginatedCustomers.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
