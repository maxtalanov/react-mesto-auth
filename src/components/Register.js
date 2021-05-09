import React from "react";
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
      <h3 className="form-auth__sub-title">
        Уже зарегистрированы?
        <button className="form-auth__btn-sing-in hover-opacity">Войти</button>
      </h3>
    </>
  )
}

export default Register;
