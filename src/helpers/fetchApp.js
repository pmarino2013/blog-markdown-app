export const getPosts = async () => {
  const resp = await fetch("http://localhost:8080/posts");
  const data = await resp.json();

  return data;
};

export const getPostById = async (id) => {
  const resp = await fetch(`http://localhost:8080/posts/${id}`);
  const data = await resp.json();

  return data;
};

export const addPost = async (datos) => {
  const resp = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};

export const addUser = async (usuario) => {
  try {
    const resp = await fetch("http://localhost:8080/profile", {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo guardar el usuario en la BD");
  }
};

export const getUserById = async (id) => {
  try {
    const resp = await fetch(`http://localhost:8080/profile?googleId=${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se encuentra el usuario en la BD");
  }
};
