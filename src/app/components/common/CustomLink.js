import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/* global API_BASE_URL */

const CustomLink = props => {
  if (API_BASE_URL != '') {
    return <a href={`${API_BASE_URL}${props.to}`}>{props.children}</a>;
  }
  return <Link to={props.to}>{props.children}</Link>;
};
CustomLink.propTypes = {
  children: PropTypes.array,
  to: PropTypes.string
};
export default CustomLink;
