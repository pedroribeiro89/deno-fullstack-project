import {Database} from "../fake-database.ts";
import {ITask} from "../models/ITask.ts";

export class TaskRepository {
    private dbConnection: Database;

    constructor(dbConnection: Database) {
        this.dbConnection = dbConnection
    }

    // async insert(task: Task) {
    //     return {id: 0, name: '', description: '', status: ''}
    // }

    async insert(task: ITask): Promise<ITask> {
        return await this.dbConnection.insert(task);//build insert ... into TASK etc
    }
}