import { useState } from "react";
import Task from "./Task";

const TaskLIstApp = () => {
    const [ taskNombre, setTaskNombre ] = useState('');
    const [ taskLista, setTaskLista ] = useState([]);

    function handleSubmit(e){
        e.preventDefault();

        const newTask = {
            id: Math.random().toString(30).substring(2),
            nombre: taskNombre,
            completed: false
        }

        setTaskLista([newTask, ...taskLista]);
        setTaskNombre('');
    }

    function actualizarTask(id, valor){
        const temp = [...taskLista];
        const task = temp.find( elemento => elemento.id === id );

        task.nombre = valor;

        setTaskLista(temp);
    }

    function eliminarTask(id){
        const temp = taskLista.filter( task => task.id !== id );

        setTaskLista(temp);
    }

  return (
    <div className="container mx-auto flex-col">
        <div className="font-bold text-blue-800 text-4xl text-center my-10">
            <h1>Agrega tus Tareas</h1>
        </div>

        <form className="flex gap-4 justify-center bg-white py-10 rounded-md shadow-lg px-10" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nueva Tarea"
                className="border-gray-300 border-2 font-bold text-lg rounded-md w-3/4 py-2 px-4"
                value={taskNombre}
                onChange={ e => setTaskNombre(e.target.value) }
            />
            <input 
                type="submit"
                value="Guardar"
                className="bg-blue-800 px-4 uppercase rounded-md text-white font-bold cursor-pointer hover:bg-blue-700 transition ease-out w-1/4"
                onClick={handleSubmit}
            />
        </form>

        <div>
            { taskLista.map( task => (
                <Task key={task.id} task={task} actualizarTask={actualizarTask} eliminarTask={eliminarTask}/>
            ) ) }
        </div>
    </div>
  )
}

export default TaskLIstApp
