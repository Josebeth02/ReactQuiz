import React from 'react'

function LoginComp() {
    const[nombreUsuario,SetnombreUsuario] = useState()
    const[contrasenaUsuario,SetcontrasenaUsuario] = useState()

    function nombre(evento) {
        SetnombreUsuario(evento.target.value)
    }

    function contrasena(evento) {
        SetcontrasenaUsuario(evento.target.value)
    }

    function btnIniciar() {
        console.log(nombreUsuario,contrasenaUsuario);
        
    }



  return (
    <div>
      <h1>Iniciar seción</h1>
      <label >Nombre</label> <br />
      <input value={nombreUsuario} onChange={nombre} type="text" />
      <br /> <br />
      <label>Contrasena</label> <br />
      <input value={contrasenaUsuario} onChange={contrasena} type="password" />
      <br /><br />
      <button onClick={btnIniciar}>Iniciar</button>
    </div>
  )
}

export default LoginComp
