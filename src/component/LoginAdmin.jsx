import React from 'react';
import Joi from 'joi-browser';

//common
import Form from '../common/Form';

//services
import { loginAsAdmin } from '../services/authServices';

export default class Login extends Form {
  state = {
    data: {},
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label('E-mail'),
    password: Joi.string()
      .required()
      .label('Password')
  };

  doSubmit = async () => {
    try {
      await loginAsAdmin(this.state.data);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : '/';
    } catch (err) {
      if (
        err.response &&
        (err.response.status === 400 || err.response.status === 404)
      ) {
        const errors = { ...this.state.errors };
        errors.email = err.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className='m-4'>
        {this.renderHeader('Login As Admin', 'Fill the form below')}
        <form onSubmit={e => this.handleSubmit(e)}>
          {this.renderInput('email', 'E-mail', 'envelope')}
          {this.renderInput('password', 'Password', 'key', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}
