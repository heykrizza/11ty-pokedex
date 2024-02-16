const fetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
  try {
    const pokemonList = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=30',
      {
        duration: '1d',
        type: 'json',
      }
    );

    return await Promise.all(
      pokemonList.results.map(
        async pokemon =>
          await fetch(pokemon.url, {
            duration: '1d',
            type: 'json',
          })
      )
    );
  } catch (error) {
    console.error(`Fetch failed in pokemonList.js. ${error}`);
  }
};
