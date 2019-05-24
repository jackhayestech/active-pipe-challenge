import React from 'react';
import PropTypes from 'prop-types';
import { filter } from '../../../../../styles/application.module.css';

const Filter = ({ selected, setFilter }) => {
  return (
    <select
      value={selected}
      className={filter}
      onChange={(e) => { setFilter(e.target.value); }}
    >
      <option defaultValue value='filter_status'>
        Filter Status
      </option>
      <option value='current'>
        Current
      </option>
      <option value='off_market'>
        Off Market
      </option>
      <option value='sold'>
        Sold
      </option>
    </select>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
