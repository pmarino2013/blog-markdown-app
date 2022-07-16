import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

moment.locale("es-mx");
import { getPosts } from "../helpers/fetchApp";

const PostsApp = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getPosts().then((respuesta) => {
      // console.log(respuesta);
      // const datosOrdenados = respuesta.sort((a, b) => a.fecha - b.fecha);

      setPosts(respuesta.reverse());

      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <h3>Cargando...</h3>
      ) : (
        <>
          {posts.map((post) => (
            <div className="card mb-3" key={post.id}>
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
