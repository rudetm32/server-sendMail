import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';

import Swal from "sweetalert2";
import style from "./Home.module.css"

export default function Home() {

  const { register, reset, formState : { isSubmitSuccessful }, handleSubmit } =  useForm();

useEffect(() => {
  if (isSubmitSuccessful) { 
    reset({ name: "", address: "", email: "" });
  }
}, [ isSubmitSuccessful, reset ]);

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
 })
 .catch((error) => {
   Swal.fire({
     icon: 'warning',
     title: 'Revise su informacion',
     text: error,
   })
 })
}
return(
    <>
    <div className={style.conteiner}>
      <form 
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          onSubmit= { handleSubmit(onSubmit) } 
          autoComplete = "off"
          >
            <br/>
            <div>
              <h3 >Registro Bastet</h3>
              </div>
            <div >
              <TextField
                required
                id = "message-name"
                type="text" {...register("name", 
                { required: true })}
                label = "Nombre"
                variant = "standard"
              />
            </div>
            <br />
            <div>
                <TextField
                  id = "message-address"
                  type="text" {...register("address", 
                  { required: false, maxLength:20 }
                  )}
                  label = "Direccion"
                  variant = "standard"
                />
            </div>
            <br />
            <div>
                <TextField
                  required
                  id = "message-email"
                  type="email" {...register("email", {required: true})}
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
  )
};
