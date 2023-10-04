import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {  NavLink,  } from "react-router-dom";
import { deleteUser } from './UserReducer';
function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
            dispatch(deleteUser({id: id}))
    }
  return (
    <div className='container'>
        <h2>Crud App with json</h2>
        <NavLink className='btn btn-sm btn-primary m-2' to="/create"   >Create + </NavLink>

        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user , index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <NavLink to={`/edit/${user.id}`} className=' btn btn-sm btn-primary m-2' >Edit</NavLink>
                            <button onClick={() => handleDelete(user.id)}   className=' btn btn-sm btn-primary'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default Home


