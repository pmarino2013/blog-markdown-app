import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import { addPost } from "../helpers/fetchApp";

import "../css/editor.css";

const EditorScreen = () => {
  // let posts = JSON.parse(localStorage.getItem("posts")) || [];
  const user = JSON.parse(localStorage.getItem("user"));
  const [texto, setTexto] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto && title) {
      let post = {
        id: new Date().getTime(),
        user: user.name,
        userId: user.googleId,
        fecha: new Date(),
        title,
        texto,
      };
      // posts = [...posts, post];

      addPost(post).then((respuesta) => {
        console.log(respuesta);
        setTexto("");
        setTitle("");
      });
      // localStorage.setItem("posts", JSON.stringify(posts));
    }
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-8 offset-md-2 animate__animated animate__fadeIn">
          <h3>Crea tu post </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Título</label>
              <input
                className="form-control"
                type="text"
                placeholder="Título del post"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
              ></textarea>
              <label>Comentarios</label>
            </div>
            <div className="text-muted fw-lighter">
              <small>*Escribe el contenido en formato MarkDown</small>
            </div>
            <div className="mt-2 d-flex justify-content-end">
              <button className="btn btn-primary">Guardar</button>
            </div>
          </form>
          <div className="mt-3">
            <small className="text-muted">Vista previa</small>
            <ReactMarkdown>{texto}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorScreen;
