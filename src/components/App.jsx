import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import '../index.css';

const App = () => {
  const [query, setQuery] = useState('');

  const onSubmit = newQuery => {
    setQuery(newQuery);
  };

  return (
    <div className="app">
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery query={query} />
    </div>
  );
};

export default App;
