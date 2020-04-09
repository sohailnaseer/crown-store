import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, signInWithGoogle, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${signInWithGoogle ? 'google-sign-in' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default CustomButton;
