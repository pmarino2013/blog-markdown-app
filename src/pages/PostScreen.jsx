import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { getPostById } from "../helpers/fetchApp";

const PostScreen = () => {
  const { id } = useParams();
  console.log(id);
  const [post, setPost] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getPostById(id).then((respuesta) => {
      setPost(respuesta);
      setloading(false);
    });
  }, [id]);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-8 offset-md-2">
          {loading ? (
            <h3>Cargando...</h3>
          ) : (
            <>
              <h3>{post.title}</h3>
              <ReactMarkdown>{post.texto}</ReactMarkdown>
              <div className="d-flex justify-content-between">
                <small className="text-muted">
                  {moment(post.fecha).format("LLL")}
                </small>
                <small className="text-muted">{post.user}</small>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostScreen;
