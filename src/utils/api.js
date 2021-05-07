const onError = res => res.ok  ? res.json() : Promise.reject(`Ошибка: ${res.status} - ${res.statusText}.`);

export class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;

    this._groupID = 'cohort-20';
    // console.log(this._headers);
  }

  //0. Метод: Отвечает за работу синхронной выгрузки информации
  getAllInfo() {
    return Promise.all([this.getInfoUser(), this.getIntalCards()])
  }

  //1. Мето получения информации о пользователе
  getInfoUser() {
    return fetch(`${this._url}/${this._groupID}/users/me`, {
      method: "GET",
      headers: this._headers
    }).then(onError)
  }

  //2. Метод получения масива карточек
  getIntalCards() {
    return fetch(`${this._url}/${this._groupID}/cards`, {
      method: "GET",
      headers: this._headers
    }).then(onError)
  }

  //3. Метод редактирования профиля
  editYourProfile(editDataUser) {
    console.log(editDataUser, 'API 3');
    return fetch(`${this._url}/${this._groupID}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: editDataUser.name,
        about: editDataUser.about
      })
    }).then(onError)
  }

  //4. Метод добавления новой карточки
  addNewCard(data) {
    console.log(data, 'API 4');
    return fetch(`${this._url}/${this._groupID}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(onError)
  }

  //5. Метод удаления карточки
  removeCard(id) {
     // console.log(id)
    return fetch(`${this._url}/${this._groupID}/cards/${id}`, { //тут НАДО ПОПРАВИТЬ БУДЕТ ССЫЛКУ
      method: "DELETE",
      headers: this._headers
    }).then(onError)
  }

  //6. Метод: Постановка лайка
  addLike(id) {
    // console.log(`api 6 => Передача ID:${id} лайка на сервер`);
    return fetch(`${this._url}/${this._groupID}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers
    }).then(onError)
  }

  //7. Метод: Cнятие лайка
  removeLike(id) {
    // console.log('api 6');
    return fetch(`${this._url}/${this._groupID}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers
    }).then(onError)
  }

  //8. Метод Изменения аватара
  upAvatar(editDataUser) {
    // console.log(editDataUser, 'api 8');
    return fetch(`${this._url}/${this._groupID}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: editDataUser.avatar})
    }).then(onError)
  }

  //9. Метод: постановки и снятия лайка
  changeLikeCardStatus(cardID, like) {
    console.log(cardID, like);
    // Обычная реализация: 2 разных метода для удаления и постановки лайка.
    return fetch(`${this._url}/${this._groupID}/cards/likes/${cardID}`, {
      method: like ? 'PUT' : 'DELETE',
      headers: this._headers,
    }).then(onError)
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1',
  headers: {
    authorization: '812904d9-0b6e-4749-b7a8-56c99ef1e2b9',
    'Content-Type': 'application/json'
  }
});

export default api;
