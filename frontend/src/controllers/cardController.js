import { $authHost } from '../utils/httpConfig';

function getInitialCards() {
    return $authHost.get('/cards')
      .then(getResponseData);
}
  
function addNewCard(props) {
  return $authHost.post('/cards', props)
    .then(getResponseData);
}
  
function deleteCard(id) {
  return $authHost.delete(`/cards/${id}`)
    .then(getResponseData);
}
  
function addLike(id) {
  return $authHost.put(`/cards/${id}/likes`)
    .then(getResponseData);
}
  
function removeLike(id) {
  return $authHost.delete(`/cards/${id}/likes`)
    .then(getResponseData);
}
  
function changeLikeStatus(id, isLiked) {
    return isLiked ? removeLike(id) : addLike(id);
}
  
function getResponseData(res) {
  if (!(res.statusText === 'OK')) {
    return Promise.reject(res.data.message);
  }
  return res.data;
}

export const cardController = {
  getInitialCards,
  addNewCard,
  deleteCard,
  changeLikeStatus
};