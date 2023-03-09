import { useState } from "react"

const Task = ({task, actualizarTask, eliminarTask}) => {
    const [ modoEdicion, setModoEdicion ] = useState(false);

    function ModoEdicion(){
        const [taskUpdate, setTaskUpdate] = useState(task.nombre);

        function handleSubmit(e){
            e.preventDefault();


        }

        function handleclickActualizar(){
            actualizarTask(task.id, taskUpdate);

            setModoEdicion(false);
        }

        return (
            <form className="flex gap-5" onSubmit={handleSubmit}>
                <input 
                    type="text"  
                    className="w-4/6 border-2 border-gray-300 rounded-md px-4 py-1"
                    value={taskUpdate}
                    onChange={e => setTaskUpdate(e.target.value)}
                />
                <button
                    className="w-1/6 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition ease-out"
                    onClick={handleclickActualizar}
                >
                    Actualizar
                </button>
            </form>
        )
    }

    function ModoNormal(){
        return (
            <div className="flex gap-5">
                <div className="w-4/6 border-2 border-gray-300 rounded-md px-4 py-1">
                    {task.nombre}
                </div>
                <button 
                    className="w-1/6 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition ease-out"
                    onClick={ () => setModoEdicion(true) }
                >
                    Editar
                </button>
                <button
                    className="w-1/6 bg-red-800 text-white rounded-md hover:bg-red-700 transition ease-out"    
                    onClick={() => eliminarTask(task.id)}
                >
                    Eliminar
                </button>
            </div>
        )
    }

  return (
    <div className="mb-7 w-full mt-10 p-10 shadow-lg text-lg bg-white rounded-md">
        { modoEdicion ? <ModoEdicion /> : <ModoNormal />}
    </div>
  )
}

export default Task
