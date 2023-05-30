import React, { useState, useRef } from 'react'
import PicDetailsModal from '../cmps/modals/PicDetailsModal'
import { useSelector } from 'react-redux';
import { utilService } from '../services/util.service'

const GalleryPage = () => {
    
    // State variable defining
    const pics = useSelector(state => state.picModule.pics)

    // Modal handlers defining
    const [isPicModalOpen, setIsPicModalOpen] = useState(false)
    const [selectedPic, setSelectedPic] = useState(null)
    const { handleToggleModal } = utilService
    const detailsPicRef = useRef(null)

    const showDetails = async (picId) => {
        const currPic = pics.find(pic => pic.id === picId)
        await setSelectedPic(currPic)
        handleToggleModal(setIsPicModalOpen, isPicModalOpen)
    }

    return (
        <section className='pics-container'>
            {pics && pics.map(pic => {
                return <div key={pic.id} className="flex">
                    <img
                        ref={detailsPicRef}
                        src={pic.webformatURL}
                        alt={pic.tags}
                        className="standart-img"
                        onClick={() => showDetails(pic.id)}
                    />
                </div>
            })}
            <PicDetailsModal
                handleToggleModal={handleToggleModal}
                selectedPic={selectedPic}
                isPicModalOpen={isPicModalOpen}
                setIsPicModalOpen={setIsPicModalOpen}
                detailsPicRef={detailsPicRef} />
        </section>
    )
}

export default GalleryPage