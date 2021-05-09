import React from 'react';

//Компонент ф-ый
function AuthWithForm ({ title, submitName, typeEmail, typePassword, children }) {

  return(
    <form className="form-auth">
      <h2 className="form-auth__title">{ title }</h2>

      <fieldset className="form-auth__set">
        <input className="form-auth__input" id="" type={typeEmail} name="" placeholder="Email" autoComplete="off" required/>
        {/*<span className="form-auth__error-span" id="profile-name-error" />*/}

        <input className="form-auth__input" id="" type={typePassword} name="" placeholder="Пароль"
               minLength="6" maxLength="28" autoComplete="off" required />
        {/*<span className="form-auth__error-span" id="profile-status-error" />*/}
      </fieldset>

      <input className="form-auth__btn-submit hover-opacity" type="submit" value={submitName} />
    </form>

  )
}

export default AuthWithForm;
