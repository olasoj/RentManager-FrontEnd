import React from 'react';

const MediaImage = ({ src, style }) => {
  return (
    <div className='col-md-2 col-12'>
      <img src={src} className='mr-3' style={style} alt='UserImage' />
    </div>
  );
};

export default MediaImage;
