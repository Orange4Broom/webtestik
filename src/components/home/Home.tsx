import './home.scss';
import { useAuthContext } from '../../hooks/useAuthContext';

export const Home = () => {
  const { state } = useAuthContext();

  return (
    <div className="home">
      <div className="home__links">
        <a className="link" href="#">
          World
        </a>
        <a className="link" href="#">
          U.S.
        </a>
        <a className="link" href="#">
          Technology
        </a>
      </div>

      <div className="card">
        <h1 className="card__header">Lorem Ipsum</h1>
        <p>Lorem ipsum</p>
        <a href="#">Continue reading</a>
      </div>

      {state.user ? (
        <div className="posts">
          <div className="post">
            <h1 className="post__header">post1</h1>
          </div>
          <div className="post">
            <h1 className="post__header">post2</h1>
          </div>
        </div>
      ) : (
        <>
          <h1>Přihlaste se, aby jste mohli vidět a komentovat příspěvky</h1>
          <p>Přihlašovací údaje</p>
          <p>admin@admin.com</p>
          <p>heslo1234</p>
        </>
      )}

      <div className="content">
        <span className="blog">
          <h1 className="blog__header">Lorem ipsum</h1>
          <p className="blog__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos vitae reiciendis omnis. Doloremque officia repudiandae
            magni itaque excepturi ipsa nulla veniam, necessitatibus aperiam
            architecto est quidem possimus dolorum eveniet enim.
          </p>
        </span>
        <span className="blog">
          <h1 className="blog__header">Lorem ipsum</h1>
          <p className="blog__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos vitae reiciendis omnis. Doloremque officia repudiandae
            magni itaque excepturi ipsa nulla veniam, necessitatibus aperiam
            architecto est quidem possimus dolorum eveniet enim.
          </p>
        </span>
        <span className="blog">
          <h1 className="blog__header">Lorem ipsum</h1>
          <p className="blog__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos vitae reiciendis omnis. Doloremque officia repudiandae
            magni itaque excepturi ipsa nulla veniam, necessitatibus aperiam
            architecto est quidem possimus dolorum eveniet enim.
          </p>
        </span>
      </div>
    </div>
  );
};
