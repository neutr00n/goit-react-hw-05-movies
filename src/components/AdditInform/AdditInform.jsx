import { Box, Wrap, NavigLink } from './AdditInform.styled';
import PropTypes from 'prop-types';

export const AdditInform = ({ location }) => {
  return (
    <Box>
      <h2>Additional information</h2>
      <Wrap>
        <NavigLink to="cast" state={{ from: location }}>
          Cast
        </NavigLink>
        <NavigLink to="reviews" state={{ from: location }}>
          Reviews
        </NavigLink>
      </Wrap>
    </Box>
  );
};

AdditInform.propTypes = {
  location: PropTypes.object.isRequired,
};
