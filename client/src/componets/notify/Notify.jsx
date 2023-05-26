import * as React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Swal from "sweetalert2";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import styles from "./Notify.module.css"
 

const notifyObject = [
  { id: 1, value: 'pago', label: 'Pago Realizado' },
  { id: 2, value: 'pendiente', label: 'Pago Pendiente' },
  ];

export default function Notify() {
  
  const { register, reset, formState : { isSubmitSuccessful}, handleSubmit } = useForm();
  const navigate =useNavigate()

  React.useEffect(()=>{
    if( isSubmitSuccessful ) {
      reset({ name: "", email: "" })
    }
  }, [ isSubmitSuccessful, reset ])

  const onSubmit = (data) => {
   
   axios
   .post("http://localhost:3001/send", data)
   .then((data) => {
    if (data) {
      Swal.fire({
      icon: 'success',
      title: 'Se envio una notificion al correo registrado',
      showConfirmButton : false,
      timer: 1500
    })}
    navigate("/")
  })
  .catch((error) => {
    Swal.fire({
      icon: 'warning',
      title: 'Revise su informacion',
      text: error,
    })
  })
}
  return (
    <>
    <div className={styles.conteiner}>
      <form 
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        onSubmit= { handleSubmit(onSubmit) }
        autoComplete="off"
        >
        
          <div>
            <h3>Recordatorios & Notificacion</h3>
          </div>
          <div>
            <TextField
              id="outlined-select-currency-native"
              select
              type="text" { ...register("option", 
              { required: true })
            }
              label = "Notificacion"
              SelectProps = {{
              native: true,
            }}
            variant = 'standard'
            helperText = "Por favor seleccione el tipo de mensaje a enviar"
            >
              { notifyObject.map((option) => (
              <option 
                key = { option.id } 
                value = { option.value }
                >
                  { option.label }
                  </option>
                  ))
                  }
            |</TextField>
          </div>
          <div>
            <TextField
              required
              id = "message-name"
              type="text" { ...register("name", 
              { required: true })
            }
              label = "Nombre"
              variant = "standard"
              />
          </div>
          <br/>
          <div>
            <TextField
              required
              id = "message-email"
              type="email" { ...register("email", 
              { required: true })
            }
              label = "Correo electronico"
              variant = "standard"
                />
          </div>
          <br />
          <div>
              <Button  type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </div>
      </form>
    </div>
  </>
  );
}
