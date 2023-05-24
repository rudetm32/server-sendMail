import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';

import style from "./Home.module.css"

export default function Home() {

  const { register, reset, formState : { errors, isSubmitSuccessful }, handleSubmit } =  useForm({
  defaultValues :{}
});

useEffect(() => {
  if (isSubmitSuccessful) { 
    reset({ name: "", address: "", email: "" });
  }
}, [ isSubmitSuccessful, reset ]);

const onSubmit = (data) => {
  axios
  .post("http://localhost:3001/send", data)
  .then((data) => {
    if (data) {Swal.fire({
          icon: 'success',
          title: 'Se envio una notificacion al correo registrado',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error al registrar el usuario',
          text: 'Por favor, inténtelo de nuevo',
          confirmButtonText: 'OK'
        })
      }
    })
    .catch((error) => {
      Swal.fire({
      icon: 'warning',
      title: 'correo incorrecto',
      text: error,
      confirmButtonText: 'OK'
    });
  });
};

return(
    <>
    <div className={style.conteiner}>
      <form p={2} 
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          }} onSubmit= { handleSubmit(onSubmit) } >
            <div><h3 >Formulario de Registro</h3></div>
            
            <div >
              <TextField
                required
                id = "message-name"
                type="text" {...register("name", {required: true, maxLength:20})}
                label = "Nombre"
                variant = "standard"
              />
                {errors.name?.type==="maxLength" && <p >campo requerido</p>}
            </div>
            <br />
            <div>
                <TextField
                  id = "message-address"
                  type="text" {...register("address", {required: false, maxLength:20})}
                  label = "Direccion"
                  variant = "standard"
                />
                  {errors.address?.type==="maxLength" && <p >ingrese una direccion</p>}
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
                  {errors.email?.type==="maxLength" && <p >Ingrese un correo valido</p>}
            </div>
            <br />
            <div>
              <Button  type="submit" variant="contained" color="success">
                Enviar
              </Button>
            </div>
      </form>
    </div>
  </>
  )
};
