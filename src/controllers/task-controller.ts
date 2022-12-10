import {Controller} from "./controller.ts";
import {CreateTaskService} from "../business/create-task.service.ts";

export class TaskController extends Controller {
    private createTaskService: CreateTaskService;

    constructor(createTaskService: CreateTaskService) {
        super();
        this.createTaskService = createTaskService
    }

    async handlePost(request: Request): Promise<Response> {
        const { name, description } = await request.json();
        if (name && description && name.length > 0 && description.length > 0) {
            const newTask = await this.createTaskService.execute(name, description);
            return new Response(JSON.stringify(newTask), { status: 200, });
        }
        throw new Error('Invalid params');
    }
}