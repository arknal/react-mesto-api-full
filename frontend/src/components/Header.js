import headerLogo from "../images/header__logo.svg";
import ProtectedMenu from "./ProtectedMenu";
import { useState, useContext } from "react";
import { CurrentUserContext } from "./../contexts/CurrentUserContext";

function Header(props) {
  const currentUser = useContext(CurrentUserContext);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function onSignout() {
    setIsBurgerMenuOpen(false);
    props.onSignout();
  }

  return (
    <>
      <ProtectedMenu
        onSignout={onSignout}
        email={props.email}
        burger
        isActive={isBurgerMenuOpen}
        onClose={setIsBurgerMenuOpen}
      />
      <header className="header">
        <img src={headerLogo} alt="Логотип" className="header__logo" />
        <ProtectedMenu onSignout={onSignout} email={props.email} />
        {currentUser._id && (
          <div
            className={`header__burger${
              isBurgerMenuOpen ? " header__burger_active" : ""
            }`}
            onClick={(e) => {
              setIsBurgerMenuOpen(!isBurgerMenuOpen);
            }}
          />
        )}
      </header>
    </>
  );
}

export default Header;
