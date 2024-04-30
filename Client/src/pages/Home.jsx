import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { GET_BY_USER_ID, GET_TASKS, GET_TASKS_BY_USER_ID, GET_USERS } from "../Redux/actions"


export default function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(GET_USERS())
        dispatch(GET_TASKS())
    },[])    
    
    const handleNavigate = () => {

        navigate('/user/1')
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleNavigate}>tarea user</button>
        </div>
    )
}