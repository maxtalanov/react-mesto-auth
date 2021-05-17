import React from "react";
import AuthForm from "./AuthForm";
import Header from "./Header";
import {Link} from "react-router-dom";

function Login({ onLogin }) {

  const [authData, setAuthData] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthData({
      ...authData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin(authData);
  }

  return(
    <>
      <Header>
        <li className="navbar__element">
          <Link className="link" to="/sign-up">
            <p className="navbar__title hover-opacity">Регистрация</p>
          </Link>
        </li>
      </Header>

      <AuthForm
        title="Войти"
        submitName="Войти"
        onChange={handleChange}
        authData={authData}
        submit={handleSubmit}
      />
    </>
  )
}

export default Login;
