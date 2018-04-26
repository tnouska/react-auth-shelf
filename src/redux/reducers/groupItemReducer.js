
export const groupItem = (state = [],action) => {
    switch (action.type) {
        case 'SET_GROUP_ITEM':
            return action.payload;
        default:
            return state;
    }
}

export default groupItem 