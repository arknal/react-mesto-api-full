function Menu(props) {
  return props.burger ? (
    <nav
      className={`header__burger-menu${
        props.isActive ? " header__burger-menu_active" : ""
      }`}
    >
      <p className="menu__profile">{props.email}</p>
      <button type="button" className="menu__logout" onClick={props.onSignout}>
        Выйти
      </button>
    </nav>
  ) : (
    <nav className={"menu"}>
      <p className="menu__profile">{props.email}</p>
      <button type="button" className="menu__logout" onClick={props.onSignout}>
        Выйти
      </button>
    </nav>
  );
}

export default Menu;
