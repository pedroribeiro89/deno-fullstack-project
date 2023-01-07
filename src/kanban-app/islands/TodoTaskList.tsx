import { useEffect, useState } from "preact/hooks";
import {Task} from "../models/types.ts";

export default function TodoTaskList() {
    const [tasks, setTasks] = useState<{success: boolean, tasks: Task[]}>({success: true, tasks: []})
    useEffect(async () => {
        try {
            const queryParams = new URLSearchParams({status: 'TODO'});
            const response = await fetch('http://localhost:8080/tasks?' + queryParams);
            setTasks({success: true, tasks: await response.json()});
        } catch (error) {
            console.error(error);
            alert("Something went wrong! Error on loading todo task list!");
            setTasks({success: false, tasks: []});
        }
    }, []);

    if (tasks.success) {
        return (
            <section className="task-list">
                <h2>TODO</h2>
                {tasks.tasks.map((task: Task) => (
                    <div key={task.id}>
                        <p className='task-list-title'>{task.name}</p>
                        <p>{task.description}</p>
                        <p>{task.status}</p>
                    </div>
                ))}
            </section>
        );
    }
    return <>Something went wrong! Error on loading todo task list!</>;

}