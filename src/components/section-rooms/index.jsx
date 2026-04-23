import PropTypes from 'prop-types';
import React from 'react';
import { RoomsWrapper } from './style';
import RoomItem from '../room-item';

const SectionRooms = (props) => {
    const { roomItems, itemWidth = '25%' } = props

    return (
        <RoomsWrapper>
            {
                roomItems?.slice(0, 8).map(item => <RoomItem key={item.id} itemWidth={itemWidth} itemData={item}></RoomItem>)
            }
        </RoomsWrapper>
    );
};

SectionRooms.propTypes = {
    roomItems: PropTypes.array,
    itemWidth: PropTypes.string
};

export default SectionRooms;