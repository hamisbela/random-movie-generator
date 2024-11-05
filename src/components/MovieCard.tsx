import React from 'react';
import { Star } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
      <div className="md:flex">
        <div className="md:w-1/3">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full min-h-[300px] bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400">No poster available</span>
            </div>
          )}
        </div>
        <div className="p-6 md:w-2/3">
          <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-yellow-400 font-semibold">
              {movie.vote_average.toFixed(1)}/10
            </span>
            <span className="text-gray-400">
              ({new Date(movie.release_date).getFullYear()})
            </span>
          </div>
          <p className="text-gray-300 mb-4">{movie.overview}</p>
          {movie.cast && movie.cast.length > 0 && (
            <div className="border-t border-gray-700 pt-4">
              <h3 className="font-semibold mb-2">Cast:</h3>
              <div className="flex flex-wrap gap-2">
                {movie.cast.map((actor, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {actor.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;