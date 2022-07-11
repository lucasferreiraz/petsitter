export interface SittersDataProps {
  id: number;
  name: string;
  address: string;
  price: string;
  description: string;
  tags: string[];
  rating: number;
  type?: string;
}

export const sittersData: SittersDataProps[] = [
  {
    id: 1,
    name: 'Kaiky Santos',
    address: 'Fortaleza - CE',
    price: 'R$ 3,00',
    description: 'Desde sempre gostei muito de animais, meu tio me escolhia quando viajava e deixava seu cachorro comigo. Sempre gostei de dar essa atenção especial a eles, é o que eu me sinto bem em fazer. O que eles precisam é de atenção e carinho e em troca recebemos o amor incondicional deles. Seu companheiro vai ser muito bem recebido e amado.',
    tags: ['Passeio', 'Adestramento'],
    rating: 1,
  },
  {
    id: 2,
    name: 'Lucas',
    address: 'Fortaleza - CE',
    price: 'R$ 3,00',
    description: 'Desde sempre gostei muito de animais, meu tio me escolhia quando viajava e deixava seu cachorro comigo. Sempre gostei de dar essa atenção especial a eles, é o que eu me sinto bem em fazer. O que eles precisam é de atenção e carinho e em troca recebemos o amor incondicional deles. Seu companheiro vai ser muito bem recebido e amado.',
    tags: ['Passeio', 'Adestramento'],
    rating: 2,
  },
  {
    id: 3,
    name: 'Viviane',
    address: 'Fortaleza - CE',
    price: 'R$ 3,00',
    description: 'Desde sempre gostei muito de animais, meu tio me escolhia quando viajava e deixava seu cachorro comigo. Sempre gostei de dar essa atenção especial a eles, é o que eu me sinto bem em fazer. O que eles precisam é de atenção e carinho e em troca recebemos o amor incondicional deles. Seu companheiro vai ser muito bem recebido e amado.',
    tags: ['Passeio', 'Adestramento'],
    rating: 4,
  },
  {
    id: 4,
    name: 'Guilherme',
    address: 'Fortaleza - CE',
    price: 'R$ 3,00',
    description: 'Desde sempre gostei muito de animais, meu tio me escolhia quando viajava e deixava seu cachorro comigo. Sempre gostei de dar essa atenção especial a eles, é o que eu me sinto bem em fazer. O que eles precisam é de atenção e carinho e em troca recebemos o amor incondicional deles. Seu companheiro vai ser muito bem recebido e amado.',
    tags: ['Passeio', 'Adestramento'],
    rating: 5,
  }
];