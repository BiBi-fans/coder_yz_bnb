import PropTypes from 'prop-types';
import React, { useState, useRef, useCallback } from 'react';
import { ItemWrapper } from './style';
import { Rating } from '@mui/material';
import { Carousel } from 'antd';

import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/Indicator';
import classNames from 'classnames';

const RoomItem = (props) => {
    const { itemData, itemWidth = '33.3333%', itemClick } = props
    const [selectIndex, setSelectIndex] = useState(0)
    const carouselRef = useRef(null)

    function roomClick() {
        if (itemClick) itemClick()
    }

    function handleClick(e, isRight = true) {
        e.stopPropagation()
        const len = itemData.picture_urls.length

        isRight ? carouselRef.current.next() : carouselRef.current.prev()
        let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
        if (newIndex > len - 1) newIndex = 0
        if (newIndex < 0) newIndex = len - 1
        setSelectIndex(newIndex)
    }

    return (
        <ItemWrapper style={{ width: itemWidth }} onClick={() => roomClick(itemData)}  >
            <div className="inner" >
                {!itemClick ? <div className="cover" >
                    <img src={itemData.picture_url} alt="" />
                </div> :
                    <div className="slider">
                        <div className="control">
                            <div className="btn left" onClick={(e) => handleClick(e, false)}>
                                <IconArrowLeft width="24" height="24" />
                            </div>
                            <div className="btn right" onClick={(e) => handleClick(e, true)}>
                                <IconArrowRight width="24" height="24" />
                            </div>
                        </div>
                        <div className="indicator">
                            <Indicator selectIndex={selectIndex} itemClick={itemClick} >
                                {
                                    itemData?.picture_urls?.map((item, index) => (<div className='item' key={index}>
                                        <div className={classNames('dot', { active: index === selectIndex })}></div>
                                    </div>))
                                }
                            </Indicator>
                        </div>
                        <Carousel dots={false} ref={carouselRef} >
                            {
                                itemData?.picture_urls?.map((item, index) => <div className='cover'><img src={item} alt="" /></div>)
                            }
                        </Carousel>
                    </div>}

                <div className='desc'>{itemData.verify_info.messages.join("·")}</div>
                <div className='name'>{itemData.name}{itemData.name.length < 17 ? <div className='noSelect'>{itemData.name}</div> : <></>}</div>
                <div className='price'>¥{itemData.price}/晚</div>
                <div className="bottom">
                    <Rating name="read-only" value={itemData.reviews_count ?? 5} precision={0.1} size="small"
                        sx={{ fontSize: "12px", color: "#00848A", marginRight: "-2px" }} readOnly />
                </div>
            </div>
        </ItemWrapper>
    );
};

RoomItem.propTypes = {
    itemData: PropTypes.object,
    itemWidth: PropTypes.string,
    itemClick: PropTypes.func
};

export default RoomItem;