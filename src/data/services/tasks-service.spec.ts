import { tasksMock } from "@/__tests__/mocks";

import { TasksService } from './tasks-service';


const taskService = new TasksService();
describe('task service', () => {
    it('should be able to return all tasks',async () => {
        jest.spyOn(taskService, 'getTasks').mockResolvedValue(tasksMock);

        const response = await taskService.getTasks();

        expect(response.length).toBeGreaterThan(0)
    })
    it('should be able to return add tasks',async () => {
        const data = {id: 1, description: 'test', done: false}
        jest.spyOn(taskService, 'addTask').mockResolvedValue(data);

        const response = await taskService.addTask('test');
        expect(response).toEqual(data)
    })
    it('should be able to mark an tasks was done',async () => {
        const data = {status: 200}
        jest.spyOn(taskService, 'markTaskDone').mockResolvedValue(data);

        const response = await taskService.markTaskDone(1);

        expect(response).toEqual(data)
    })

    it('should be able to delete an task', async () => {
        const data = {status: 200}
        jest.spyOn(taskService, 'deleteTask').mockResolvedValue(data);

        const response = await taskService.deleteTask(1);

        expect(response).toEqual(data);
    })
})