import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FilterWrapper } from './style';
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames';

const EntireFilter = (props) => {
  const [tabFilter, setTabFilter] = useState([])

  function handleClick(item) {
    const newItems = [...tabFilter]
    if (newItems.includes(item)) {
      const selectIndex = newItems.findIndex(name => name === item)
      newItems.splice(selectIndex, 1)
    } else {
      newItems.push(item)
    }
    setTabFilter(newItems)
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map((item, index) => <div
            onClick={() => handleClick(item)}
            key={index}
            className={classNames('item', { active: tabFilter.includes(item) })}
          >
            {item}
          </div>)
        }
      </div>
    </FilterWrapper>
  );
};

EntireFilter.propTypes = {

};

export default EntireFilter;