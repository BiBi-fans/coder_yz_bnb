import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { IndicatorWrapper } from './style';

const Indicator = (props) => {
    const { selectIndex } = props
    const scrollRef = useRef(null)

    useEffect(() => {
        // 获取item
        const selectItemEl = scrollRef.current.children[selectIndex]
        const itemWidth = selectItemEl.clientWidth
        const itemLeft = selectItemEl.offsetLeft

        // 容器信息
        const contentWidth = scrollRef.current.clientWidth
        const contentScrollWidth = scrollRef.current.scrollWidth

        // 算出偏移距离
        let distance = itemWidth * 0.5 + itemLeft - contentWidth * 0.5
        // 特殊情况
        if (distance < 0) distance = 0
        if (distance > contentScrollWidth - contentWidth) distance = contentScrollWidth - contentWidth

        // 改变位置
        scrollRef.current.style.transform = `translate(${-distance}px)`

        // 改变位置
        scrollRef.current.style.transform = `translate(${-distance}px)`
    }, [selectIndex])

    return (
        <IndicatorWrapper>
            <div className="scroll" ref={scrollRef}>
                {
                    props.children
                }
            </div>
        </IndicatorWrapper>
    );
};

Indicator.propTypes = {
    selectIndex: PropTypes.number
};

export default Indicator;