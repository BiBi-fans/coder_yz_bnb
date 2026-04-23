import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import mittBus from '@/utils/mittBus';

import { SectionV2Wrapper } from './style';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionTabs from '@/components/section-tabs';
import SectionFooter from '@/components/section-footer';

const HomeSectionV2 = (props) => {
    const { infoData } = props
    const { title, subtitle, dest_list } = infoData
    const tabNames = infoData?.dest_address?.map(item => item.name)
    const [currentIndex, setCurrentIndex] = useState(0)

    function handleCurrentIndex(e) {
        setCurrentIndex(e.currentIndex)
    }

    useEffect(() => {
        mittBus.on('currentIndex', handleCurrentIndex)
        return () => {
            mittBus.off('currentIndex', handleCurrentIndex)
            console.log('组件卸载');
        }
    }, [])

    return (
        <SectionV2Wrapper>
            <SectionHeader title={title} subtitle={subtitle}></SectionHeader>
            <SectionTabs tabNames={tabNames}></SectionTabs>
            <SectionRooms itemWidth={'33.3333%'} roomItems={dest_list?.[tabNames?.[currentIndex]]}></SectionRooms>
            <SectionFooter name={tabNames?.[currentIndex]} />
        </SectionV2Wrapper>
    );
};

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
};

export default HomeSectionV2;