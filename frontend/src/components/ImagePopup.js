function ImagePopup({ card, onClose, ...props }) {
  return (
    <div
      className={`popup popup_type_card-img${card.name ? " popup_opened" : ""}`}
      onClick={(e) => {
        if (e.target.classList.contains("popup")) {
          onClose();
        }
      }}
    >
      <div className="popup__container">
        <img src={card.link} alt={card.name} className="popup__card-img" />
        <p className="popup__card-title">{card.name}</p>
        <button className="popup__close-btn" onClick={() => onClose()}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
