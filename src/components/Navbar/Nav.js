import React, { useState, useContext } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import StoreContext from '../../components/Store/Context';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { setToken } = useContext(StoreContext);

  const logout = () => {
    setToken(null);
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <FaAlignJustify
                className="toglle"
                onClick={() => setShowLinks(!showLinks)}
              />
              <div className="logo">Cadastro dos Campeões</div>
            </div>
          </ul>

          <div className="links" id={showLinks ? 'hidden' : ''}>
            <ul className="navbar__right">
              <li>
                <Link to="/list" onClick={() => setShowLinks(!showLinks)}>
                  Usuários
                </Link>
              </li>
              <li>
                <Link to="/include" onClick={() => setShowLinks(!showLinks)}>
                  Inclusão
                </Link>
              </li>
              <li>
                <a href="#" onClick={logout}>
                  LogOUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
