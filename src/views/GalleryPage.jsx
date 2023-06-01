import React, { useState, useRef } from 'react'
import PicDetailsModal from '../cmps/modals/PicDetails';
import { useSelector } from 'react-redux';
import { utilService } from '../services/util.service'
import { picService } from '../services/pic.service';

const GaleryPage = () => {
    // State variable definitions
    const pics = useSelector(state => state.picModule.pics)
    const { page } = useSelector(state => state.picModule.filterBy)


    // Modal handlers definitions
    const [isPicModalOpen, setIsPicModalOpen] = useState(false)
    const [selectedPic, setSelectedPic] = useState(null)
    const { handleToggleModal } = utilService
    const detailsPicRef = useRef(null)

    const showDetails = async (picId, checkServerCall = false) => {
        const currPic = checkServerCall ? picService.getById(picId)
            : pics.find(pic => pic.id === picId)
        setSelectedPic(currPic)
        handleToggleModal(setIsPicModalOpen, isPicModalOpen)
    }

    return (
        <main className='main-container'>
            <section className='pics-container'>
                {pics && pics.map(pic => {
                    return <div key={pic.id} className="flex">
                        <img
                            ref={detailsPicRef}
                            src={pic.webformatURL}
                            alt={pic.tags}
                            className="standard-img"
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
            <footer className="flex paging-section"> Page: {page}
            </footer>
        </main>
    )
}

export default GaleryPage