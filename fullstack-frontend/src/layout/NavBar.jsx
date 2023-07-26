import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Full Stack Template
        </Link>

        <Link className="btn btn-outline-light" to={"/add-user"}>
          Add User
        </Link>
      </div>
    </nav>
  );
};
