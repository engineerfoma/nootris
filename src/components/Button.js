import React from 'react';
import '../styles/Button.scss';

const Button = (props) => {
  return (
    <button type="button" className="button hover">
      {props.children}
    </button>
  )
}

export default Button;