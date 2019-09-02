import React, { Fragment } from 'react';

const Toasity = ({ error }) => {
  return (
    <Fragment>
      <div class='toast' role='alert' aria-live='assertive' aria-atomic='true'>
        {error && <div class='toast-body'>{error}</div>}
      </div>
    </Fragment>
  );
};

export default Toasity;
