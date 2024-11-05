import React from 'react';
import { Genre } from '../types/movie';

interface GenreSelectProps {
  genres: Genre[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

function GenreSelect({ genres, selectedGenre, onGenreChange }: GenreSelectProps) {
  return (
    <select
      className="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:border-transparent"
      value={selectedGenre}
      onChange={(e) => onGenreChange(e.target.value)}
    >
      <option value="">Select Genre</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
}

export default GenreSelect;