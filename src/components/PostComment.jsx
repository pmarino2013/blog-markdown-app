import React, { useState, useEffect } from "react";

import { getComentariosByIdPost, postComentario } from "../helpers/fetchApp";

import moment from "moment";

const PostComment = ({ postId }) => {
  const [comentarios, setComentarios] = useState([]);
  const [comentario, setComentario] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  //   const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getComentariosByIdPost(postId).then((respuesta) => {
      setComentarios(respuesta);
      setLoading(false);
      setUser(JSON.parse(localStorage.getItem("user")));
    });
  }, []);

  const addComentario = (e) => {
    e.preventDefault();
    const datos = {
      id: new Date().getTime(),
      body: comentario,
      fecha: new Date(),
      postId: postId,
      user: user.name,
    };
    postComentario(datos).then((respuesta) => {
      setComentarios([...comentarios, respuesta]);
      setComentario("");
    });
  };

  return (
    <>
      {loading ? (
        <span className="text-muted">Cargando comentarios...</span>
      ) : (
        <>
          <span className="text-muted">{comentarios.length} Comentarios:</span>

          {comentarios.map((item) => (
            <div className="card my-3" key={item.id}>
              <div className="card-body d-flex align-items-center">
                <div className="align-self-start">
                  <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                </div>
                <div>
                  <span className="text-muted ms-3">
                    {item.user} - {moment(item.fecha).format("LLL")}
                  </span>
                  <p className="ms-3 fw-light">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="my-3 d-flex align-items-center">
            <img className="img-avatar" src={user.imageUrl} alt={user.name} />
            <form className=" ms-2 flex-grow-1" onSubmit={addComentario}>
              <input
                className="form-control"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                type="text"
                required
                placeholder="Escribe tu comentario"
              />
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default PostComment;
