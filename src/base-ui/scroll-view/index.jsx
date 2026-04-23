import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollWrapper } from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const ScrollView = (props) => {
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)
    const scrollContentRef = useRef(null)
    // 使用useRef存储数据 数据不会随着组件的刷新而发生改变
    const posIndexRef = useRef(0)
    const totalDistanceRef = useRef(null)

    useEffect(() => {
        const scrollWidth = scrollContentRef.current.scrollWidth //一共可以滚动的宽度
        const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
        const totalDistance = scrollWidth - clientWidth // 可滚动距离
        totalDistanceRef.current = totalDistance
        setShowRight(totalDistance > 0)
    }, [props.children])

    function handleClick(direction) {
        const newIndex = direction === 'left' ? posIndexRef.current - 1 : posIndexRef.current + 1
        const newEl = scrollContentRef.current.children[newIndex]
        const newOffsetLeft = newEl.offsetLeft

        scrollContentRef.current.style.transform = `translateX(${-newOffsetLeft}px)`;
        posIndexRef.current = newIndex

        setShowRight(totalDistanceRef.current > newOffsetLeft)
        setShowLeft(newOffsetLeft > 0)
    }


    return (
        <ScrollWrapper>
            {showLeft && <div className='left control' onClick={() => handleClick('left')}>
                <IconArrowLeft />
            </div>}
            {showRight && <div className='right control' onClick={() => handleClick('right')}>
                <IconArrowRight />
            </div>}
            <div className="content" >
                {showLeft && <div className="left-bg"></div>}
                <div className="scroll" ref={scrollContentRef}>
                    {
                        props.children
                    }
                </div>
                {showRight && <div className="right-bg"></div>}
            </div>
        </ScrollWrapper>
    );
};

ScrollView.propTypes = {

};

export default ScrollView;