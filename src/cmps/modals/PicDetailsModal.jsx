import React, { useRef } from 'react'
import useClickOutside from '../../hooks/useClickOutside'

const PicDetailsModal = ({ handleToggleModal, selectedPic, setIsPicModalOpen, isPicModalOpen, detailsPicRef }) => {
    const detailsList = ['views', 'downloads', 'collections', 'likes', 'tags']
    const picDetailsModalRef = useRef(null)

    useClickOutside(picDetailsModalRef, () =>
        handleToggleModal(setIsPicModalOpen, isPicModalOpen), detailsPicRef)

    return (
        <>
            {selectedPic && <section ref={isPicModalOpen ? picDetailsModalRef : null} className={`pic-details-modal ${isPicModalOpen ? 'open' : 'close'} flex`}>
                <h2 className='details-title'>Picture details</h2>
                <div className='pic-container'>
                    <img className='pic-details-img' src={selectedPic.webformatURL} alt={selectedPic.tags} />
                </div>
                <ul>
                    {detailsList.map((detailTitle, idx) => {
                        return <li className='detail-item' key={idx}>
                            <span className='detail-subtitle'> {detailTitle} :</span>
                            {selectedPic[detailTitle]}
                        </li>
                    })}
                </ul>
                <button className='close-modal-btn' onClick={() => setIsPicModalOpen(false)} > Close </button>
            </section>}
        </>

    )
}

export default PicDetailsModal