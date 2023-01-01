import {
    Action,
} from 'redux'

import {
    ADD_TASK,
} from './constants'


export interface AddTaskPayload {
    taskName: string 
    taskDescription: string
}


export interface AddTaskAction extends Action<typeof ADD_TASK> {
    payload: AddTaskPayload
}


export type TaskActionTypes = AddTaskAction
export type TaskPayloadTypes = AddTaskPayload


export const addTask = (taskName: string, taskDescription: string = ""): AddTaskAction => (
    {
        type: ADD_TASK,
        payload: {
            taskName,
            taskDescription
        }
    }
)
