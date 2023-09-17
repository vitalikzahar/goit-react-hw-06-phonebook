import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, Filters } from './Filter.styled';
import { addFilter } from 'redux/filterReducer';

export const Filter = () => {
  const handleSearch = event => {
    dispatch(addFilter(event.target.value));
  };
  const filterItem = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <Filters>
        Find contacts by name
        <FilterInput
          value={filterItem.filter}
          onChange={handleSearch}
          type="text"
          name="{card.name}"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></FilterInput>
      </Filters>
    </>
  );
};
