const INITIAL_STATE = {
    pics: [],
    filterBy: {
        page: 1,
        category: '',
    },
    sortBy: 'views',
    maxPages: null,
}


export function picReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_PICS':
            return {
                ...state,
                pics: action.pics
            }
        case 'ADD_PIC':
            return {
                ...state,
                pics: [...state.pics, action.pic]
            }
        case 'REMOVE_PIC':
            return {
                ...state,
                pics: state.pics.filter(pic => pic._id !== action.picId)
            }
        case 'UPDATE_PIC':
            return {
                ...state,
                pics: state.pics.map(pic => pic._id === action.pic._id ? action.pic : pic)
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_MAX_PAGES':
            return {
                ...state,
                maxPages: action.maxPages
            }

        default:
            return state
    }

}