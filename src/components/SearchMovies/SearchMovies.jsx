import { fetchByName } from '../../services/fetchMovies';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import s from './SearchMovies.module.css';

export default function SearchMovies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (searchQuery) fetchByName(searchQuery).then(response => setResult([...response.results]));
  }, [searchQuery]);

  const formHandler = e => {
    e.preventDefault();

    setSearchQuery(e.target[0].value);

    e.target.reset();
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <input type="text" className={s.input} />
        <button type="submit" className={s.btn}></button>
      </form>

      {result &&
        result.map(({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          );
        })}
    </>
  );
}
