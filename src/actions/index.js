export const selectTopMenuItem = (id) => {
    return {
        type: 'SELECT_TOP_MENU_ITEM',
        payload: {
            id: id
        }
    }
}

export const addFilter = (string) => {
    return {
        type: 'ADD_FILTER',
        payload: {
            string: string
        }
    }
}

export const deleteFilter = (id) => {
    return {
        type: 'DELETE_FILTER',
        payload: {
            id: id
        }
    }
}