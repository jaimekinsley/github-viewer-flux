import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ username, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={username} onChange={onChange} />
    <button>Submit</button>
  </form>
);

Form.propTypes = {
  username: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
