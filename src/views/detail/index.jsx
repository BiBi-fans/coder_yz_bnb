import { useDetailStore } from '@/store/detailStore';
import React, { memo } from 'react';
import DetailPictures from './c-cnps/detail-pictures';
import DetailInfo from './c-cnps/detail-info';
import { DetailWrapper } from './style';

const Detail = memo(() => {
    const detailStore = useDetailStore()
    const { detailInfo } = detailStore
    const pictureUrls= detailInfo.picture_urls

    return <DetailWrapper>
        <DetailPictures pictureUrls={pictureUrls} />
        <DetailInfo />
    </DetailWrapper>;
});

export default Detail;