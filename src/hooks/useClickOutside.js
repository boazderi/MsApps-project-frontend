import { useEffect} from 'react';

const useClickOutside = (ref, callback, btnRef) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)
      && btnRef.current && btnRef.current !== event.target) {
        callback();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [ref, callback, btnRef]);
}

export default useClickOutside;