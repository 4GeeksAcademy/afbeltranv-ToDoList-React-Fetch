import React, {useEffect, useState} from "react";

const ToDo=()=>{
    const[ToDoTask, setToDoTask]=useState("")
    const[ToDoTaskList, setToDoTaskList]=useState([])

    function traerLista(){	
        fetch('https://assets.breatheco.de/apis/fake/todos/user/afbeltranv')
        .then(res => res.json())
        .then(response => { setToDoTaskList(response) })
    }
    function actualizarLista(list){
        
        setToDoTaskList(list)
            fetch('https://assets.breatheco.de/apis/fake/todos/user/afbeltranv',{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(list)

            })	
    }
useEffect(()=>{
    traerLista()
})

return(
    <>
    <div className="container">
    <h1>ToDo List {ToDoTask}</h1>
    <ul>
        <li><input 
                type="text" 
                onChange={(e)=>setToDoTask(e.target.value)} 
                value={ToDoTask} 
                placeholder="Type your task"
                onKeyDown={(e)=> {if(e.key==="Enter" && ToDoTask!=""){                    
                    actualizarLista(ToDoTaskList.concat({label:ToDoTask, done:false}));
                    setToDoTask("");                    
                }}} >
            </input>                
        
        </li>
        {ToDoTaskList.map((task, index)=>
                    (<li key={index}>
                        {task.label}{" "} <span onClick={() => 
                            actualizarLista(
                                ToDoTaskList.filter(
                                    (t, currentIndex)=>
                                    index!=currentIndex))} > <i className="fa-solid fa-trash" ></i></span>
                    </li>))            
        } 
        
        </ul>
        <div>{ToDoTaskList.length} tasks in list</div>
    </div>
    </>
)

}

export default ToDo;
