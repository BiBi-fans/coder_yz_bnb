import React from 'react';
import { useShallow } from "zustand/shallow";

import { RoomWrapper } from './style';
import { useDetailStore } from '@/store/detailStore';
import { useEntireStore } from '@/store/entireStore';
import { useNavigate } from 'react-router';
import RoomItem from '@/components/room-item';


const EntireRooms = (props) => {
  const navitate = useNavigate()
  const detailStore = useDetailStore()
  const { changeDetailInfo } = detailStore
  const { isLoading, roomList } = useEntireStore(useShallow((state) => ({
    isLoading: state.isLoading,
    roomList: state.roomList
  })))



  function handleItemClick(item) {
    navitate("/detail")
    changeDetailInfo(item)
  }

  return (
    <RoomWrapper>
      <div className="list">
        {
          roomList.map((item, index) => (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item._id}
              itemClick={e => handleItemClick(item)}
            />
          ))
        }
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  );
};

export default EntireRooms;