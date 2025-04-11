export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
}

export interface DeitalingCharacter {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
}
