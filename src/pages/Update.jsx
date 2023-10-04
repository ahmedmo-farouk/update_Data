
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

function Update() {
const {id} = useParams();
const users = useSelector((state) => state.users);
const ex = users.filter(f => f.id == id)
const {name , email} = ex[0];
  const   [uname, setName] = useState(name);
  const   [uemail, setEmail] = useState(email);
  const   dispatch = useDispatch();
  const   navigate = useNavigate();
  const   handelUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ 
        id: id,
        name: uname,
        email, uemail
         }));
         navigate('/')
        };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>update User</h3>
        <form onSubmit={handelUpdate}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="enter name"
              className="form-control"
              value={uname}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="enter email"
              className="form-control"
              value={uemail}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Update ;
