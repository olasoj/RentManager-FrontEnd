import React from 'react';
import MediaImage from './MediaImage';
import MediaInfo from './MediaInfo';
import MediaButton from './MediaButton';
import MediaBody from './MediaBody';

const MediaObject = ({ items, onDelete, onResolve, imgStyle: style, user }) => {
  return (
    <ul className='list-unstyled'>
      {items.map(complain => (
        <li className='media' key={complain._id}>
          <div className='container'>
            <div className='row mb-3 '>
              <MediaImage src={'http:' + complain.user.avater} style={style} />
              <MediaBody complain={complain} />
            </div>
            <div className='row mb-2 '>
              <MediaInfo complain={complain} />
            </div>

            {user && (
              <div className='row mb-2 '>
                <MediaButton
                  onDelete={onDelete}
                  onResolve={onResolve}
                  user={user}
                  complain={complain}
                />
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MediaObject;
