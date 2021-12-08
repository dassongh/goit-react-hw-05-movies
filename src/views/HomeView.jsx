import PageHeading from '../components/PageHeading/PageHeading';
import TrendingMoviesList from '../components/TrendingMoviesList/TrendingMoviesList';

export default function HomeView() {
  return (
    <>
      <PageHeading text="Trending movies" />
      <TrendingMoviesList />
    </>
  );
}
