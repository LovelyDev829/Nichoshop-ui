import React, { useState } from 'react'
import './Filter.css'
// import { selectTopTab,loggingOut } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as DropDownLogo } from '../assets/svg/filter/dropdown-logo.svg'
import { ReactComponent as SearchLogo } from '../assets/svg/filter/search-logo.svg'
import { addFilter } from '../actions/index';

function Filter() {
    const chooseList = useSelector(state => state.customer.chooseList)
    const BottomMenuData = useSelector(state => state.header.BottomMenu)
    const [ droplistChooseId, setDroplistChooseId ] = useState(1);
    const [ droplistFlag, setDroplistFlage ] = useState(false);
    const [ warningFlag, setWarningFlag ] = useState(false);
    const [ filterInput, setFilterInput ] = useState("")
    const dispatch = useDispatch()
    const addFilteR = (string) => {
        dispatch(addFilter(string));
    }
    return (
        <div className='Filter'>
            <div className='filter-box'>
                <div className='left'>
                    <div className='dropbox'>
                        <div className='drop-text'>{chooseList[droplistChooseId-1]?.string}</div>
                        <DropDownLogo onClick={()=>setDroplistFlage(!droplistFlag)} />
                        <div className={droplistFlag ? 'drop-list' : 'drop-list hidden'}
                        onMouseLeave={()=>setDroplistFlage(false)}>
                            {
                                chooseList.map((item)=>{
                                    return(
                                        <div className={droplistChooseId === item.id ? 'drop-item selected' : 'drop-item'} key={"drop-item"+item.id}
                                        onClick={()=>{setDroplistChooseId(item.id); setDroplistFlage(false)}}>
                                            <p>{item.string}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='item-input'>
                        <input value={filterInput} onChange={(e)=>{
                            setFilterInput(e.target.value)
                        }}></input>
                    </div>
                </div>
                <div className='right-search-button' onClick={()=>{
                    addFilteR(filterInput)
                    setFilterInput("")
                }}>
                    <SearchLogo />
                </div>
            </div>
            <p className = {warningFlag ? 'warning' : 'warning hidden'}>This one-time passcode doesn’t exist</p>
        </div>
    )
}

export default Filter