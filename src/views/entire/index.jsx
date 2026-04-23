import React, { memo, useEffect, useState } from 'react';

import { EntireWrapper } from './style';
import { useEntireStore } from '@/store/entireStore'
import { useMainStore } from '@/store/mainStore';
import { useShallow } from "zustand/shallow";

import EntireFilter from './c-cnps/entire-filter';
import EntireRooms from './c-cnps/entire-rooms';
import EntirePagation from './c-cnps/entire-pagiation';
import { useScrollTop } from '@/hooks/useScrollTop';

const Entire = memo(() => {
    const fetchEntireData = useEntireStore((state) => state.fetchEntireData)
    const changeHeaderConfig = useMainStore((state) => state.changeHeaderConfig)

    const { roomList, isLoading } = useEntireStore(useShallow((state) => ({
        roomList: state.roomList,
        isLoading: state.isLoading
    })))

    useScrollTop()


    useEffect(() => {
        fetchEntireData()
        changeHeaderConfig({ isFixed: true, isHome: false })
    }, [fetchEntireData, changeHeaderConfig])

    return <EntireWrapper>
        <EntireFilter />
        {!!roomList.length && <EntireRooms />}
        {!!roomList.length && < EntirePagation />}
    </EntireWrapper>
});

export default Entire;