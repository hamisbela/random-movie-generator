import React from 'react';

interface SEOContentProps {
  genre?: string;
}

function SEOContent({ genre }: SEOContentProps) {
  const title = genre ? `Random ${genre} Movie Generator` : 'Random Movie Generator';
  const description = genre
    ? `Discover great ${genre.toLowerCase()} movies randomly selected just for you`
    : 'Discover great movies randomly selected just for you';

  return (
    <div className="mt-16 space-y-8 text-gray-300">
      <section>
        <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
        <p className="mb-4">
          {description}. Our {genre ? `${genre.toLowerCase()} movie` : 'movie'} generator is the perfect tool for film enthusiasts 
          looking to discover their next favorite {genre ? `${genre.toLowerCase()} film` : 'movie'}. 
          Simply click the generate button, and let our Random {genre || 'Movie'} Generator work its magic!
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">How Does the {genre || 'Movie'} Generator Work?</h2>
        <p className="mb-4">
          The Random {genre || 'Movie'} Generator uses advanced algorithms to search through an extensive database of 
          {genre ? ` ${genre.toLowerCase()} ` : ' '}films. Our generator filters through thousands of movies to randomly select 
          one that matches your criteria, complete with ratings, cast information, and a detailed overview.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Why Use Our Random {genre || 'Movie'} Generator?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Instant {genre ? `${genre.toLowerCase()} ` : ''}movie recommendations</li>
          <li>Discover hidden gems in the {genre ? `${genre.toLowerCase()} ` : ''}genre</li>
          <li>Break out of your movie-watching routine</li>
          <li>Perfect for movie nights</li>
          <li>Expand your {genre ? `${genre.toLowerCase()} ` : ''}film knowledge</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-white mb-2">How are the {genre ? `${genre.toLowerCase()} ` : ''}movies selected?</h3>
            <p>
              Our generator uses the TMDB database to select high-quality {genre ? `${genre.toLowerCase()} ` : ''}movies. 
              Each selection is completely random within the {genre ? `${genre.toLowerCase()} ` : ''}category.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Will I get the same movie recommendation twice?</h3>
            <p>
              No! The Random {genre || 'Movie'} Generator provides a different suggestion each time you click 
              the generate button, ensuring a fresh experience every time.
            </p>
          </div>
        </div>
      </section>

      <section className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">Start Discovering {genre || 'Movies'} Now</h2>
        <p>
          Whether you're a die-hard {genre ? `${genre.toLowerCase()} ` : ''}fan or just looking to explore the genre, 
          our Random {genre || 'Movie'} Generator makes the process fun and exciting. With detailed information including 
          ratings, cast, and plot summaries, you can make informed decisions about your next movie night selection.
        </p>
      </section>
    </div>
  );
}

export default SEOContent;