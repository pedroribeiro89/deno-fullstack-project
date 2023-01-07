export interface Task {
    id: number;
    name: string;
    description: string;
    status: TaskStatus;
}

export type TaskStatus = 'TODO' | 'DOING' | 'DONE';
