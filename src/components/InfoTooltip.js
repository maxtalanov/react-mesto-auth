import React from "react";
import successful from "../images/successful.svg";
import failed from "../images/failed.svg";
function InfoTooltip() {


  return(
    <section className={`popup popup_type_infoRegister`}> //popup_opened
      <form className="form">
        <img className="form__result-icon" src={successful} alt="Тест"/>
        <h2 className="form__result-title">Вы успешно зарегистрировались!</h2>
        <button className="form__btn-exit popup__btn-exit hover-opacity" type="reset" />
      </form>
    </section>
  )
}

export default InfoTooltip;
