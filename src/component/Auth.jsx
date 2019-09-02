import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Login from './Login';
import LoginAdmin from './LoginAdmin';

const Auth = () => {
  return (
    <div className='row '>
      <div className='mt-5 col-12 col-sm-4'>
        <ul className='list-group'>
          <li className='list-group-item '>
            <Link to='/login/admin'>Admin</Link>
          </li>
          <li className='list-group-item'>
            <Link to='/login'>Tenant</Link>
          </li>
        </ul>
      </div>
      <div className='col- 12 col-sm-8'>
        <Switch>
          <Route path='/login/admin' component={LoginAdmin} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
