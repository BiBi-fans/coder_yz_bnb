import React, { memo, useEffect, startTransition } from 'react';

import { HomeWrapper } from './style';
import { BannerWrapper } from './c-cnps/home-banner/style';
import { useHomeStore } from '@/store/homeStore';
import HomeSection from './c-cnps/home-section';
import HomeSectionV2 from './c-cnps/home-section-v2';
import { isEmpty } from '@/utils';
import LongforSection from './c-cnps/home-longfor';
import HomeSectionV3 from './c-cnps/home-section-v3';


const Home = memo(() => {
    const { goodPriceInfo, highScoreInfo, discountInfo, longforInfo, plusInfo, hotRecommendInfo, initHomeDataAction } = useHomeStore()
    
    useEffect(() => {
        startTransition(() => {
            initHomeDataAction()
        })
    }, [])

    return <HomeWrapper>
        <BannerWrapper />
        <div className="content">
            {isEmpty(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
            {isEmpty(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo} />}
            {isEmpty(longforInfo) && <LongforSection infoData={longforInfo}/>}
            {isEmpty(highScoreInfo) && <HomeSection infoData={highScoreInfo}/>}
            {isEmpty(goodPriceInfo) && <HomeSection infoData={goodPriceInfo}/>}
            {isEmpty(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
        </div>
    </HomeWrapper>;
});

export default Home;