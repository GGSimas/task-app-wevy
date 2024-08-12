import { useMutation } from "@tanstack/react-query";
import { TasksService } from "../services/tasks-service";
import { queryClient } from "@/infra/lib/react-query";
import { TasksKey } from "./useGetTask";


const taskService = new TasksService();

export function useDeleteTask() {
    return useMutation({
        mutationFn: (taskId: number) => taskService.deleteTask(taskId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [TasksKey.GET_TASK]})
        }
    })
}