import React from "react";
import AuthWithForm from "./AuthWithForm";

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
      <AuthWithForm
        title="Войти"
        submitName="Войти"
        typeEmail="email"
        typePassword="password"
        onChange={handleChange}
        authData={authData}
        submit={handleSubmit}
      />
  )
}

export default Login;
