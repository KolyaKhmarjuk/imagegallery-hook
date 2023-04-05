import { useState } from 'react';
import s from '../Searchbar/Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const inputChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const hendleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      alert('Введите что-то');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={hendleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.button_label}>Search</span>
        </button>

        <input
          className={s.input}
          name="query"
          onChange={inputChange}
          value={query}
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
