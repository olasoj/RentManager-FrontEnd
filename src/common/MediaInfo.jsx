import React from 'react';

const MediaInfo = ({ complain }) => {
  return (
    <div className='col-12 pl-0'>
      <small>
        <button className='alert alert-secondary  mr-2'>
          <i className='fa fa-user ' aria-hidden='true'></i>
          {' ' + complain.user.name}
        </button>
      </small>
      <small>
        <button className='alert alert-secondary mr-2 '>
          <i className='fa fa-phone' aria-hidden='true'></i>
          {' 0' + complain.user.number}
        </button>
      </small>
      <small>
        <button className='alert alert-secondary mr-2'>
          <i className='fa fa-tag' aria-hidden='true'></i>
          {' ' + complain.user.room_number}
        </button>
      </small>
    </div>
  );
};

export default MediaInfo;
