import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import { config } from "./config";
import { getFeaturedMovies, getMoviesByGenre } from "./service/MovieService";
import { Genres } from "./types/Genre";

export default async function Home() {
  const randomMovieId =
    config.featuredIds[Math.floor(Math.random() * config.featuredIds.length)];
  const featuredMovie = await getFeaturedMovies(randomMovieId);
  const featuredGenres = [Genres.Romance, Genres.Animation, Genres.SiFi, Genres.Commedy];

  const movies = await Promise.all(
    featuredGenres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 8 });
      return { sectionTitle: genre, movies };
    })
  );
  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 '>
        <Banner movie={featuredMovie} />
        {movies.map((movie) => (
          <MovieRow
            movies={movie.movies}
            key={movie.sectionTitle}
            sectionTitle={movie.sectionTitle}
          />
        ))} 
      </main>
    </div>
  );
}
