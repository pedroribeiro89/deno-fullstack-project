import {ETaskStatus, ITask} from "./models/ITask.ts";

export class Database {
    private connectionString: string;
    private tasks: ITask[] = [
        { id: 1, name: 'task1', description: 'desc1', status: ETaskStatus.TODO },
        { id: 2, name: 'task2', description: 'desc2', status: ETaskStatus.DOING },
        { id: 3, name: 'task3', description: 'desc3', status: ETaskStatus.DONE },
    ]
    private currentId = 3;

    constructor(connectionString: string) {
        this.connectionString = connectionString
    }

    async sleep(ms: number) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }

    async connect() {
        await this.sleep(100)
        return this
    }

    async find(status: string | null): Promise<ITask[]> {
        await this.sleep(100)
        return status ? this.tasks.filter((task: ITask) => task.status.toString() === status) : this.tasks;
    }

    async insert(task: ITask): Promise<ITask> {
        await this.sleep(100)
        this.tasks.push({
            id: this.currentId + 1,
            ...task
        });
        ++this.currentId;
        return this.tasks[this.tasks.length-1];
    }
}