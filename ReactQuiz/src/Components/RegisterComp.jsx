import React, { useState } from 'react'

function RegisterComp() {
    const[registerUsuario,SetregisterUsuario] = useState()
    const[emailUsuario,SetemailUsuario] = useState()
    const [passwordUsuario,SetpasswordUsuario] = useState()



    function register(evento) {
        SetregisterUsuario(evento.target.value)
    }

    function email(evento) {
        SetemailUsuario(evento.target.value)
    }

    function password(evento) {
        SetpasswordUsuario(evento.target.value)
    }

    function btnEnviar() {
        console.log(registerUsuario,emailUsuario,passwordUsuario);
        
    }


  return (
    <div>
        <h1>Registrarse</h1>
      <label >Nombre Completo</label> <br />
      <input value={registerUsuario} onChange={register} type="text" />
      <br /> <br />
      <label >Email</label> <br />
      <input value={emailUsuario} onChange={email} type="email" />
      <br /> <br />
      <label >Contrasena</label> <br />
      <input value={passwordUsuario} onChange={password} type="password" />
      <br /> <br />
      <button onClick={btnEnviar}>Enviar</button>
    </div>
  )
}

export default RegisterComp
