import React, {useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Llamados from '../Services/Llamados'

function LoginComp() {
    const[nombreUsuario,SetnombreUsuario] = useState()
    const[contrasenaUsuario,SetcontrasenaUsuario] = useState()
    const [usuarios,SetUsuarios]=useState()

    const navigate = useNavigate()


    useEffect(() => {

      async function fetchDataUsers() {
          const datos = await Llamados.getUsers()
          SetUsuarios(datos)
      };
      fetchDataUsers()
  })
   

    function nombre(evento) {
        SetnombreUsuario(evento.target.value)
    }

    function contrasena(evento) {
        SetcontrasenaUsuario(evento.target.value)
    }

    function btnIniciar() {
        console.log(nombreUsuario,contrasenaUsuario);
        console.log(usuarios);
        
        const resultados = usuarios.filter(usuarios => usuarios.nombre===nombreUsuario && usuarios.contrasena === contrasena)
        
        if(resultados.lenght === 0){
          console.log("Usuario o contrasena incorrecta");
       
        }else{

          navigate('/Tareas')
        }
        
    }

 

  return (
    <div className='divPrincipal'>
      <h1>Iniciar seción</h1>
      <label >Nombre</label> <br />
      <input className='inputTodos' placeholder='Nombre' value={nombreUsuario} onChange={nombre} type="text" />
      <br /> <br />
      <label>Contrasena</label> <br />
      <input className='inputTodos' placeholder='Contraseña' value={contrasenaUsuario} onChange={contrasena} type="password" />
      <br /><br />
      <button className='boton' onClick={btnIniciar}>Iniciar</button>
      <p>¿No tienes una cuenta? <Link to="/register">Registrate Aquí</Link></p>
    </div>
  )
}

export default LoginComp
