import { NavigLink } from './BackLink.styled';
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  return <NavigLink to={to}>{children}</NavigLink>;
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node,
};
