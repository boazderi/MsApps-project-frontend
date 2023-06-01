import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFilterBy } from '../../store/actions/pic.actions';
import useClickOutside from '../../hooks/useClickOutside';

const CategoryModal = ({ setIsCategoriesModalOpen, isCategoriesModalOpen, handleToggleModal, categoryBtnRef }) => {
    const dispatch = useDispatch();
    const categories = ['work', 'sports', 'nature', 'cities', 'animals', 'food', 'technology', 'art', 'music'];
    const { category } = useSelector(state => state.picModule.filterBy)
    const categoryModalRef = useRef(null)

    useClickOutside(categoryModalRef, () =>
        handleToggleModal(setIsCategoriesModalOpen, isCategoriesModalOpen), categoryBtnRef)

    const handleSelect = (newCategory) => {
        dispatch(setFilterBy({ page: 1, category: newCategory }))
        handleToggleModal(setIsCategoriesModalOpen, isCategoriesModalOpen)
    }

    return (
        <>
            <section
                ref={isCategoriesModalOpen ? categoryModalRef : null}
                className={`category-modal flex column align-center ${isCategoriesModalOpen ? 'open' : 'close'}`}>
                <h2>Choose Category</h2>
                <section className='select-grid'>
                    {categories.map((categoryItem) => (
                        <button
                            className={`category-option ${categoryItem === category ? 'selected' : ''}`}
                            tabIndex="0"
                            key={categoryItem}
                            value={categoryItem}
                            onClick={() => handleSelect(categoryItem)}
                        >
                            {categoryItem}
                        </button>
                    ))}
                </section>
            </section>
        </>
    )
}

export default CategoryModal