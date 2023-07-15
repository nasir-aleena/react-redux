import React from 'react';
import { useSelector } from 'react-redux';

const ViewUser = ( {id, showDet, setShowDet}) =>{

    const allUsers = useSelector((state) => state.app.users);
    const singleUser = allUsers.filter((ele) => ele.id === id)

    return(
        <div className="viewContainer">
            <div className="sub-container">
            <button onClick={() => setShowDet(false)} className="btn btn-primary mx-2 my-4 w-50">Back</button>
            <table className="table">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{singleUser[0].id}</td>
      <td>{singleUser[0].name}</td>
      <td>{singleUser[0].email}</td>
      <td>{singleUser[0].phone}</td>
    </tr>
    
      
  </tbody>
</table>
            </div>
        </div>
    );
}

export default ViewUser;