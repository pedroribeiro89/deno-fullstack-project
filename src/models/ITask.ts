export interface ITask {
    id?: number;
    name: string;
    description: string;
    status: ETaskStatus;
}

export enum ETaskStatus {
    TODO,
    DOING,
    DONE
}