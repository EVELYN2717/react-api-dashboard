export const getCharacters = async () => {
  const res = await fetch('/api/api/character');
  return res.json();
};