import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPics, setFilterBy } from '../src/store/actions/pic.actions';
import GalleryPage from './views/GalleryPage';
import AppHeader from './cmps/AppHeader';

function App() {
  const dispatch = useDispatch()
  const { page, category } = useSelector(state => state.picModule.filterBy)
  const sortBy = useSelector(state => state.picModule.sortBy)

  useEffect(() => {
    dispatch(setFilterBy({ page, category }))
    dispatch(loadPics({ page, category }, sortBy))
  }, [page, category, sortBy, dispatch])

  return (
    <section className="app-container">
      <AppHeader />
      <GalleryPage />
    </section>
  );
}

export default App;
