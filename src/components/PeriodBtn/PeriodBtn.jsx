import { Box, Text, Btn } from './PeriodBtn.styled';
import PropTypes from 'prop-types';

export const PeriodBtn = ({ handleFindBtnClick, period }) => {
  const btnText = period === 'day' ? 'Week' : 'Day';
  return (
    <Box>
      <Text>Show by:</Text>
      <Btn type="button" onClick={handleFindBtnClick}>
        {btnText}
      </Btn>
    </Box>
  );
};

PeriodBtn.propTypes = {
  handleFindBtnClick: PropTypes.func.isRequired,
  period: PropTypes.string.isRequired,
};
