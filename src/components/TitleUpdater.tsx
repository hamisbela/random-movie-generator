import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const genres = [
  { id: 28, name: 'Action', path: '/action' },
  { id: 35, name: 'Comedy', path: '/comedy' },
  { id: 18, name: 'Drama', path: '/drama' },
  { id: 27, name: 'Horror', path: '/horror' },
  { id: 10749, name: 'Romance', path: '/romance' },
  { id: 878, name: 'Science Fiction', path: '/sci-fi' }
];

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentGenre = genres.find(genre => genre.path === currentPath);
    const title = currentGenre 
      ? `Random ${currentGenre.name} Movie Generator`
      : 'Random Movie Generator';
      
    // Update both the document title and meta description
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        currentGenre
          ? `Discover your next favorite ${currentGenre.name.toLowerCase()} movie with our Random ${currentGenre.name} Movie Generator.`
          : 'Discover your next favorite movie with our Random Movie Generator.'
      );
    }
  }, [location.pathname]);

  return null;
}

export default TitleUpdater;