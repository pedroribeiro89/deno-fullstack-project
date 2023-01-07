import {RequestHandler} from "./request-handler.ts";
import {Database} from "./fake-database.ts";
import {CreateTaskService} from "./business/create-task.service.ts";
import {TaskRepository} from "./repository/task.repository.ts";
import {TaskController} from "./controllers/task.controller.ts";
import {ListTaskService} from "./business/list-task.service.ts";

export class Application {

    constructor() {}

    static async createInstance(): Promise<RequestHandler> {
        const db = new Database('fake-db://localhost');
        const dbConnection = await db.connect();
        const taskRepo = new TaskRepository(dbConnection);

        const createTaskService = new CreateTaskService(taskRepo);
        const listTaskService = new ListTaskService(taskRepo);

        const taskController = new TaskController(createTaskService, listTaskService);
        return new RequestHandler(taskController);
    }

}