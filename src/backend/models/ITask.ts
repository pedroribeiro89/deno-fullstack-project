export interface ITask {
    id?: number;
    name: string;
    description: string;
    status: ETaskStatus;
}

export const ETaskStatus = {
    TODO: 'TODO',
    DOING: 'DOING',
    DONE: 'DONE'
} as const;
export type ETaskStatus = typeof ETaskStatus[keyof typeof ETaskStatus];