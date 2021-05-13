import React from "react";
import { Link } from "react-router-dom";
import AuthWithForm from "./AuthWithForm";

function Register() {
  return(
    <>
      <AuthWithForm
        title="Регистрация"
        submitName="Зарегистрироваться"
        typeEmail="email"
        typePassword="password"
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
