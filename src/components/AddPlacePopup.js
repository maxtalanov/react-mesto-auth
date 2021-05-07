import React from "react";

import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  //console.log('Компонент: AddPlacePopup', props)
  const [link, setLink] = React.useState('');
  const [name, setName] = React.useState('');

  function handleLinkChange(e){
    setLink(e.target.value);
  }

  function handleNameChange(e){
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name,
      link,
    })
    console.log(name, link);
  }

  return(
    <PopupWithForm name="card" title="Новое место" isOpen={props.isOpen} onClose={props.onClose}
    inputBtnSelector="create" inpitValue="Создать" onSubmit={handleSubmit}>

      <fieldset className="form__set">
        <input className="form__input form__in-name" id="card-name" type="text" name="name" placeholder="Название"
               minLength="2" maxLength="30" autoComplete="off" required onChange={handleNameChange}/>
        <span className="form__error-span" id="card-name-error" />

        <input className="form__input form__in-link" id="card-link" type="url" name="link"
               placeholder="Ссылка на картинку" required onChange={handleLinkChange}/>
        <span className="form__error-span" id="card-link-error" />
      </fieldset>

    </PopupWithForm>
  )
}

export default AddPlacePopup;
