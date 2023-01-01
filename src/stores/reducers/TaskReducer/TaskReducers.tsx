import { 
    TaskState,
} from "./types"
import {
    ADD_TASK,
} from './constants'
import {
    TaskActionTypes,
    TaskPayloadTypes,
} from './actions'


const taskInitialState: TaskState[] = []


const TaskReducer = (state = taskInitialState, action: TaskActionTypes): TaskState[] => {
    let newState: TaskState[] = JSON.parse(JSON.stringify(state))
    const type:string = action.type
    const payload:TaskPayloadTypes = action.payload

    switch(action.type) {
        case ADD_TASK:
            newState = [
                ...newState,
                {
                    taskName: payload.taskName,
                    taskDescription: payload.taskDescription,
                    taskComplete: false,
                }
            ]  
    }

    return newState
}


export default TaskReducer
