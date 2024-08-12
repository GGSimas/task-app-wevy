import { useMutation } from "@tanstack/react-query";
import { TasksService } from "../services/tasks-service";
import { queryClient } from "@/infra/lib/react-query";
import { TasksKey } from "./useGetTask";


const taskService = new TasksService();

export function useAddTask() {
    return useMutation({
        mutationFn: (description: string) => taskService.addTask(description),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [TasksKey.GET_TASK]})
        }
    })
}