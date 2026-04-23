import PropTypes from 'prop-types';
import React from 'react';
import { SectionWrapper } from './style';
import SectionHeader from '@/components/section-header';
import ScrollView from '@/base-ui/scroll-view';
import RoomItem from '@/components/room-item';
import SectionFooter from '@/components/section-footer';

const HomeSectionV3 = (props) => {
    const { infoData } = props
    const { title, subtitle, list } = infoData
    return (
        <SectionWrapper>
            <SectionHeader title={title} subtitle={subtitle} />
            <div className="room-list">
                <ScrollView>
                    {
                        list?.map(item => <RoomItem itemWidth="20%" itemData={item} key={item.id}></RoomItem>)
                    }
                </ScrollView>
            </div>
            <SectionFooter name="plus"></SectionFooter>
        </SectionWrapper>
    );
};

HomeSectionV3.propTypes = {
    infoData: PropTypes.object
};

export default HomeSectionV3;