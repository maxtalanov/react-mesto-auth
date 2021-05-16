const onError = res => res.ok  ? res.json() : Promise.reject(`Ошибка: ${res.status} - ${res.statusText}.`);
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const BASE_URL = 'https://auth.nomoreparties.co';


  // 1. Регистрация пользователя.
export const register = ({email, password}) => {
  // console.log(`ApiAuth (func 1) | key: ${password}, user: ${email}`);
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers,
    body: JSON.stringify({email, password})
  }).then(onError)
}

  // 2. Авторизация пользователя.
export const authorize = ({email, password}) => {
  // console.log(`ApiAuth (func 2)| key: ${password}, user: ${email}`);
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email, password })
  }).then(onError)
}

  // 3. Проверка токена.
export const getContent = (jwt) => {
  // console.log(`ApiAuth (func 3)| token: ${jwt}`);
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      ...headers,
      'Authorization': `Bearer ${jwt}`
    }
  }).then(onError)
}
