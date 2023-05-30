import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPics, setFilterBy } from '../src/store/actions/pic.actions';
import AppHeader from './cmps/AppHeader';
import GalleryPage from './views/GalleryPage';

function App() {
  const dispatch = useDispatch()
  const {page, category} = useSelector(state => state.picModule.filterBy)
  const sortBy = useSelector(state => state.picModule.sortBy)

  useEffect(() => {
    dispatch(setFilterBy({page ,category}))
    dispatch(loadPics({page, category}, sortBy))
  }, [page, category, sortBy, dispatch])

  return (
    <div className="app-container">
        <AppHeader />
      <main className='main-container'>
        <GalleryPage />
        <footer className="flex paging-section"> Page: {page}
        </footer>
      </main>
    </div>
  );
}

export default App;
