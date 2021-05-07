import React from "react";

import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup(props) {
  //console.log(props, 'Компонент: EditAvatarPopup');
  const inputRef =  React.useRef();


  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return(
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
    inputBtnSelector="save" inpitValue="Сохранить">

      <fieldset className="form__set">
        <input className="form__input form__in-link" id="avatar-link" type="url" name="avatar"
               placeholder="Ссылка на картинку" required ref={inputRef}/>
        <span className="form__error-span" id="avatar-link-error" />
      </fieldset>

    </PopupWithForm>
  )
}

export default EditAvatarPopup;
