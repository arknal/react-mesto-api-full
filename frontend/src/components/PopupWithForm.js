function PopupWithForm({
  title,
  name,
  children,
  onSubmit,
  isOpen,
  onClose,
  confirmBtnText = "Сохранить",
}) {
  return (
    <div
      className={`popup popup_type_${name}${isOpen ? " popup_opened" : ""}`}
      onClick={(e) => {
        if (e.target.classList.contains("popup")) {
          onClose();
        }
      }}
    >
      <div className="popup__container">
        <form
          className="form popup__form"
          name={name}
          onSubmit={onSubmit}
        >
          <h2 className="form__title">{title}</h2>
          {children}
          <button className="form__submit-btn" type="submit">
            {confirmBtnText}
          </button>
        </form>
        <button className="popup__close-btn" onClick={() => onClose()} />
      </div>
    </div>
  );
}

export default PopupWithForm;
