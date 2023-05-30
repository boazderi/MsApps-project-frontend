
import { httpService } from './http.service.js'

const STORAGE_KEY = 'pic'

export const picService = {
    query,
    getById,
    remove,
}
window.cs = picService


async function query(filterBy = { category: '' , page: 1}, sortBy='views') {
    return httpService.get(STORAGE_KEY, {filterBy, sortBy})
}

function getById(picId) {
    return httpService.get(`${STORAGE_KEY}/${picId}`)
}

async function remove(picId) {
    return httpService.delete(`${STORAGE_KEY}/${picId}`)
}