import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ user }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='/'>
        RentManager
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/complains'>
              Complains
            </NavLink>
          </li>
          {user && (
            <Fragment>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/profile'>
                  {user.name}
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/logout'>
                  Logout
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/register'>
                  Register
                </NavLink>
              </li>
            </Fragment>
          )}
          {!user && (
            <Fragment>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/login'>
                  Login
                </NavLink>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
