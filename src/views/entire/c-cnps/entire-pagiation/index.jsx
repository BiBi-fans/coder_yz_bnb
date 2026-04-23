import PropTypes from 'prop-types';
import React from 'react';
import Pagination from '@mui/material/Pagination';
import { useShallow } from "zustand/shallow";

import { PagiationWrapper } from './style';
import { useEntireStore } from '@/store/entireStore';

const EntirePagation = (props) => {
  const { currentPage, totalCount, fetchEntireData } = useEntireStore(useShallow((state) => ({
    currentPage: state.currentPage,
    totalCount: state.totalCount,
    fetchEntireData: state.fetchEntireData
  })))

  // 总页数
  const count = Math.floor(totalCount / 20)
  const start = currentPage * 20 + 1
  const end = (currentPage + 1) * 20

  function pageChangeHandle(event, newPage) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
    fetchEntireData(newPage - 1)
  }

  return (
    <PagiationWrapper>
      <div className="page-info">
        <Pagination count={count} onChange={pageChangeHandle} />
        <div className='info'>
          第 {start} - {end} 个房源, 共超过 {totalCount} 个
        </div>
      </div>
    </PagiationWrapper>
  );
};

EntirePagation.propTypes = {

};

export default EntirePagation;