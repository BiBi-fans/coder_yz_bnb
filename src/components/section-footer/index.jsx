import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router';

import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { FooterWrapper } from './style';


const SectionFooter = (props) => {
    const { name } = props
    const navitate = useNavigate()

    let showName = '查看全部'
    if (name) {
        showName = `查看更多${name}房源`
    }

    function handleRoomClick() {
        navitate('/entire')
    }

    return (
        <FooterWrapper name={name} onClick={handleRoomClick}>
            <span className="text">{showName}</span>
            <IconMoreArrow />
        </FooterWrapper>
    );
};

SectionFooter.propTypes = {
    name: PropTypes.string
};

export default SectionFooter;