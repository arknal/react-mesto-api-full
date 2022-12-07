import { useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    props.onLogin({
      password,
      email
    }).finally(() => setIsLoading(false));
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title form__title_theme_dark form__title_text-align_center">
          Вход
        </h2>
        <div className="form__field">
          <input
            required
            value={email}
            onChange={handleEmailChange}
            type="email"
            name="email"
            className="form__input form__input_theme_dark"
            placeholder="Email"
          />
          <span className="form__error email-error"></span>
        </div>
        <div className="form__field">
          <input
            required
            value={password}
            onChange={handlePasswordChange}
            type="password"
            name="password"
            className="form__input form__input_theme_dark"
            placeholder="Пароль"
          />
          <span className="form__error password-error"></span>
        </div>
        <button
          className="form__submit-btn form__submit-btn_theme_dark login__btn"
          type="submit"
        >
          {isLoading ? "Вход..." : "Войти"}
        </button>
        <Link to="/sign-up" className="login__link">
          Нет аккаунта? Зарегистрироваться
        </Link>
      </form>
    </div>
  );
}

export default Login;
