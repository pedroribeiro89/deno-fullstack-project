import {TaskRepository} from "../repository/task.repository.ts";
import {ETaskStatus, ITask} from "../models/ITask.ts";

export class CreateTaskService {
    taskRepository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    async execute(name: string, description: string): Promise<ITask> {
        return await this.taskRepository.insert({name, description, status: ETaskStatus.TODO});
    }
}