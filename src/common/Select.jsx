import React, { Fragment } from 'react';

const Select = ({
  name,
  value,
  icon,
  options,
  onChange,
  defaultValue,
  property,
  key,
  error
}) => {
  return (
    <Fragment>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <label className='input-group-text' htmlFor='inputGroupSelect01'>
            <i className={'fa fa-' + icon}></i>
          </label>
        </div>
        <select
          name={name}
          onChange={e => onChange(e)}
          className='custom-select'
          id={name}
        >
          <option defaultValue={null}> {value ? value : defaultValue} </option>
          {options.map(option => (
            <option key={option[key]} value={option[property]}>
              {option[property]}
            </option>
          ))}
        </select>
      </div>
      {error && <div className='alert alert-danger'>{error}</div>}
    </Fragment>
  );
};

Select.defaultProps = {
  key: 'id',
  property: 'number'
};

export default Select;
