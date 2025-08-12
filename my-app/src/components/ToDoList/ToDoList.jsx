import React, { useState } from 'react';
import AddTask from '../AddTask/AddTask';
import Task from '../Task/Task';
import './ToDoList.css';
function ToDoList() {
    // Functions
    const generateId = () => {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }
    const getLocalStorageTasks = () => {
        return Object.entries(localStorage).map(([key, value]) => {
            return { key, value };
        });
    }
    const addTask = () => {
        if (newTask.trim() === '') return;
        const taskId = generateId();
        setTasks([...tasks, { id: taskId, value: newTask }]);
        setNewTask('');
        localStorage.setItem(taskId, newTask);
    }
    const delTask = (indexToDelete) => {
        setTasks(tasks.filter((_, index) => index !== indexToDelete));
        localStorage.removeItem(tasks[indexToDelete].id);
    }

    
    // State
    const [tasks, setTasks] = useState(getLocalStorageTasks());
    const [newTask, setNewTask] = useState('');
    
    
    // Render
    return (
        <div className="to-do-list">
            <AddTask value={newTask} onChange={setNewTask} onClick={addTask}/>
            <div className='list'>
                {tasks.map((task, index) => (
                    <Task key={index} value={task.value} onClick={() => delTask(index)} />
                ))}
            </div>
        </div>
    );
}
export default ToDoList;