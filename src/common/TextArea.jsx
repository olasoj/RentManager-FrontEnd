import React, { Fragment } from 'react';

const TextArea = ({ name, value, onChange, placeholder, icon, error }) => {
  return (
    <Fragment>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>
            <i className={'fa fa-' + icon}></i>
          </span>
        </div>
        <textarea
          className='form-control'
          aria-label='With textarea'
          name={name}
          value={value}
          onChange={e => onChange(e)}
          placeholder={placeholder}
        ></textarea>
      </div>
      {error && <div className='alert alert-danger'>{error}</div>}
    </Fragment>
  );
};

export default TextArea;
