import { useState } from "react";
import { Link } from "react-router-dom";

function Register({onRegister, ...props}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    onRegister({
      email,
      password,
    })
    .finally(() => setIsLoading(false))
  
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
          Регистрация
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
         {isLoading ? "Регистрация..." : "Зарегистрироваться"}
        </button>
        <Link to="/sign-in" className="login__link">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}

export default Register;
