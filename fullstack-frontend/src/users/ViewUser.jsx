import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({ name: "", username: "", email: "" });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:5050/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5">
          <div className="card">
            <h6 className="card-title m-2 text-center">
              Detail of user id : {user.id}
            </h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Name : </b> <span>{user.name}</span>
              </li>
              <li className="list-group-item">
                <b>Username : </b> <span>{user.username}</span>
              </li>
              <li className="list-group-item">
                <b>Email : </b> <span>{user.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
