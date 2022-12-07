import success from "../images/success.png";
import fail from "../images/fail.png";

function InfoTooltip({ onClose, state, ...props }) {
  return (
    <div
      className={`popup${state.isOpen ? " popup_opened" : ""}`}
      onClick={(e) => {
        if (e.target.classList.contains("popup")) {
          onClose({...state, 'isOpen': false});
        }
      }}
    >
      <div className="popup__container">
        <div className="info-tooltip">
          <img src={state.status ? success : fail} alt="" />
          <h2 className="info-tooltip__header">{state.text}</h2>
        </div>
        <button className="popup__close-btn" onClick={() => onClose({...state, 'isOpen': false})} />
      </div>
    </div>
  );
}

export default InfoTooltip;
