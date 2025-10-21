import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: appeler onSearch avec la valeur
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Rechercher..." />
      <button type="submit">Rechercher</button>
    </form>
  );
}
