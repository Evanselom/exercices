import { useState } from 'react';
import SearchBar from './SearchBar';
import recipes from '../01-card-recipe-starter/recipes';
import CardRecipe from '../01-card-recipe-starter/CardRecipe';

export default function AppSearch() {
  const [query, setQuery] = useState('');

  const filtered = recipes.filter(r => {
    // TODO: filtrer par title avec query
    return true;
  });

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      <section>
        {filtered.map(r => <CardRecipe key={r.id} {...r} />)}
      </section>
    </div>
  );
}
