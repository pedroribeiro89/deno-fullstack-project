import {TaskRepository} from "../repository/task.repository.ts";
import {ITask} from "../models/ITask.ts";

export class ListTaskService {
    taskRepository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    async execute(status: string | null = null): Promise<ITask[]> {
        return await this.taskRepository.find(status);
    }
}