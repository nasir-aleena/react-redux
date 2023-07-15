import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser } from '../features/UserDetailSlice';
import { useParams, useNavigate } from 'react-router-dom';

const AddUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {users} = useSelector((state) => state.app);

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (id && users && users.length > 0) {
      const singleUser = users.find((ele) => ele.id === parseInt(id));
      if (singleUser ) {
        setUser(singleUser);
      }
    }
  }, [id, users]);

  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      // Update user
      dispatch(updateUser({ id, ...user }))
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      //Create user
      dispatch(createUser(user))
        .then(() => {
          navigate('/'); 
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h2 className="w-50 mx-auto my-5">{id ? 'Update User' : 'Create User'}</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
          type="text" 
          name="name" 
          className="form-control" 
          placeholder="Enter your name" 
          value={user.name || ''}
          onChange={getUserData} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
          type="email" 
          name="email" 
          className="form-control" 
          placeholder="Enter your email" 
          value={user.email || ''}
          onChange={getUserData} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
          type="text" 
          name="phone" 
          className="form-control" 
          placeholder="Enter phone number"
          value={user.phone || ''} 
          onChange={getUserData} />
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
}

export default AddUser;