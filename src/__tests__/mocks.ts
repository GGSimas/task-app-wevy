import { AuthReturn } from "@/domain/models/signin";
import { TaskReturn } from "@/domain/models/task";

export const tasksMock: TaskReturn[] = [
    { id: 1, description: 'task 1', done: false},
    { id: 2, description: 'task 2', done: false},
    { id: 3, description: 'task 3', done: false},
    { id: 4, description: 'task 4', done: false},
    { id: 5, description: 'task 5', done: false},
    { id: 6, description: 'task 6', done: false},
    { id: 7, description: 'task 7', done: false},
]

export const signInMock: AuthReturn = {
    user: {
        name: 'user test',
        email: 'usertest@email.com',
        id: '1',
    },
    token: 'any-token',
}