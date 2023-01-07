import {Controller} from "./controller.ts";
import {CreateTaskService} from "../business/create-task.service.ts";
import {ListTaskService} from "../business/list-task.service.ts";

export class TaskController extends Controller {
    private createTaskService: CreateTaskService;
    private listTasksService: ListTaskService;

    constructor(createTaskService: CreateTaskService, listTasksService: ListTaskService) {
        super();
        this.createTaskService = createTaskService;
        this.listTasksService = listTasksService;
    }

    createHeaders(): void {
        this.responseHeaders.append('Access-Control-Allow-Origin', '*');
        this.responseHeaders.append('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
        this.responseHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
        this.responseHeaders.append('Access-Control-Max-Age', '2592000');
    }

    async handlePost(request: Request): Promise<Response> {
        const { name, description } = await request.json();
        if (name && description && name.length > 0 && description.length > 0) {
            const newTask = await this.createTaskService.execute(name, description);
            return new Response(JSON.stringify(newTask), { status: 200, headers: this.responseHeaders });
        }
        throw new Error('Invalid params');
    }

    async handleGet(request: Request): Promise<Response> {
        const status = new URL(request.url).searchParams.get('status');
        const taskList = await this.listTasksService.execute(status);
        return new Response(JSON.stringify(taskList), { status: 200, headers: this.responseHeaders });
    }


}