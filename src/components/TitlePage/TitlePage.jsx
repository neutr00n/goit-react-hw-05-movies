import { Title } from './TitlePage.styled';
import PropTypes from 'prop-types';

export const TitlePage = ({ children }) => {
  return <Title>{children}</Title>;
};

TitlePage.propTypes = {
  children: PropTypes.node,
};
