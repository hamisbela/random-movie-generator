import React from 'react';
import { Film } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieGenerator from './components/MovieGenerator';
import SEOContent from './components/SEOContent';
import TitleUpdater from './components/TitleUpdater';

const genres = [
  { id: 28, name: 'Action', path: '/action' },
  { id: 35, name: 'Comedy', path: '/comedy' },
  { id: 18, name: 'Drama', path: '/drama' },
  { id: 27, name: 'Horror', path: '/horror' },
  { id: 10749, name: 'Romance', path: '/romance' },
  { id: 878, name: 'Science Fiction', path: '/sci-fi' }
];

function App() {
  return (
    <Router>
      <TitleUpdater />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <header className="py-6 px-4 border-b border-gray-700">
          <nav className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Film className="w-8 h-8 text-purple-400" />
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Random Movie Generator
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {genres.map((genre) => (
                <Link
                  key={genre.id}
                  to={genre.path}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {genre.name} Movies
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <>
                <MovieGenerator />
                <SEOContent />
              </>
            } />
            {genres.map((genre) => (
              <Route
                key={genre.id}
                path={genre.path}
                element={
                  <>
                    <MovieGenerator defaultGenre={genre.id.toString()} />
                    <SEOContent genre={genre.name} />
                  </>
                }
              />
            ))}
          </Routes>
        </main>

        <footer className="border-t border-gray-700 py-6 mt-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              <div>
                <h3 className="font-semibold mb-3 text-purple-400">Movie Generators</h3>
                <ul className="space-y-2">
                  {genres.map((genre) => (
                    <li key={genre.id}>
                      <Link
                        to={genre.path}
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        Random {genre.name} Movies
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-purple-400">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center text-gray-400 pt-8 border-t border-gray-700">
              <p>© 2024 Random Movie Generator. Powered by TMDB API.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;