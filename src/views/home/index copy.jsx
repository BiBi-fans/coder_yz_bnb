import React, { memo, useEffect, lazy } from 'react';
import { HomeWrapper } from './style';
import { BannerWrapper } from './c-cnps/home-banner/style';
import { useHomeStore } from '@/store/homeStore';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';

// const SectionHeader = lazy(()=>import('@/components/section-header'))
// const SectionRooms = lazy(()=>import('@/components/section-rooms'))

const Home = memo(() => {
    const { goodPriceInfo, highScoreInfo, changeGoodPriceInfoAction, changeHighScoreInfoAction } = useHomeStore()
    const { title, subtitle = '', list } = goodPriceInfo
    const { title: highTitle, subtitle: highSubtitle, list: highList } = highScoreInfo
    useEffect(() => {
        changeGoodPriceInfoAction()
        changeHighScoreInfoAction()
    }, [])

    return <HomeWrapper>
        <BannerWrapper />
        <div className="content">
            <SectionHeader title={title} subtitle={subtitle} />
            <SectionRooms roomItems={list}></SectionRooms>
            <SectionHeader title={highTitle} subtitle={highSubtitle} />
            <SectionRooms roomItems={highList}></SectionRooms>
        </div>

    </HomeWrapper>;
});

export default Home;