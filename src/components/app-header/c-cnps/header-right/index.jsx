import React, { memo, useEffect, useState } from 'react';
import RightWrapper from './style';
import IconGlobal from '@/assets/svg/icon-global';
import IconProfileMenu from '@/assets/svg/icon-profile-menu';
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar';

const HeaderRight = memo(() => {
    const [showPanel, setShowPanel] = useState(false)

    const handleClick = () => {
        setShowPanel(true)
    }

    // 副作用代码
    useEffect(() => {
        function windowHandleClick() {
            setShowPanel(false)
        }
        window.addEventListener('click', windowHandleClick, true)
        return () => {
            window.removeEventListener('click', windowHandleClick)
        }
    }, [])

    return <RightWrapper>
        <div className="btns">
            <span>登入</span>
            <span>注册</span>
            <span>
                <IconGlobal />
            </span>
        </div>

        <div className="profile" onClick={handleClick} >
            <IconProfileMenu />
            <IconProfileAvatar />
            {
                showPanel && (<div className="panel" >
                    <div className="top">
                        <div className="item register">注册</div>
                        <div className="item login">登录</div>
                    </div>
                    <div className="bottom">
                        <div className="item">出租房源</div>
                        <div className="item">开展体验</div>
                        <div className="item">帮助</div>
                    </div>
                </div>)
            }
        </div>

    </RightWrapper>;
});

export default HeaderRight;