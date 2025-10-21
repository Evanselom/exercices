import { useEffect, useState } from 'react';

export default function FetchRecipes() {
  const [status, setStatus] = useState('idle'); // idle | loading | error | success
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: fetch('/api/data.json') et gérer états
  }, []);

  if (status === 'loading') return <p>Chargement…</p>;
  if (status === 'error') return <p>Erreur : {error}</p>;
  if (status === 'success') return (
    <div>
      {data.map(r => <article key={r.id}><h4>{r.title}</h4><p>{r.time}</p></article>)}
    </div>
  );

  return null;
}
