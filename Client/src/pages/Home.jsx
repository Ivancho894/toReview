import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { GET_TASKS, GET_USERS } from "../Redux/actions"


export default function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(GET_USERS())
        dispatch(GET_TASKS())
    },[])    

    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=>navigate('/user/1')}>tarea user</button>
        </div>
    )
}