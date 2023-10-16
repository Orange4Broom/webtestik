import { Icon } from '../icon/Icon';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';

import './navigation.scss';

export const Navigation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state } = useAuthContext();
  const { error, login } = useLogin();
  console.log(error);

  const handleLogin = async () => {
    event?.preventDefault();
    await login({ email, password });
  };

  const { logout } = useLogout();

  return (
    <>
      <nav className="navigation">
        <a className="navigation__link" href="#">
          Subscribe
        </a>
        <h1 className="navigation__header">Nadpis</h1>
        {!state.user ? (
          <div className="navigation__login">
            <Icon name="search" type="fas" color="" />
            <form className="login__form">
              <input
                className="input"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="input"
                type="password"
                placeholder="heslo"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                className="form__button"
                onClick={() => {
                  handleLogin();
                }}
              >
                Přihlásit se
              </button>
            </form>
          </div>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </nav>
    </>
  );
};
