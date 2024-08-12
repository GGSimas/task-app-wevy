import { useTaskModel } from "./task.model";
import { TaskView } from "./tasks.view";

export function Task() {
    const taskModel = useTaskModel();

    return <TaskView {...taskModel}/>
}