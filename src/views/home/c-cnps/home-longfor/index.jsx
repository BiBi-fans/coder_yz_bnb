import PropTypes from 'prop-types';
import React from 'react';
import { LongForWrapper } from './style';
import SectionHeader from '@/components/section-header';
import ScrollView from '@/base-ui/scroll-view';
import LongforItem from '@/components/longfor-item';

const LongforSection = (props) => {
    const { infoData } = props
    const { title, subtitle, list: longforList } = infoData
    return (
        <LongForWrapper>
            <SectionHeader title={title} subtitle={subtitle} />
            <div className='longfor-list'>
                <ScrollView>
                    {
                        longforList?.map(item => {
                            return (<LongforItem itemData={item} key={item.city} />)
                        })
                    }
                </ScrollView>
            </div>
        </LongForWrapper>
    );
};

LongforSection.propTypes = {
    infoData: PropTypes.object
};

export default LongforSection;