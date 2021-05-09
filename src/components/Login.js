import React from "react";
import AuthWithForm from "./AuthWithForm";

function Login() {
  return(
      <AuthWithForm
        title="Войти"
        submitName="Войти"
        typeEmail="email"
        typePassword="password"
      />
  )
}

export default Login;
