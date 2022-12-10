import {ITask} from "./models/ITask.ts";

export class Database {
    private connectionString: string;
    private tasks: ITask[] = [];
    private currentId = 0;

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

    async find() {
        await this.sleep(100)
        return [
            {value: 'Test1'},
            {value: 'Test2'},
            {value: 'Test3'}
        ]
    }

    async insert(task: ITask) {
        await this.sleep(100)
        this.tasks.push({
            id: this.currentId + 1,
            ...task
        });
        ++this.currentId;
        console.log(this.tasks);
        return this.tasks[this.tasks.length-1];
    }
}