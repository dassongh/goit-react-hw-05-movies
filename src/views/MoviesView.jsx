import PageHeading from '../components/PageHeading/PageHeading';
import SearchMovies from '../components/SearchMovies/SearchMovies';

export default function MoviesView() {
  return (
    <>
      <PageHeading text="Search movies" />
      <SearchMovies />
    </>
  );
}
