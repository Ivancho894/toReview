const initialState = {
    allTasks : [],
    allUsers : [],
    taskById : {},
    userById : {},
    tasksByUserId : []
}

export default function(state = initialState, action){
    switch(action.type){
        case 'GET_ALL_TASKS':
            return {
                ...state,
                allTasks : action.payload
            }
        case 'GET_ALL_USERS':
            return {
                ...state,
                allUsers : action.payload
            }
        case 'GET_TASK_BY_ID':
            return {
                ...state,
                allTasks : action.payload
            }
        case 'GET_USER_BY_ID':
            const allUsers = state.allUsers
            console.log(action.payload,allUsers,'2')
            const user = allUsers.filter(user => user.id == action.payload)[0]
            console.log(user, '3')
            return {
                ...state,
                userById : user
            }
        case 'GET_TASKS_BY_USER_ID':
            const allTasks = state.allTasks
            const id = action.payload * 1
            const tasks = allTasks.filter(task => task.userId == id)
            return {
                ...state,
                tasksByUserId : tasks
            }
        case 'DELETE_TASK':
            return {
                ...state,
                allTasks : action.payload
            }
        
        case 'UPDATE_TASK_STATE':
            return {
                ...state,
                allTasks : action.payload
            }

        default:
            return state;
    }
}