import React from 'react';
import Joi from 'joi-browser';
//common
import Form from '../common/Form';
//services
import { complain, getComplain } from '../services/complainServices';
//data
import { complainCategory } from '../data/room_data';

export default class ComplaintForm extends Form {
  state = {
    data: {},
    errors: {}
  };

  populateComplain = async () => {
    const { history, match } = this.props;
    try {
      const complainId = match.params.id;
      if (complainId === 'new') return;
      const complain = await getComplain(complainId);
      this.setState({ data: this.mapToViewModel(complain) });
    } catch (err) {
      if (
        err.response &&
        (err.response.status === 400 || err.response.status === 404)
      )
        alert(err.response.data);
      return history.replace('/not-found');
    }
  };

  async componentDidMount() {
    await this.populateComplain();
  }

  mapToViewModel(complain) {
    return {
      _id: complain._id,
      title: complain.title,
      body: complain.body,
      complain_category: complain.complain_category
    };
  }

  schema = {
    title: Joi.string()
      .min(7)
      .max(100)
      .required()
      .label('Title'),
    complain_category: Joi.string()
      .max(18)
      .required()
      .label('Category'),
    body: Joi.string()
      .min(7)
      .max(2500)
      .required()
      .label('Body'),
    _id: Joi.optional()
  };

  doSubmit = async () => {
    try {
      await complain(this.state.data);
      this.props.history.replace('/complains');
    } catch (err) {
      if (
        err.response &&
        (err.response.status === 400 || err.response.status === 404)
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
        {this.renderHeader('Complaint', 'Fill the form below')}
        <form onSubmit={e => this.handleSubmit(e)}>
          {this.renderInput('title', 'Brief description', 'text-width')}

          {this.renderSelect(
            'complain_category',
            complainCategory,
            'th-list',
            'Select category of the complain'
          )}

          {this.renderTextArea(
            'body',
            'Full Description of complaint',
            'comments'
          )}
          {this.renderButton('Complain!!')}
        </form>
      </div>
    );
  }
}
