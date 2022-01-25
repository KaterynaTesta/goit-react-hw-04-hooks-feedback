import React from 'react';
import { PropTypes } from 'prop-types';
import SectionStyled from './SectionStylesd';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      {title && <h1>{title}</h1>}
      {children}
    </SectionStyled>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  // children: PropTypes.any,
};

export default Section;
