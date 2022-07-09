import React from 'react'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './Customer.css'
import { ReactComponent as FilterCancelLogo } from '../assets/svg/customer/filter-cancel.svg'

import { useSelector, useDispatch } from 'react-redux';
import { deleteFilter } from '../actions/index';

function Customer() {
    const filterMenuData = useSelector(state => state.customer.filterMenu)
    const dispatch = useDispatch()
    const deleteFilteR = (id) => {
        dispatch(deleteFilter(id));
    }
    return (
        <div className='Customer'>
            <Header />
            <div className='body'>
                <div className='filter'>
                    <div className='filter-items'>
                        {
                            filterMenuData.list.map((item)=>{
                                return(
                                    <div className='filter-item' key={"filterItem"+ item.id}>
                                        <p>{item.string}</p>
                                        <FilterCancelLogo onClick={()=>deleteFilteR(item.id)}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Filter />
            </div>
            <Footer />
        </div>
    )
}

export default Customer