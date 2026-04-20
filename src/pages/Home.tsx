import { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { CharacterCard } from '../components/CharaterCard';

export const Home = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const { characters, loading, error, info } = useCharacters(search, page);

  return (
    <div>
      <h1>Characters</h1>

      <input
        type="text"
        placeholder="Search character..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // reset pagination
        }}
      />

      {loading && <div className="loader"></div>}
      {error && <p>{error}</p>}

      <div className="grid">
        {characters.map((char: any) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>

      {/* PAGINACIÓN */}
      <div className="pagination">
        <button
          disabled={!info?.prev}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <span>Page {page}</span>

        <button
          disabled={!info?.next}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};