import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Home() {
  return (
    <>
    <h1>Formulario de registro</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='conteiner'>
      <div>
      <TextField
          required
          id="filled-required"
          label="Nombre"
          variant="filled"
        />
          </div>
          <div>
          <TextField
          required
          id="filled-required"
          label="Direccion"
          variant="filled"
        />  
          </div>
      <div > 
        <TextField
          required
          id="filled-required"
          label="Correo Electronico"
          variant="filled"
        />
      </div>
      </div>
      
      
    </Box>
    </>
    
  );
}
