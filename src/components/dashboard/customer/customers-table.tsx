'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
//import EditIcon from '@mui/icons-material/Edit';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

import { useSelection } from '@/hooks/use-selection';

function noop() {
  // do nothing
}

export function CustomersTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
}) {
  const rowIds = React.useMemo(() => {
    return rows.map((customer) => customer.Id);
  }, [rows]);

  const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

  const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
  const selectedAll = rows.length > 0 && selected?.size === rows.length;

  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: '800px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Activo</TableCell>
              <TableCell>Código</TableCell>
              <TableCell>Descripcion Producto</TableCell>
              <TableCell>Departamento</TableCell>
              <TableCell>Costo</TableCell>
              <TableCell>Precio Venta</TableCell>
              <TableCell>Inv. Minimo</TableCell>
              <TableCell>Inv. Maximo</TableCell>
              <TableCell>Tipo Venta</TableCell>
              <TableCell>Proveedor</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover key={row.Id}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={row.Activo}
                      onChange={(event) => {
                        if (event.target.checked) {
                          selectOne(row.Id);
                        } else {
                          deselectOne(row.Id);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>{row.Codigo}</TableCell>
                  <TableCell>{row.DescripcionArticulo}</TableCell>
                  <TableCell>{row.Departamento}</TableCell>
                  <TableCell>{row.Costo}</TableCell>
                  <TableCell>{row.PrecioVenta}</TableCell>
                  <TableCell>{row.InventarioMinimo}</TableCell>
                  <TableCell>{row.InventarioMaximo}</TableCell>
                  <TableCell>{row.TipoDeVenta}</TableCell>
                  <TableCell>{row.Proveedor}</TableCell>
                  <TableCell><IconButton onClick={() => handleEdit(row.Id)}>
                    <EditIcon />
                  </IconButton></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}