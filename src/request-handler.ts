import {urlParse} from "./deps.ts";
import {TaskController} from "./controllers/task-controller.ts";

export class RequestHandler {
    private taskController: TaskController;
    constructor(taskController: TaskController) {
        this.taskController = taskController;
    }

    async handle(request: Request): Promise<Response> {
        const parsedUrl = urlParse(request.url);
        switch (parsedUrl.pathname) {
            case '/task': {
                return await this.taskController.handle(request);
            }
            default: {
                throw new Error();
            }
        }
    }
}