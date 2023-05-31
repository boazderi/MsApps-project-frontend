import React, { useState, useEffect, useRef } from 'react'
import CategoryModal from './modals/CategoryModal'
import { useDispatch, useSelector } from 'react-redux';
import { setFilterBy } from '../store/actions/pic.actions';
import SortOptionsModal from './modals/SortOptionsModal';
import { utilService } from '../services/util.service'

const AppHeader = () => {

    // State variables definitions
    const { page, category } = useSelector(state => state.picModule.filterBy)
    const maxPages = useSelector(state => state.picModule.maxPages)
    const dispatch = useDispatch()

    // Category and sort modals handlers definitions
    const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false)
    const [isSortModalOpen, setIsSortModalOpen] = useState(false)
    const categoryBtnRef = useRef(null)
    const sortBtnRef = useRef(null)
    const { handleToggleModal } = utilService

    useEffect(() => {
        dispatch(setFilterBy({ page, category }))
    }, [dispatch, page, category])

    const handleChangePage = (increment) => {
        const goToPage = page + increment
        dispatch(setFilterBy({ page: goToPage, category }))
    }

    return (
        <section className='app-header'>
            <header className='flex space-between align-center'>
                <button
                    className={`prev-btn ${page === 1 ? 'disable' : ''}`}
                    disabled={page === 1}
                    onClick={() => handleChangePage(-1)}
                > Prev </button>
                <div className='flex category-sort-btns'>
                    <button
                        ref={categoryBtnRef}
                        className='header-btn category-btn'
                        onClick={() => { handleToggleModal(setIsCategoriesModalOpen, isCategoriesModalOpen) }}
                    > Category </button>
                    <div className='header-divider-line'></div>
                    <button
                        ref={sortBtnRef}
                        title='Sort pictures'
                        className='header-btn sort-btn'
                        onClick={() => handleToggleModal(setIsSortModalOpen, isSortModalOpen)} />
                </div>
                <SortOptionsModal
                    isSortModalOpen={isSortModalOpen}
                    setIsSortModalOpen={setIsSortModalOpen}
                    handleToggleModal={handleToggleModal}
                    sortBtnRef={sortBtnRef}
                />
                <CategoryModal
                    isCategoriesModalOpen={isCategoriesModalOpen}
                    setIsCategoriesModalOpen={setIsCategoriesModalOpen}
                    handleToggleModal={handleToggleModal}
                    categoryBtnRef={categoryBtnRef} />
                <button
                    className={`next-btn ${page >= maxPages ? 'disable' : ''}`}
                    disabled={page >= maxPages}
                    onClick={() => handleChangePage(1)}
                > Next
                </button>
            </header>
        </section>
    )
}

export default AppHeader