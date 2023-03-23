import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Form, Wrapper, Input, Btn } from './MovieForm.styled';
import PropTypes from 'prop-types';

export const MovieForm = ({ handleSearchValue }) => {
  const [value, setValue] = useState('');

  const handleInputValue = ({ target: { value } }) => {
    setValue(value);
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();

    const searchValue = evt.target.search.value.trim();
    const searchParams = searchValue !== '' ? searchValue : [];

    const normalizeSearchValue = encodeURIComponent(searchParams.toLowerCase());

    handleSearchValue({ query: normalizeSearchValue });

    setValue('');
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Wrapper>
        <Btn type="submit">
          <BsSearch />
        </Btn>
        <Input
          type="text"
          name="search"
          value={value}
          placeholder="Search..."
          onChange={handleInputValue}
        />
      </Wrapper>
    </Form>
  );
};

MovieForm.propTypes = {
  handleSearchValue: PropTypes.func.isRequired,
};
