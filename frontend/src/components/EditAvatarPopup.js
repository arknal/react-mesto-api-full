import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, ...props }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: avatarRef.current.value });
  }
  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar-update"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="form__field">
        <input
          ref={avatarRef}
          required
          type="url"
          id="avatar"
          name="avatar"
          className="form__input"
          placeholder="Ссылка на новый аватар"
        />
        <span className="form__error avatar-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
