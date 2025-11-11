import { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string; 
    name: string;
    durantion: number;
    startDate: number;
    completeDate: number | null; //quando o timer chega o final
    interruptDate: number | null;// quando a Task for interrompida
    type: keyof TaskStateModel['config']
}