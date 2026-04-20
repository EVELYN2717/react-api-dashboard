import type { Character } from "../types/character";

export const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.species}</p>
    </div>
  );
};