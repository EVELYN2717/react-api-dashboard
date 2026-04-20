import { useEffect, useState } from 'react';

export const useCharacters = (search: string, page: number) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [info, setInfo] = useState<any>(null);

  useEffect(() => {
    setLoading(true);

    fetch(`https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results || []);
        setInfo(data.info);
      })
      .catch(() => setError('Error loading data'))
      .finally(() => setLoading(false));

  }, [search, page]);

  return { characters, loading, error, info };
};