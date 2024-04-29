import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { GET_TASKS_BY_USER_ID,GET_BY_USER_ID } from '../Redux/actions';


export default function User(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams();
    const [user,setUser] =useState({name:""})
    const [tasks,setTasks] =useState([])
    
    console.log(id*1)
    useEffect(()=>{
        dispatch(GET_BY_USER_ID(id*1))
        dispatch(GET_TASKS_BY_USER_ID(id*1))
    },[])
    const tasksByUserId = useSelector(state=>state.tasksByUserId)
    const userById = useSelector(state=>state.userById)
    setTasks(tasksByUserId)
    setUser(userById)

    console.log(tasks,user)

    return(
        <div>
            <h1>User</h1>
            <h3>{user?.name}</h3>
            {tasks?.map(task=>{
                return(
                    <div>
                        <h4>{task?.name}</h4>
                        <h4>{task?.description}</h4>
                    </div>
                )
                })}
            

            <button onClick={()=>navigate('/tarea/create')}>Crear</button>
            <button onClick={()=>navigate('/tarea/1/edit')}>Editar</button>
            <button onClick={()=>navigate('/tarea/1')}>Editar</button>
        </div>
    )
}