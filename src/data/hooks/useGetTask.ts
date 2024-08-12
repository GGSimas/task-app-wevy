import { useQuery } from "@tanstack/react-query";
import { TasksService } from "../services/tasks-service";


const taskService = new TasksService();

export enum TasksKey {
    GET_TASK = 'GET_TASK',
}

export function useGetTask() {
    return useQuery({
        queryKey: [TasksKey.GET_TASK],
        queryFn: async () => {
            const response = await taskService.getTasks();
            return response;
        } 
    })
}