import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({
  name,
  link,
  likes,
  onCardClick,
  onCardLike,
  onCardDelete,
  ...props
}) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = currentUser._id === props.owner ? true : false;
  const isLiked = likes.some((account) => {
    return account._id === currentUser._id;
  });

  const cardLikeButtonClassName = `card__like-btn ${
    isLiked && "card__like-btn_liked"
  }`;
  return (
    <article className="card">
      <img
        src={link}
        alt={name}
        className="card__image"
        onClick={() => onCardClick({ name, link })}
      />
      <div className="flex-container card__info">
        <h2 className="card__title" onClick={() => console.log(props)}>
          {name}
        </h2>
        {isOwn && (
          <button
            className="card__trash-btn"
            onClick={() => onCardDelete(props)}
          />
        )}
        <div className="flex-container flex-container_direction_column">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={() => onCardLike({ isLiked, ...props })}
          />
          <span className="card__likes-counter">{likes.length}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
