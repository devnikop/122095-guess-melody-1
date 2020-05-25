import React from "react";

const AuthorizationScreen = () => {
  return (
    <section className="login">
      <div className="login__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width={186} height={83} /></div>
      <h2 className="login__title">Вы настоящий меломан!</h2>
      <p className="login__total">За&nbsp;3&nbsp;минуты и&nbsp;25&nbsp;секунд вы&nbsp;набрали 12&nbsp;баллов (8&nbsp;быстрых), совершив 3&nbsp;ошибки</p>
      <p className="login__text">Хотите сравнить свой результат с&nbsp;предыдущими попытками? Представтесь!</p>
      <form className="login__form">
        <p className="login__field">
          <label className="login__label" htmlFor="name">Логин</label>
          <input className="login__input" type="text" name="name" id="name" />
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input className="login__input" type="text" name="password" id="password" />
          <span className="login__error">Неверный пароль</span>
        </p>
        <button className="login__button button" type="submit">Войти</button>
      </form>
      <button className="replay" type="button">Сыграть ещё раз</button>
    </section>
  )
};

export default AuthorizationScreen;
