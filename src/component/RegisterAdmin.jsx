import React from 'react';
import Joi from 'joi-browser';

//common
import Form from '../common/Form';

//services
import { registerAdmin } from '../services/userServices.js';
import auth from '../services/authServices';

export default class RegisterAdmin extends Form {
  state = {
    data: {},
    errors: {}
  };

  schema = {
    name: Joi.string()
      .min(7)
      .max(200)
      .label('Name'),
    email: Joi.string()
      .min(7)
      .email()
      .required()
      .label('E-mail'),
    password: Joi.string()
      .min(7)
      .max(90)
      .required()
      .label('Password'),
    number: Joi.string()
      .trim()
      .regex(/^[0-9]{11,11}$/)
      .required()
      .error(errors => {
        return {
          message: 'Enter a valid Phone Number.'
        };
      })
      .label('Phone Number')
  };

  doSubmit = async () => {
    try {
      const response = await registerAdmin(this.state.data);
      auth.loginWithJwt(response.headers['x-auth-token']);
      window.location = '/';
    } catch (err) {
      if (
        err.response &&
        (err.response.status >= 400 || err.response.status < 500)
      ) {
        const errors = { ...this.state.errors };
        errors.name = err.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className='m-4'>
        {this.renderHeader('Register Admin', 'Fill the form below')}
        <form onSubmit={e => this.handleSubmit(e)}>
          {this.renderInput('name', 'Name', 'user')}
          {this.renderInput('email', 'E-mail', 'envelope')}
          {this.renderInput('number', 'Phone Number', 'phone-square', 'number')}
          {this.renderInput('password', 'Password', 'key', 'password')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}
