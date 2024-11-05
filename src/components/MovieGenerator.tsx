import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { Movie, Genre } from '../types/movie';
import MovieCard from './MovieCard';
import GenreSelect from './GenreSelect';

const API_KEY = 'add558d8eb86fe05721bb053be543d6b';
const GENRES: Genre[] = [
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
  { id: 27, name: 'Horror' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
];

interface MovieGeneratorProps {
  defaultGenre?: string;
}

function MovieGenerator({ defaultGenre }: MovieGeneratorProps) {
  const [selectedGenre, setSelectedGenre] = useState(defaultGenre || '');
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (defaultGenre) {
      setSelectedGenre(defaultGenre);
      generateMovie(defaultGenre);
    }
  }, [defaultGenre]);

  const generateMovie = async (genreId = selectedGenre) => {
    if (!genreId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const page = Math.floor(Math.random() * 5) + 1;
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
      );
      
      if (!response.data.results?.length) {
        throw new Error('No movies found for this genre');
      }

      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      
      const creditsResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${randomMovie.id}/credits?api_key=${API_KEY}`
      );
      
      setMovie({
        ...randomMovie,
        cast: creditsResponse.data.cast.slice(0, 5),
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch movie. Please try again.';
      setError(errorMessage);
      setMovie(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        {!defaultGenre && (
          <GenreSelect
            genres={GENRES}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
          />
        )}
        <button
          onClick={() => generateMovie()}
          disabled={loading || !selectedGenre}
          className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold 
                   hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 
                   disabled:cursor-not-allowed flex items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating...
            </>
          ) : (
            `Generate Random ${GENRES.find(g => g.id.toString() === selectedGenre)?.name || ''} Movie`
          )}
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg text-center">
          {error}
        </div>
      )}

      {movie && <MovieCard movie={movie} />}
    </div>
  );
}

export default MovieGenerator;