import { TaskReturn } from "@/domain/models/task";
import { axiosClient } from "@/infra/lib/axios-client";

export class TasksService {
    async getTasks() {
        const response = await axiosClient.get<{ tasks: TaskReturn[]}>('task');
        return response.data.tasks;
    }

    async addTask(description: string) {
        const response = await axiosClient.post<TaskReturn>('task', { description });

        return response.data;
    }

    async markTaskDone(taskId: number) {
       await axiosClient.patch('task', { taskId });
    }

    async deleteTask(taskId: number) {
        await axiosClient.delete(`task/${taskId}`);
    }
}