import { useContext } from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "./../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  handleCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-container"
          onClick={() => onEditAvatar(true)}
        >
          <img
            src={currentUser.avatar}
            alt="Аватар"
            className="profile__avatar"
          />
          <div className="profile__edit-avatar" />
        </div>
        <div className="flex-container flex-container_direction_column profile__info">
          <div className="flex-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={() => onEditProfile(true)}
            />
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={() => onAddPlace(true)}
        />
      </section>
      <section className="gallery" ariadiv="Секция с картинками">
        {
          cards.map((item) => {
          return (
            <Card
              {...item}
              key={item._id}
              onCardClick={handleCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          );
          })
      }
      </section>
    </main>
  );
}

export default Main;
