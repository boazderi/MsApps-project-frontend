import { picService } from "../../services/pic.service"

export function loadPics(filterBy, sortBy) {

    return async (dispatch) => {
        try {
            const data = await picService.query(filterBy, sortBy)
            dispatch({ type: 'SET_PICS', pics: data.filteredPics })
            dispatch({ type: 'SET_MAX_PAGES', maxPages: data.totalPages })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function setFilterBy(filterBy) {

    return (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER_BY', filterBy: { ...filterBy } })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function setSortBy(sortByParam) {

    return (dispatch) => {
        try {
            dispatch({ type: 'SET_SORT_BY', sortBy: sortByParam })
        } catch (err) {
            console.log('err:', err)
        }
    }
}