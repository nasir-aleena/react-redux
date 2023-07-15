import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';
import { showUser, deleteUser } from '../features/UserDetailSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ViewUser from './ViewUser';
import { useState } from 'react';
import './ViewUser.css';


const DisplayUsers = () =>{

    const dispatch = useDispatch();

    const [id,setId] = useState();
    const [showDet, setShowDet] = useState(false);
    const navigate = useNavigate();

    const addUserDetails = () => {
        navigate("/add");
    }

    const { users, loading } = useSelector((state) => state.app);
    console.log(users);
    useEffect(() => {
        dispatch(showUser());
    }, []);

    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id)).then(() => {
          dispatch(showUser()); // Refresh the user list after successful deletion
        //   window.location.reload(); 
        });
      };

    if (loading) {
        return (<h2>Loading</h2>);
    }


    return(
        <div className="container">
            {showDet && <ViewUser id={id} showDet={showDet} setShowDet={setShowDet}/>}
            <button className="btn btn-success my-2" onClick={addUserDetails}>Add User</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                     {users && 
                        users.map((ele) => (
                            <tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>
                                    <button className="btn btn-success mx-2" onClick={() => [setId(ele.id), setShowDet(true)]}>View</button>
                                    <button className="btn btn-primary mx-2" onClick={() => navigate(`/edit/${ele.id}`)}>Edit</button>
                                    <button className="btn btn-warning mx-2" onClick={() => handleDeleteUser(ele.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayUsers;