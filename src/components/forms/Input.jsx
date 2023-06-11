import React from 'react';
import '../styles/input.css';

export const Input = () => {
  return (
    <div className="form__group field">
      <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
      <label htmlForfor="name" className="form__label">Name</label>
    </div>
  )
};
