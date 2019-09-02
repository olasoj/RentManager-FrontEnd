import React from 'react';
import { Link } from 'react-router-dom';

const MediaButton = ({ user, complain, onResolve, onDelete }) => {
  return (
    <div className='col-12 pl-0'>
      {user && user.isAdmin && (
        <button
          className={
            complain.is_resolved
              ? 'btn btn-success mr-2'
              : 'btn btn-warning mr-2'
          }
          onClick={() => onResolve(complain._id)}
          role='alert'
        >
          <i className='fa fa-wrench' aria-hidden='true'></i>
          {complain.is_resolved ? ' Resolved' : ' Unresolved'}
        </button>
      )}
      {user && user._id === complain.user._id && (
        <button type='button' className='btn btn-success  mr-2'>
          <i className='fa fa-pencil' aria-hidden='true'></i>
          <Link
            to={'/complain/' + complain._id}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            {' '}
            {' Update'}
          </Link>
        </button>
      )}
      {user && (user._id === complain.user._id || user.isAdmin) && (
        <button
          type='button'
          className='btn btn-danger  '
          onClick={() => onDelete(complain._id)}
        >
          <i className='fa fa-trash' aria-hidden='true'></i>
          {' Delete'}
        </button>
      )}
    </div>
  );
};

export default MediaButton;
