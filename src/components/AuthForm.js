import React from 'react';

//Компонент ф-ый
function AuthForm ({ title, submitName, typeEmail, typePassword, onChange, authData, submit }) {


  return(
    <form className="form-auth" onSubmit={submit}>
      <h2 className="form-auth__title">{ title }</h2>

      <fieldset className="form-auth__set">
        <input className="form-auth__input" id={typeEmail} type={typeEmail} name={typeEmail} value={authData.email} onChange={onChange}
        placeholder="Email" autoComplete="off" required/>
        {/*<span className="form-auth__error-span" id="profile-name-error" />*/}

        <input className="form-auth__input" id={typePassword} type={typePassword} name={typePassword} value={authData.password} onChange={onChange}
        placeholder="Пароль" minLength="6" maxLength="28" autoComplete="off" required />
        {/*<span className="form-auth__error-span" id="profile-status-error" />*/}
      </fieldset>

      <input className="form-auth__btn-submit hover-opacity" type="submit" value={submitName} />
    </form>
  )
}

export default AuthForm;
