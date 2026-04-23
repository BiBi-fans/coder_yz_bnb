import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classNames from 'classnames';
import mittBus from '@/utils/mittBus';
import { TabsWrapper } from './style';
import ScrollView from '@/base-ui/scroll-view';

const SectionTabs = (props) => {
    const { tabNames = [] } = props
    const [currentIndex, setCurrentIndex] = useState(0)
    function handleClick(index) {
        // add
        mittBus.emit('currentIndex', { currentIndex: index })
        setCurrentIndex(index)
    }

    return (
        <TabsWrapper>
            <ScrollView>
                {
                    tabNames.map((item, index) => {
                        return <div
                            key={index}
                            className={classNames('item', { 'active': currentIndex === index })}
                            onClick={() => handleClick(index)}
                        >{item}</div>
                    })
                }
            </ScrollView>
        </TabsWrapper>
    );
};

SectionTabs.propTypes = {
    tabNames: PropTypes.array
};

export default SectionTabs;