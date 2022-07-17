import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const NavbarApp = () => {
  // const [usuario, setUsuario] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  // useEffect(() => {
  //   setUsuario(JSON.parse(localStorage.getItem("user")));
  // }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fa fa-power-off" aria-hidden="true"></i> BlogTech
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/edit">
                Crear
              </NavLink>
            </li>
            <li className="nav-item dropdown dropstart">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className="img-avatar" src={user.imageUrl} alt="avatar" />
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/">
                    {user.name}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/login">
                    Cerrar Sesión
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarApp;
