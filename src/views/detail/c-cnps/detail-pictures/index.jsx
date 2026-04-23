import React, { memo, useState, useEffect } from 'react';
import { PicturesWrapper } from './style';
import PictureBrowser from '@/base-ui/picture-browser';

const DetailPictures = memo((props) => {
    const { pictureUrls } = props
    const [showBrowser, setShowBrowser] = useState(false)
    const [picIndex, setPicIndex] = useState(0)

    function showBrowserHandle(index) {
        setShowBrowser(true)
        setPicIndex(index)
    }

    function handleCloseClick() {
        console.log('lose');

        setShowBrowser(false)
    }

    useEffect(() => {
        if (showBrowser) document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showBrowser])

    return <PicturesWrapper>
        <div className="top">
            <div className="left">
                <div className="item" onClick={() => showBrowserHandle(0)}>
                    <img src={pictureUrls?.[0]} alt="" />
                    <div className="cover"></div>
                </div>
            </div>
            <div className="right">
                {
                    pictureUrls?.slice(1, 5).map((item, index) => {
                        return <div key={item} className='item' onClick={() => showBrowserHandle(index + 1)}>
                            <img src={item} alt="" />
                            <div className="cover"></div>
                        </div>
                    })
                }
            </div>
        </div>
        <div className='show-btn' onClick={showBrowserHandle}>查看照片</div>
        {showBrowser && <PictureBrowser pictureUrls={pictureUrls} closeClick={handleCloseClick} picIndex={picIndex} />}
    </PicturesWrapper>;
});

export default DetailPictures;