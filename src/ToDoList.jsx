import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(["Sample Task 1", "Sample Task 2"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(){
        if (newTask.trim() !== ' ') {
       setTasks([...tasks, newTask]); 
       setNewTask
        }
    }
    
    function deteleTask(Index){
        const updatedTasks = tasks.filter((element, i) => i !== Index);
        setTasks(updatedTasks);
    }

    function TaskCompleted(index){
    
    }

    



    return(
    <div className ="todo-list">
        <h1>To-Do List</h1>
        <div>  
            <input
            type="text"
            placeholder= "Enter a task..."
            value={newTask}
            onChange={handleInputChange}/>
            <button
            className="add-button"
            onClick={addTask}>
            Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index) => (
                <li key={index}>  <button 
            className="complete-button"
            onClick={() => TaskCompleted()}>
            Complete </button>
                    <span className = "task">{task}</span>
                    
                    <button
                        className= "delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                </li>
            ))}
        </ol>
    </div>);
}
export default ToDoList