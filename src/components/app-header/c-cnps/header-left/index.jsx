import React, { memo } from 'react';
import { useNavigate } from 'react-router';
import LeftWrapper from './style';
import IconLogo from '@/assets/svg/icon_logo';

const HeaderLeft = memo(() => {
    const navigate = useNavigate();

    return <LeftWrapper>
        <div className="logo" onClick={() => navigate('/')}>
            <IconLogo />
        </div>
    </LeftWrapper>;
});

export default HeaderLeft;