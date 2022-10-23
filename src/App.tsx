import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";

export type FilterValuesType = 'All' | 'Active' | 'Completed'

function App() {
    let [tasks,setTasks] =useState(
        [
            { id: 1,title: 'HTML&CSS',isDone: true},
            { id: 2,title: 'Js',isDone: true},
            { id: 3,title: 'ReactJs',isDone: false},
            { id: 4,title: 'ReactJs',isDone: false}
        ]
    )

    let [filter, setFilter] = useState<FilterValuesType>('All')
    let tasksForTodolist = tasks

    if (filter === 'Active') {
        tasksForTodolist = tasks.filter(tasks => !tasks.isDone)
    }
    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter(tasks => tasks.isDone)
    }



    function removeTasks(Id: number ) {
        tasks = tasks.filter(tasks => tasks.id !== Id)
        setTasks(tasks)
    }

    function changeFilter(value:FilterValuesType) {
        setFilter(value)
    }



    return (
        <div className="App">
            <Todolist
                title = "What to learn"
                tasks={tasksForTodolist}
                removeTasks={removeTasks}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
