import { ReactComponent as MenuLogo1 } from '../assets/svg/header/menu-logo1.svg'
import { ReactComponent as MenuLogo2 } from '../assets/svg/header/menu-logo2.svg'
import { ReactComponent as MenuLogo3 } from '../assets/svg/header/menu-logo3.svg'
import { ReactComponent as MenuLogo4 } from '../assets/svg/header/menu-logo4.svg'
import { ReactComponent as MenuLogo5 } from '../assets/svg/header/menu-logo5.svg'

let initState = {
    header: {
        topMenu: {
            topMenuSelectedId: 1,
            topMenuList:[
                {
                    id: 1,
                    string: "sdfdsf",
                    icon: <MenuLogo1 />
                },
                {
                    id: 2,
                    string: "sdfdsf",
                    icon: <MenuLogo2 />
                },
                {
                    id: 3,
                    icon: <MenuLogo3 />
                },
                {
                    id: 4,
                    icon: <MenuLogo4 />
                },
                {
                    id: 5,
                    icon: <MenuLogo5 />
                },
            ]
        }
    },
    customer: {
        chooseList : [
            {
                id: 1,
                string: "Choose Filter",
            },
            {
                id: 2,
                string: "One-time passcode",
            },
            {
                id: 3,
                string: "NSLN",
            },
            {
                id: 4,
                string: "Order ID",
            },
            {
                id: 5,
                string: "Return ID",
            },
            {
                id: 6,
                string: "Chargeback ID",
            },
            {
                id: 7,
                string: "Chat ID",
            },
            {
                id: 8,
                string: "Email reference ID",
            },
            {
                id: 9,
                string: "Username",
            },
            {
                id: 10,
                string: "Address",
            },
        ],
        filterMenu: {
            count: 0,
            list: [
            ]
        }
    }
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SELECT_TOP_MENU_ITEM': {
            return {
                ...state,
                header:{
                    ...state.header,
                    topMenu:{
                        ...state.header.topMenu,
                        topMenuSelectedId: action.payload.id,
                    }
                }
            }
        }
        case 'ADD_FILTER': {
            var data = {
                id: state.customer.filterMenu.count+1,
                string: action.payload.string
            }
            var tempList = state.customer.filterMenu.list
            tempList.push(data)
            return {
                ...state,
                customer:{
                    ...state.customer,
                    filterMenu:{
                        ...state.customer.filterMenu,
                        count: state.customer.filterMenu.count+1,
                        list: tempList
                    }
                }
            }
        }
        case 'DELETE_FILTER': {
            var tempList = state.customer.filterMenu.list
            tempList.splice(action.payload.id-1, 1)
            tempList.forEach((item, index)=>{
                if(index >= action.payload.id-1){
                    item.id --;
                }
            })
            return {
                ...state,
                customer:{
                    ...state.customer,
                    filterMenu:{
                        ...state.customer.filterMenu,
                        count: state.customer.filterMenu.count-1,
                        list: tempList
                    }
                }
            }
        }
        default: return state
    }
}

export default reducer;