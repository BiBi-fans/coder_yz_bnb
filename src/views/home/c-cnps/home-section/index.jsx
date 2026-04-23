import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { SectionV1Wrapper } from './style';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionFooter from '@/components/section-footer';

const HomeSection = ({ infoData }) => {
    const { title, subtitle = '', list } = infoData

    return (
        <SectionV1Wrapper>
            <SectionHeader title={title} subtitle={subtitle} />
            <SectionRooms roomItems={list}></SectionRooms>
            <SectionFooter  ></SectionFooter>
        </SectionV1Wrapper>
    );
};

HomeSection.propTypes = {
    infoData: PropTypes.object
};

export default HomeSection;