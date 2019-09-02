import React from 'react';

const MediaBody = ({ complain }) => {
  return (
    <div className='col-md-10 col-12 '>
      <div className='media-body'>
        <h5 className='mt-md-0 mt-2 mb-1'>
          {complain.title} |<small> {complain.complain_category}</small>
        </h5>

        {complain.body}
      </div>
    </div>
  );
};

export default MediaBody;
