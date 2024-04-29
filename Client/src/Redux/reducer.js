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
            console.log(action.payload, 'kkkkkk')
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
            console.log(action.payload,'2')
            const user = allUsers.map(user => user.id == action.payload)
            return {
                ...state,
                userById : user
            }
        case 'GET_TASKS_BY_USER_ID':
            const allTasks = state.allTasks
            const id = action.payload * 1
            const tasks = allTasks.map(task => task.userId == id)
            return {
                ...state,
                tasksByUserId : tasks
            }
        case 'DELETE_TASK':
            return {
                ...state,
                allTasks : action.payload
            }
        


        default:
            return state;
    }
}