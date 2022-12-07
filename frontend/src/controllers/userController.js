import { $authHost, $host } from '../utils/httpConfig';

function login(props) {
  return $host.post('/signin', props)
    .then(getResponseData);
}

function register(props) {
  return $host.post('/signup', props)
    .then(getResponseData);
}

function checkToken(token) {
  return $authHost.get('users/me')
    .then(getResponseData);
}

function getUserInfo() {
  return $authHost.get('/users/me')
    .then(getResponseData);
}

function updateUserInfo(props) {
  return $authHost.patch('/users/me', props)
    .then(getResponseData);
}

function updateUserAvatar(props) {
  return $authHost.patch('/users/me/avatar', props)
    .then(getResponseData);
}

function getResponseData(res) {
  if (!(res.statusText === 'OK')) {
    return Promise.reject(res.data.message);
  }
  return res.data;
}

export const userController = {
  login,
  register,
  checkToken,
  getUserInfo,
  updateUserAvatar,
  updateUserInfo,
};