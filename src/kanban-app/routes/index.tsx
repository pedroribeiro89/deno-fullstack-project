import { Head } from "$fresh/runtime.ts";
import TaskForm from "../islands/TaskForm.tsx";
import TodoTaskList from "../islands/TodoTaskList.tsx";
import DoingTaskList from "../islands/DoingTaskList.tsx";
import DoneTaskList from "../islands/DoneTaskList.tsx";

export default function Home() {
    return (
        <>
            <Head>
                <title>Kanban App</title>
                <link rel="stylesheet" href="/task-form.css"/>
                <link rel="stylesheet" href="/task-list.css"/>
            </Head>
            <main>
                <h1>KANBAN</h1>
                <TaskForm />
                <section>
                    <TodoTaskList></TodoTaskList>
                    <DoingTaskList></DoingTaskList>
                    <DoneTaskList></DoneTaskList>
                </section>
            </main>
        </>
    );
}
