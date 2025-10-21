import React from 'react';
import RecipesList from './components/01-card-recipe-starter/RecipesList';
import Counter from './components/02-counter-starter/Counter';
import AppSearch from './components/03-search-starter/AppSearch';
import FetchRecipes from './components/04-fetch-starter/FetchRecipes';

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Atelier React — TP</h1>
      <section>
        <h2>01 — CardRecipe (starter)</h2>
        <RecipesList />
      </section>
      <hr />
      <section>
        <h2>02 — Counter (starter)</h2>
        <Counter />
      </section>
      <hr />
      <section>
        <h2>03 — Search (starter)</h2>
        <AppSearch />
      </section>
      <hr />
      <section>
        <h2>04 — Fetch (starter)</h2>
        <FetchRecipes />
      </section>
    </div>
  );
}
