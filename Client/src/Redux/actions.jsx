import axios from 'axios'


export function GET_TASKS(){
    const endpoint = 'http://localhost:3001/tasks'
    return async (dispatch)=>{
        try{
            const response = await axios.get(endpoint)
            console.log(response.data)

            return dispatch({
                type: 'GET_ALL_TASKS',
                payload: response.data
            })
        }catch(error){
            console.log(error)
        }
    }
}
export function GET_USERS(){
    const endpoint = 'http://localhost:3001/users'
    return async (dispatch)=>{
        try{
            const response = await axios.get(endpoint)
            console.log(response.data)
            return dispatch({
                type: 'GET_ALL_USERS',
                payload: response.data
            })
        }catch(error){
            console.log(error)
        }
    }
}
export async function ADD_TASK(task){
    const endpoint = 'http://localhost:3001/newtask'
    try{
        const response = await axios.post(endpoint, task)
        return dispatch(GET_TASKS())
    }catch(error){
        console.log(error)
    }
}

export function GET_TASKS_BY_USER_ID(id){
    return {type: 'GET_TASKS_BY_USER_ID', payload: id}


}
export function GET_BY_USER_ID(id){
    return {type: 'GET_USER_BY_ID', payload: id}


}