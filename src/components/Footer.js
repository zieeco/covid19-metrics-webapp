import React from 'react';
import currentDate from '../dateUpdator';

const Footer = () => (
  <footer className="flex">
    <p>
      {' '}
      &copy;
      {`
    covid-19 metrics report ${currentDate}`}
    </p>
  </footer>
);

export default Footer;
