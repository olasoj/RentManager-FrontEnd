import React, { Fragment } from 'react';

const Input = ({
  name,
  value,
  placeholder,
  onChange,
  error,
  icon,
  type = 'text'
}) => {
  return (
    <Fragment>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='basic-addon1'>
            <i className={'fa fa-' + icon} aria-hidden='true'></i>
          </span>
        </div>
        <input
          type={type}
          className='form-control'
          name={name}
          value={value ? value : ''}
          placeholder={placeholder}
          onChange={e => onChange(e)}
          aria-label={placeholder}
          aria-describedby='basic-addon1'
        />
      </div>
      {error && <div className='alert alert-danger'>{error}</div>}
    </Fragment>
  );
};

export default Input;
