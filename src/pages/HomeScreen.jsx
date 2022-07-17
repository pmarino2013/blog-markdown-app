import React from "react";
import PostsApp from "../components/PostsApp";

const HomeScreen = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-6 offset-md-3 animate__animated animate__fadeIn">
          <PostsApp />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
