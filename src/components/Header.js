import React from 'react'
import './Header.css'
import { ReactComponent as MainLogo } from '../assets/svg/header/main-logo.svg'
import { ReactComponent as RightAlarmLogo } from '../assets/svg/header/right-alarm.svg'
import { ReactComponent as RightUserLogo } from '../assets/svg/header/right-user.svg'

import { useSelector, useDispatch } from 'react-redux';
import { selectTopMenuItem } from '../actions/index';

function Header() {
    const topMenuData = useSelector(state => state.header.topMenu)
    const dispatch = useDispatch()
    const selectTopMenuIteM = (id) => {
        dispatch(selectTopMenuItem(id));
    }
    return (
        <div className='Header'>
            <div className='top'>
                <div className='left'>
                    <MainLogo />
                </div>
                <div className='center'>
                    {
                        topMenuData.topMenuList.map((item)=>{
                            return(
                                <div className={item.id===topMenuData.topMenuSelectedId ? 'icon selection' : 'icon'}
                                key={"topMenuItem"+item.id} onClick={()=>selectTopMenuIteM(item.id)}>
                                    {item.icon}
                                    <div className='underline'></div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='right'>
                    <div className='icon'>
                        <RightAlarmLogo />
                    </div>
                    <div className='icon'>
                        <RightUserLogo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header