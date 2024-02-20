import { useState } from "react";


export default function NewTasks({onAdd}){

    const[newTasks,setNewTasks] = useState("");

    function addTasks(event){
        setNewTasks(event.target.value);
    }

    function AddTasks(){

        if(newTasks.trim() === '') return;
        
        onAdd(newTasks);
        setNewTasks("");
    }

    return(
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={addTasks}
            value={newTasks}/>
            <button className="text-stone-700 hover:text-stone-950"
            onClick={AddTasks}>Add Tasks</button>
        </div>
    );
}