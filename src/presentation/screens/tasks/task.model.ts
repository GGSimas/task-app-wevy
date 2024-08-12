import { useAddTask } from "@/data/hooks/useAddTask";
import { useDeleteTask } from "@/data/hooks/useDeleteTask";
import { useGetTask } from "@/data/hooks/useGetTask";
import { useMarkTaskDone } from "@/data/hooks/useMarkTaskDone";
import { useAuthContext } from "@/presentation/context/auth-context";
import { useState } from "react";


export type TaskModelReturn = ReturnType<typeof useTaskModel>;

export function useTaskModel() {
    const [taskDescription, setTaskDescription] = useState('');
    const { handleLogout } = useAuthContext();
    const {data: tasks, isLoading, refetch, isRefetching } = useGetTask();
    const { mutateAsync:  addTask} = useAddTask();
    const { mutateAsync: markTaskWasDone } = useMarkTaskDone();
    const { mutateAsync: removeTaskFromList } = useDeleteTask()
  
    async function handleAddTask(description: string) {
        await addTask(description)
        setTaskDescription('');
    }
    
    async function handleMarkTaskWasDone(taskId:number) {
        await markTaskWasDone(taskId);
    }

    async function handleRemoveTask(taskId:number) {
        await removeTaskFromList(taskId);
    }
   const hasTasks = Array.isArray(tasks) && tasks.length !== 0;

    const tasksOpen = hasTasks ? tasks.length : 0;
    const tasksDone = hasTasks ? tasks.filter(item => item.done).length : 0;

    return {
        tasks: tasks?.reverse(),
        taskDescription,
        tasksOpen,
        tasksDone,
        isLoading,
        refetch,
        isRefetching,
        setTaskDescription,
        handleAddTask,
        handleMarkTaskWasDone,
        handleRemoveTask,
        handleLogout,
    }
}