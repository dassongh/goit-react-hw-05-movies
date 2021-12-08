import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsView from './views/MovieDetailsView';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsView />} />
      </Routes>
    </Container>
  );
}

export default App;
