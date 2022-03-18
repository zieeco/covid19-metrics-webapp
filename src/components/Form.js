import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onChange }) => (
  <div className="form-sect">
    <div className="form-container flex">
      <p className="fw">STATS BY COUNTRY</p>
      <form action="#" className="flex">
        <input onChange={onChange} type="text" placeholder="search by country name..." />
      </form>
    </div>
  </div>
);

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Form;
