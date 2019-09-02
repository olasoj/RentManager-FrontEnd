import React, { Fragment, Component } from 'react';
import './App.css';

//packages
import { Route, Redirect, Switch } from 'react-router-dom';

//component
import NavBar from './component/NavBar';
import Auth from './component/Auth';
import Register from './component/Register';
import ComplaintForm from './component/ComplaintForm';
import Complains from './component/Complains';
import Logout from './component/LogOut';

//çommon
import NotFound from './common/NotFound';
import ProtectedRoute from './common/ProtectedRoute';

//services
import auth from './services/authServices.js';

class App extends Component {
  state = {};

  componentDidMount() {
    this.setState({ user: auth.getCurrentUser() });
  }

  render() {
    const { user } = this.state;
    return (
      <Fragment>
        <NavBar user={user} />
        <div className='container '>
          <Switch>
            <Route
              path='/complains'
              render={props => <Complains {...props} user={user} />}
            />
            <ProtectedRoute path='/complain/:id' component={ComplaintForm} />
            <Route path='/login' component={Auth} />
            <Route path='/logout' component={Logout} />
            <ProtectedRoute path='/register' component={Register} />
            <Redirect exact from='/' to='/complains' />
            <Route path='/not-found' component={NotFound} />

            <Redirect to='/not-found' />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
