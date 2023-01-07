import {Database} from "../fake-database.ts";
import {ETaskStatus, ITask} from "../models/ITask.ts";

export class TaskRepository {
    private dbConnection: Database;

    constructor(dbConnection: Database) {
        this.dbConnection = dbConnection
    }

    async insert(task: ITask): Promise<ITask> {
        return await this.dbConnection.insert(task);//build insert ... into TASK etc
    }

    async find(status: string | null): Promise<ITask[]> {
        return await this.dbConnection.find(status);
    }
}