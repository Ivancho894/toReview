import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_BY_USER_ID, GET_TASKS_BY_USER_ID } from '../Redux/actions';

export default function User() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(GET_BY_USER_ID(id));
        dispatch(GET_TASKS_BY_USER_ID(id));
    }, [dispatch, id]);

    const handleState = (e) => {
        dispatch(GET_TASKS_BY_USER_ID(id));
    }

    const tasksByUserId = useSelector(state => state.tasksByUserId);
    const userById = useSelector(state => state.userById);

    return (
        <div class='tareas'>
            <h1>User: {userById.name}</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {tasksByUserId.map(task => (
                        <tr key={task.id}>
                            <td>{task.name}</td>
                            <td>{task.description}</td>
                            <td><input type="checkbox" id={task.id} value={task.state}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={() => navigate('/tarea/create')}>Crear</button>
            <button onClick={() => navigate(`/tarea/${id}/edit`)}>Editar</button>
            <button onClick={() => navigate(`/tarea/${id}`)}>Ver</button>
        </div>
    );
}
