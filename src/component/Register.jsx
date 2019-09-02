import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import RegisterTenant from './RegisterTenant';
import RegisterAdmin from './RegisterAdmin';

const Register = () => {
  return (
    <div className='row '>
      <div className='mt-5 col-12 col-sm-4'>
        <ul className='list-group'>
          <li className='list-group-item '>
            <Link to='/register/admin'>Admin</Link>
          </li>
          <li className='list-group-item'>
            <Link to='/register'>Tenant</Link>
          </li>
        </ul>
      </div>
      <div className='col-12 col-sm-8'>
        <Switch>
          <Route path='/register/admin' component={RegisterAdmin} />
          <Route path='/register' component={RegisterTenant} />
        </Switch>
      </div>
    </div>
  );
};

export default Register;
