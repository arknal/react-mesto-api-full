import PopupWithForm from "./PopupWithForm";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, ...props }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile-change"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="form__field">
        <input
          value={name}
          required
          minLength="2"
          maxLength="40"
          type="text"
          id="nameInput"
          name="name"
          className="form__input"
          placeholder="Введите имя"
          onChange={(e) => handleNameChange(e)}
        />
        <span className="form__error name-error"></span>
      </div>
      <div className="form__field">
        <input
          value={description}
          required
          minLength="2"
          maxLength="200"
          type="text"
          id="aboutInput"
          name="about"
          className="form__input"
          placeholder="Введите описание"
          onChange={(e) => handleDescriptionChange(e)}
        />
        <span className="form__error about-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
