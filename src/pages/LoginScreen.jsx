import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { getUserById, addUser } from "../helpers/fetchApp";
import "../css/login.css";

const LoginScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  const responseGoogle = async (response) => {
    // console.log(response);
    if (response?.error) {
      console.log(response.error);
    } else {
      const usuario = response.profileObj;
      let validar = await getUserById(usuario.googleId);
      if (validar.length === 0) {
        // console.log(validar);
        await addUser(usuario);
      }
      localStorage.setItem("user", JSON.stringify(usuario));
      navigate("/");
    }
  };
  return (
    <div className="container">
      <div className="row row-login">
        <div className="col-12 col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body text-center">
              <h3>
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                Bienvenido!
              </h3>
              <GoogleLogin
                clientId="877760850378-q81jlodd8ftkpmni94p679p3p8i1v8re.apps.googleusercontent.com"
                buttonText="Inicie sesión con Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
