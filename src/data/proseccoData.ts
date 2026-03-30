import bottlePlaceholder from '@/assets/bottle-placeholder.png';

export interface Prosecco {
  id: string;
  name: string;
  producer: string;
  region: string;
  appellation: 'DOCG' | 'DOC';
  style: string;
  rating: number;
  reviewCount: number;
  price: string;
  priceRange: string;
  vintage: number;
  isNew?: boolean;
  isBio?: boolean;
  isRose?: boolean;
  image: string;
  grapes: string[];
  alcohol: string;
  servingTemp: string;
  flavorTags: string[];
}

export interface Producer {
  id: string;
  name: string;
  slug: string;
  region: string;
  proseccoCount: number;
  avgRating: number;
  initials: string;
}

export interface Region {
  id: string;
  name: string;
  slug: string;
  appellation: 'DOCG' | 'DOC';
  proseccoCount: number;
  image: string;
}

export interface Review {
  id: string;
  username: string;
  avatar: string;
  badge: string;
  rating: number;
  proseccoName: string;
  proseccoId: string;
  text: string;
  helpfulCount: number;
  date: string;
}

export const proseccos: Prosecco[] = [
  {
    id: 'bisol-crede',
    name: 'Crede Valdobbiadene Superiore',
    producer: 'Bisol 1542',
    region: 'Valdobbiadene',
    appellation: 'DOCG',
    style: 'Brut',
    rating: 4.5,
    reviewCount: 2847,
    price: '€18',
    priceRange: '€€',
    vintage: 2023,
    isNew: true,
    image: bottlePlaceholder,
    grapes: ['Glera'],
    alcohol: '11.5%',
    servingTemp: '6-8°C',
    flavorTags: ['Broskyňa', 'Zelené Jablko', 'Kvetinový'],
  },
  {
    id: 'nino-franco-rustico',
    name: 'Rustico Superiore',
    producer: 'Nino Franco',
    region: 'Valdobbiadene',
    appellation: 'DOCG',
    style: 'Brut',
    rating: 4.3,
    reviewCount: 1923,
    price: '€15',
    priceRange: '€€',
    vintage: 2023,
    image: bottlePlaceholder,
    grapes: ['Glera', 'Chardonnay', 'Verdiso'],
    alcohol: '11%',
    servingTemp: '6-8°C',
    flavorTags: ['Citrus', 'Med', 'Toast'],
  },
  {
    id: 'col-vetoraz-extra-dry',
    name: 'Extra Dry Millesimato',
    producer: 'Col Vetoraz',
    region: 'Valdobbiadene',
    appellation: 'DOCG',
    style: 'Extra Dry',
    rating: 4.4,
    reviewCount: 1456,
    price: '€16',
    priceRange: '€€',
    vintage: 2022,
    image: bottlePlaceholder,
    grapes: ['Glera'],
    alcohol: '11.5%',
    servingTemp: '6-8°C',
    flavorTags: ['Zelené Jablko', 'Grapefruit', 'Mandľa'],
  },
  {
    id: 'cartizze-adami',
    name: 'Cartizze Dry',
    producer: 'Adami',
    region: 'Cartizze',
    appellation: 'DOCG',
    style: 'Dry',
    rating: 4.7,
    reviewCount: 892,
    price: '€32',
    priceRange: '€€€',
    vintage: 2022,
    image: bottlePlaceholder,
    grapes: ['Glera'],
    alcohol: '11%',
    servingTemp: '6-8°C',
    flavorTags: ['Med', 'Broskyňa', 'Mandľa', 'Kvetinový'],
  },
  {
    id: 'bortolomiol-prior',
    name: 'Prior Brut',
    producer: 'Bortolomiol',
    region: 'Valdobbiadene',
    appellation: 'DOCG',
    style: 'Brut',
    rating: 4.2,
    reviewCount: 2104,
    price: '€14',
    priceRange: '€€',
    vintage: 2023,
    isNew: true,
    image: bottlePlaceholder,
    grapes: ['Glera'],
    alcohol: '11.5%',
    servingTemp: '6-8°C',
    flavorTags: ['Citrus', 'Zelené Jablko', 'Toast'],
  },
  {
    id: 'le-colture-rose',
    name: 'Rosé Brut Millesimato',
    producer: 'Le Colture',
    region: 'DOC Rosé',
    appellation: 'DOC',
    style: 'Rosé',
    rating: 4.1,
    reviewCount: 768,
    price: '€17',
    priceRange: '€€',
    vintage: 2022,
    isRose: true,
    image: bottlePlaceholder,
    grapes: ['Glera', 'Pinot Nero'],
    alcohol: '11.5%',
    servingTemp: '6-8°C',
    flavorTags: ['Jahoda', 'Malina', 'Ružový Grapefruit'],
  },
  {
    id: 'ruggeri-giustino',
    name: 'Giustino B. Extra Dry',
    producer: 'Ruggeri',
    region: 'Valdobbiadene',
    appellation: 'DOCG',
    style: 'Extra Dry',
    rating: 4.6,
    reviewCount: 1567,
    price: '€22',
    priceRange: '€€',
    vintage: 2021,
    image: bottlePlaceholder,
    grapes: ['Glera'],
    alcohol: '11%',
    servingTemp: '6-8°C',
    flavorTags: ['Broskyňa', 'Med', 'Kvetinový', 'Mandľa'],
  },
  {
    id: 'masottina-brut',
    name: 'Contrada Granda Brut',
    producer: 'Masottina',
    region: 'Conegliano',
    appellation: 'DOCG',
    style: 'Brut',
    rating: 4.0,
    reviewCount: 934,
    price: '€12',
    priceRange: '€',
    vintage: 2023,
    image: bottlePlaceholder,
    grapes: ['Glera'],
    alcohol: '11.5%',
    servingTemp: '6-8°C',
    flavorTags: ['Citrus', 'Zelené Jablko'],
  },
];

export const producers: Producer[] = [
  { id: '1', name: 'Bisol 1542', slug: 'bisol-1542', region: 'Valdobbiadene', proseccoCount: 12, avgRating: 4.4, initials: 'B' },
  { id: '2', name: 'Nino Franco', slug: 'nino-franco', region: 'Valdobbiadene', proseccoCount: 8, avgRating: 4.3, initials: 'NF' },
  { id: '3', name: 'Col Vetoraz', slug: 'col-vetoraz', region: 'Valdobbiadene', proseccoCount: 6, avgRating: 4.5, initials: 'CV' },
  { id: '4', name: 'Adami', slug: 'adami', region: 'Cartizze', proseccoCount: 9, avgRating: 4.6, initials: 'A' },
  { id: '5', name: 'Bortolomiol', slug: 'bortolomiol', region: 'Valdobbiadene', proseccoCount: 14, avgRating: 4.2, initials: 'Bo' },
  { id: '6', name: 'Ruggeri', slug: 'ruggeri', region: 'Valdobbiadene', proseccoCount: 7, avgRating: 4.5, initials: 'R' },
];

export const reviews: Review[] = [
  {
    id: '1',
    username: 'MarcoVino',
    avatar: '',
    badge: 'Prosecco Expert',
    rating: 5,
    proseccoName: 'Crede Valdobbiadene Superiore',
    proseccoId: 'bisol-crede',
    text: 'Výnimočné perlage a nádherná chuťová komplexnosť. Toto je Prosecco, ktoré by som odporúčal každému, kto chce pochopiť, prečo je Valdobbiadene DOCG svetová trieda. Vôňa broskyní s jemným kvetinovým záverom.',
    helpfulCount: 24,
    date: '15. marca 2025',
  },
  {
    id: '2',
    username: 'SilviaBubbles',
    avatar: '',
    badge: 'Connoisseur',
    rating: 4,
    proseccoName: 'Rustico Superiore',
    proseccoId: 'nino-franco-rustico',
    text: 'Spoľahlivá klasika. Nino Franco nikdy nesklame — sviežosť citrónov s delikátnou medovou notou v závere. Ideálne k ľahkým predjedlám alebo jednoducho na terasu pri západe slnka.',
    helpfulCount: 18,
    date: '12. marca 2025',
  },
  {
    id: '3',
    username: 'ProseccoLover_SK',
    avatar: '',
    badge: 'Enthusiast',
    rating: 5,
    proseccoName: 'Cartizze Dry',
    proseccoId: 'cartizze-adami',
    text: 'Toto je vrchol toho, čo Prosecco môže ponúknuť. Cartizze od Adami je luxus v pohári — jemná perlivosť, bohatá ovocitosť a elegantný záver s mandľovými tónmi. Cena je vysoká, ale za takúto kvalitu ospravedlniteľná.',
    helpfulCount: 31,
    date: '8. marca 2025',
  },
];

export const styles = ['Brut Nature', 'Extra Brut', 'Brut', 'Extra Dry', 'Dry', 'Demi-Sec'];
export const filterStyles = ['Všetky', 'Brut Nature', 'Brut', 'Extra Dry', 'Dry', 'Rosé', 'Millésimé'];
