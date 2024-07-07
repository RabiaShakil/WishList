import React from 'react';
import { useState } from 'react';
import './WishList.css';

function WishList() 
{

    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskPriority, setTaskPriority] = useState();

    const ChangeName = (event) => 
    {
        setTaskName(event.target.value);
    };

    const ChangePriority = (event) =>
    {
        setTaskPriority(event.target.value);
    };

    const AddTask = () => 
    {
        if (!taskName || !taskPriority) {
            alert('Please enter both task and priority!');
            return;
          }
        
        const newTask = {name: taskName,priority: taskPriority};
        setTasks([...tasks, newTask]);
        setTaskName('');
        setTaskPriority();
    };

    const RemoveTask = (index) =>
    {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const UpdatePriority = (index, newPriority) =>
    {
        const newTasks = [...tasks];
        newTasks[index].priority = newPriority;
        setTasks(newTasks);
    };

    const MoveToTop = (index) =>
    {
        const newTasks = [...tasks];
        const itemToMove = newTasks.splice(index, 1);
        newTasks.unshift(itemToMove[0]);
        setTasks(newTasks);
    };

    return (
        <div class="Container">
        
        <div class="NavBar">
                <h1>My WishList</h1>
            </div>

            <div class="Main">
            <label>Task: </label>
            <input type="text" value={taskName} onChange={ChangeName} />
            &nbsp; &nbsp; &nbsp;
            <label>Set Priority: </label>
            <input type="number" value={taskPriority} onChange={ChangePriority} />
            &nbsp; &nbsp;&nbsp;
        <button onClick={AddTask}>Add Task</button>
            
                <br/><br/>
            
        <ul>
            {tasks.map((item, index) => (
            <li key={index}>
            {item.name} &nbsp; &nbsp;&nbsp; Priority: {item.priority}
                &nbsp; &nbsp;&nbsp;
                <button onClick={() => RemoveTask(index)}>Remove Task</button>
                &nbsp; &nbsp;&nbsp;
                <button onClick={() => MoveToTop(index)}>Move to Top</button>
                &nbsp; &nbsp;&nbsp;
                

                <button> Update Priority: </button>
                &nbsp;
                <input type="number" value={item.priority} onChange={(event) => UpdatePriority(index, event.target.value)} />
                

            </li>
            ))}
        </ul>
        
    </div>
        </div>
    );
}

export default WishList;