import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }
  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);
  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      isOpen={isOpen}
      onClose={onClose}
      confirmBtnText="Создать"
      onSubmit={handleSubmit}
    >
      <div className="form__field">
        <input
          value={name}
          onChange={(e) => handleNameChange(e)}
          required
          type="text"
          minLength="2"
          maxLength="30"
          name="name"
          id="cardTitleInput"
          className="form__input"
          placeholder="Название"
        />
        <span className="form__error name-error"></span>
      </div>
      <div className="form__field">
        <input
          value={link}
          onChange={(e) => handleLinkChange(e)}
          required
          type="url"
          id="cardImgLinkInput"
          name="link"
          className="form__input"
          placeholder="Ссылка на картинку"
        />
        <span className="form__error link-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
