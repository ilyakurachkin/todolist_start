import React from 'react';
import {FilterValuesType} from "./App";

type TypeTitleProps = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: number) => void
    changeFilter: (value:FilterValuesType)=> void
}

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}


const Todolist = (props: TypeTitleProps) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={()=>{
                                props.removeTasks(t.id)
                            }}>✖</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=> {
                    props.changeFilter('All')
                }}>All</button>
                <button onClick={()=> {
                    props.changeFilter('Active')
                }}>Active</button>
                <button onClick={()=>{
                    props.changeFilter('Completed')
                }}>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;