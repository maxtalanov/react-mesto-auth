import React from "react";

function InfoTooltip({ src, title, isOpen,onClose }) {
  const classOpen = isOpen ? 'popup_opened' : '';

  return(
    <section className={`popup popup_type_infoRegister ${classOpen}`}>
      <form className="form">
        <img className="form__result-icon" src={src} alt="Тест"/>
        <h2 className="form__result-title">{title}</h2>
        <button className="form__btn-exit popup__btn-exit hover-opacity" onClick={onClose} type="reset" />
      </form>
    </section>
  )
}

export default InfoTooltip;
