import { useEffect } from "react";

import { deleteTask, getAllTasks } from '../redux/action/index';
import { ALL_TASKS, DONE_TASKS, ACTIVE_TASKS } from '../redux/action/type';


import { useDispatch, useSelector } from "react-redux";
import Task from './Task';
import { Tabs } from './Tabs';

export const Tasks = () => {
    const dispatch = useDispatch();

    const tasks = useSelector(state => state.tasks);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getAllTasks());
    }, [dispatch])

    const getTasks = () => {
        if (currentTab === ALL_TASKS) {
            return tasks;
        } else if (currentTab === ACTIVE_TASKS) {
            return tasks.filter(task => !task.done)
        } else if (currentTab === DONE_TASKS) {
            return tasks.filter(task => task.done)
        }
    }

    const removeDoneTasks = () => {
        tasks.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteTask(_id));
            }
        })
    }

    return (
        <article>
         <div>
                <Tabs currentTab={currentTab} />

                {
                    tasks.some(task => task.done) ? (
                        <button
                            onClick={removeDoneTasks}
                            className="button clear"
                        >Remove Done Tasks</button>
                    ) : null    
                }
            </div>
            <ul>
            {
                getTasks()?.map(task => (
                        <Task 
                            key={task._id}
                            task={task}
                        />
                    ))
            }
            </ul>
        </article>
    )
}

export default Tasks;