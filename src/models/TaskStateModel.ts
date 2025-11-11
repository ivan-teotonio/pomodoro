import { TaskModel } from './TaskModel'

export type TaskStateModel = {
    tasks: TaskModel[]; //  historico, MainForm
    secondsRemaining: number;//Home, CountDown, Historico, MainForm, Button
    formattedSecondsRemaining: string;//Titulo, CountDown
    activeTask: TaskModel | null;//CountDown, Historico,MainForm,Button
    currentCycle: number; //1 a 8 Home
    config: {
        workTime: number; // MainForm
        shortBreakTime: number; // MainForm
        longBreakTime: number; // MainForm
    };
};