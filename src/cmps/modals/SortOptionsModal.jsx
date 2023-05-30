import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../store/actions/pic.actions';
import useClickOutside from '../../hooks/useClickOutside';

const SortOptionsModal = ({ handleToggleModal, setIsSortModalOpen, isSortModalOpen, sortBtnRef }) => {
    const dispatch = useDispatch();
    const sortBy = useSelector(state => state.picModule.sortBy)
    const sortOptionsList = ['views', 'downloads', 'collections', 'likes']
    const sortModalRef = useRef(null)

    useClickOutside(sortModalRef, () =>
        handleToggleModal(setIsSortModalOpen, isSortModalOpen), sortBtnRef)

    const handleSelect = (sortOption) => {
        dispatch(setSortBy(sortOption))
        handleToggleModal(setIsSortModalOpen, isSortModalOpen)
    }

    return (
        <>
            <section
                ref={isSortModalOpen ? sortModalRef : null}
                className={`sort-options-modal ${isSortModalOpen ? 'open' : 'close'}`}>
                <div className='arrow-up'></div>
                <h3 className='sort-modal-title'> Sort by </h3>
                <ul>
                    {sortOptionsList.map(sortOption => (
                        <li key={sortOption}>
                            <button className={`sort-option ${sortBy === sortOption ? 'active' : ''}`} onClick={() => handleSelect(sortOption)}>{sortOption}</button>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default SortOptionsModal