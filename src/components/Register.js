import React from "react";
import { Link } from "react-router-dom";
import AuthWithForm from "./AuthWithForm";


function Register({ onRegister }) {

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

    onRegister(authData);
  }

  return(
    <>
      <AuthWithForm
        title="Регистрация"
        submitName="Зарегистрироваться"
        typeEmail="email"
        typePassword="password"
        onChange={handleChange}
        authData={authData}
        submit={handleSubmit}
      />

      <h3 className="form-auth__sub-title">Уже зарегистрированы?
        <Link to="/sign-in" className="form-auth__link hover-opacity">
          <button className="form-auth__btn-sing-in hover-opacity">Войти</button>
        </Link>
      </h3>
    </>
  )
}

export default Register;
