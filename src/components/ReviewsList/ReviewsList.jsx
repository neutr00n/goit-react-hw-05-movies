import { List, Item } from './ReviewsList.styled';
import { ReviewsItem } from '../ReviewsItem/ReviewsItem';
import PropTypes from 'prop-types';

export const ReviewsList = ({ items }) => {
  return (
    <List>
      {items.map(
        ({ id, author, content, created_at, author_details: { rating } }) => (
          <Item key={id}>
            <ReviewsItem
              author={author}
              content={content}
              created={created_at}
              rating={rating}
            />
          </Item>
        )
      )}
    </List>
  );
};

ReviewsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
