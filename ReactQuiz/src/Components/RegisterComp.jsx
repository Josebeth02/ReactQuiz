import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Llamados from '../Services/Llamados'

function RegisterComp() {
    const[nombreUsuario,SetnombreUsuario] = useState()
    const[emailUsuario,SetemailUsuario] = useState()
    const [passwordUsuario,SetpasswordUsuario] = useState()



    function nombre(evento) {
      SetnombreUsuario(evento.target.value)
    }

    function email(evento) {
        SetemailUsuario(evento.target.value)
    }

    function contrasena(evento) {
        SetpasswordUsuario(evento.target.value)
    }

    function btnEnviar() {
        Llamados.postUsers(nombreUsuario,emailUsuario,passwordUsuario);
    }


  return (
    <div className='divPrincipal'>
        <h1>Registrarse</h1>
      <label >Nombre</label> <br />
      <input className='inputTodos' placeholder='Nombre' value={nombreUsuario} onChange={nombre} type="text" />
      <br /> <br />
      <label >Email</label> <br /> 
      <input className='inputTodos' placeholder='Email' value={emailUsuario} onChange={email} type="email" />
      <br /> <br />
      <label >Contrasena</label> <br />
      <input className='inputTodos' placeholder='Password' value={passwordUsuario} onChange={contrasena} type="password" />
      <br /> <br />
      <button className='boton' onClick={btnEnviar}>Enviar</button>
      <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Aquí</Link></p>
    </div>
  )
}

export default RegisterComp
