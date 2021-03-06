import React from 'react';

const MediaBody = ({ complain }) => {
  const DATE_OPTIONS = {
    weekday: 'short',
    minutes: '',
    hour: 'numeric',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  const date = new Date(complain.date).toLocaleDateString(
    'en-US',
    DATE_OPTIONS
  );

  console.log(date);

  return (
    <div className='col-md-10 col-12 '>
      <div className='media-body'>
        <h5 className='mt-md-0 mt-2 mb-1'>
          {complain.title} |
          <small>
            {' '}
            {complain.complain_category} <i className='fa fa-clock-o'></i>{' '}
            {date}
          </small>
        </h5>

        {complain.body}
      </div>
    </div>
  );
};

export default MediaBody;
