import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

moment.locale("es-mx");
import { getPosts } from "../helpers/fetchApp";

const PostsApp = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ordenNuevo, setOrdenNuevo] = useState(true);

  useEffect(() => {
    getPosts().then((respuesta) => {
      // console.log(respuesta);
      // const datosOrdenados = respuesta.sort((a, b) => a.fecha - b.fecha);
      if (ordenNuevo) {
        setPosts(respuesta.reverse());
      } else {
        setPosts(respuesta);
      }

      setLoading(false);
    });
  }, [ordenNuevo]);

  return (
    <>
      {loading ? (
        <h3 className="text-center">Cargando...</h3>
      ) : (
        <>
          <div className="btn-group my-3">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ordenar
            </button>
            <ul className="dropdown-menu">
              <li
                className="dropdown-item ordenar-pointer"
                onClick={() => setOrdenNuevo(true)}
              >
                <span>Más nuevo</span>
              </li>
              <li
                className="dropdown-item ordenar-pointer"
                onClick={() => setOrdenNuevo(false)}
              >
                <span>Más antiguo</span>
              </li>
            </ul>
          </div>
          {posts.map((post) => (
            <div
              className="card mb-3 animate__animated animate__fadeIn"
              key={post.id}
            >
              <Link className="nav-link" to={`/post/${post.id}`}>
                <div className="card-body">
                  <h5>{post.title}</h5>
                  <div className="d-flex justify-content-between">
                    <small className="text-muted">
                      {moment(post.fecha).format("LLL")}
                    </small>
                    <small className="text-muted">{post.user}</small>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default PostsApp;
