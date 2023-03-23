import {
  Box,
  UserInfoBox,
  UserName,
  CreatedDate,
  UserRaiting,
  Content,
} from './ReviewsItem.styled';
import PropTypes from 'prop-types';

export const ReviewsItem = ({ author, content, created, rating }) => {
  const createdDate = new Date(created).toLocaleDateString();
  return (
    <Box>
      <UserInfoBox>
        <UserName>{author}</UserName>
        <UserRaiting>Raiting: {rating ?? 0}</UserRaiting>
        <CreatedDate>{createdDate}</CreatedDate>
      </UserInfoBox>

      <Content>{content}</Content>
    </Box>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  rating: PropTypes.number,
  created: PropTypes.string.isRequired,
};
