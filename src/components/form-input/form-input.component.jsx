import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label ? (
        <label
          htmlFor='name'
          className={`${otherProps.value.length ? 'shrink' : ''}
        form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
