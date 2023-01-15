export type PokemonData = {
  name: string;
  url: string;
}

export type Pokemon = {
  sprites: {
      front_default: string;
    };
    forms: [{ name:  string;}];
    abilities: [{ ability: { name: string }}];
    stats: [{ stat: { name: string } }];
    id: string;
    url: string;
}