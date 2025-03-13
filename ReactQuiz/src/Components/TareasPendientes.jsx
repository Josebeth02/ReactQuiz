import React, {useState,useEffect} from 'react'
import CrudTareas from '../Services/CrudTareas'
import Swal from 'sweetalert2'

function TareasPendientes() {

    const[tareaUsuario,SetTareaUsuario] = useState()
    const[dato,SetDato]=useState([])
    const[editar,SetEditar]= useState()                     


  
    useEffect(() => {
      async function fetchDataUsers() {
        const agregarTarea = await CrudTareas.getTareas()
        SetDato(agregarTarea)
      };
      fetchDataUsers()
    }, [])


      function tarea(evento) {
       SetTareaUsuario(evento.target.value)
    }

    

    async function btnAgregar() {
      const tareaCreada= await CrudTareas.postTareas(tareaUsuario); 
      SetDato([...dato,tareaCreada])
      //... unir
      Swal.fire({
        title: "Se agrego correctamente!",
        icon: "success",
        draggable: true
      });
    }

   const tareaEliminada = async (id) => {
    try{
      await CrudTareas.deleteTareas(id)
      SetDato(dato.filter((tarea)=> tarea.id !== id))
    } catch (error) {
      console.error("Error") 
    }
    Swal.fire({
      title: "Se elimino correctamente!",
      icon: "success",
      draggable: true
    });
   }

    
    async function btnEditar(id) {
      const edito = await CrudTareas.updateTareas(editar,id)
      const datosEditados = await CrudTareas.getTareas()
      SetDato(datosEditados)
      editar = ""       
      Swal.fire({
        title: "Se edito correctamente!",
        icon: "success",
        draggable: true
      });             
    }

    function tareaEditada(evento) {
      SetEditar(evento.target.value)
    }


  return (
  
     <div className='padre'>
  
      <h1 className='h1'>Tareas por hacer</h1>
      <div className='container'><input className='input' placeholder='Ingresar tarea' value={tareaUsuario} onChange={tarea} type="text" /></div> <br />
      <button className='button' onClick={btnAgregar}>Agregar</button>
      {dato.map((tarea) =>(
        <p>Tarea: {tarea.tarea}
         <button className='button' onClick={e=>tareaEliminada(tarea.id)}>Eliminar</button>
         <button className='button' onClick={e=>btnEditar(tarea.id)}>Editar</button>
         <input placeholder='Editar Tarea' className='input' value={editar} onChange={tareaEditada} type="text" />
         </p>
      ))}
      
    </div>  
  
  )

}

export default TareasPendientes






