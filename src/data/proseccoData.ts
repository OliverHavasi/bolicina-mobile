import hamsikDocTreviso from '@/assets/products/hamsik-doc-treviso.png';
import hamsikDocTrevisoMagnum from '@/assets/products/hamsik-doc-treviso-magnum.png';
import hamsikDocgValdobbiadene from '@/assets/products/hamsik-docg-valdobbiadene.png';
import hamsikFrizzante from '@/assets/products/hamsik-frizzante.png';
import hamsikCartizze from '@/assets/products/hamsik-cartizze.png';
import hamsikDocSpumante from '@/assets/products/hamsik-doc-spumante.png';
import hamsikDocRose from '@/assets/products/hamsik-doc-rose.png';
import hamsikZero from '@/assets/products/hamsik-zero.png';

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
    id: 'hamsik-doc-treviso',
    name: 'Prosecco DOC Treviso Extra Dry',
    producer: 'HAMSIK Winery',
    region: 'Treviso',
    appellation: 'DOC',
    style: 'Extra Dry',
    rating: 0,
    reviewCount: 0,
    price: '€9.90',
    priceRange: '€',
    vintage: 2023,
    image: hamsikDocTreviso,
    grapes: ['Glera'],
    alcohol: '11%',
    servingTemp: '6-8°C',
    flavorTags: ['Zelené Jablko', 'Citrus', 'Kvetinový'],
  },
  {
    id: 'hamsik-doc-treviso-magnum',
    name: 'Prosecco DOC Treviso Magnum 1,5l',
    producer: 'HAMSIK Winery',
    region: 'Treviso',
    appellation: 'DOC',
    style: 'Extra Dry',
    rating: 0,
    reviewCount: 0,
    price: '€18.90',
    priceRange: '€€',
    vintage: 2023,
    image: hamsikDocTrevisoMagnum,
    grapes: ['Glera'],
    alcohol: '11%',
    servingTemp: '6-8°C',
    flavorTags: ['Broskyňa', 'Zelené Jablko'],
  },
  {
    id: 'hamsik-docg-valdobbiadene',
    name: 'Prosecco Valdobbiadene Superiore DOCG Brut Millesimato',
    producer: 'HAMSIK Winery',
    region: 'Valdobbiadene',
    appellation: 'DOCG',
    style: 'Brut',
    rating: 0,
    reviewCount: 0,
    price: '€14.00',
    priceRange: '€€',
    vintage: 2022,
    image: hamsikDocgValdobbiadene,
    grapes: ['Glera'],
    alcohol: '11.5%',
    servingTemp: '6-8°C',
    flavorTags: ['Broskyňa', 'Med', 'Toast'],
  },
  {
    id: 'hamsik-frizzante',
    name: 'Prosecco DOC Treviso Frizzante',
    producer: 'HAMSIK Winery',
    region: 'Treviso',
    appellation: 'DOC',
    style: 'Frizzante',
    rating: 0,
    reviewCount: 0,
    price: '€9.90',
    priceRange: '€',
    vintage: 2023,
    image: hamsikFrizzante,
    grapes: ['Glera'],
    alcohol: '10.5%',
    servingTemp: '6-8°C',
    flavorTags: ['Zelené Jablko', 'Citrus'],
  },
  {
    id: 'hamsik-cartizze',
    name: 'Prosecco Valdobbiadene Superiore di Cartizze DOCG Dry',
    producer: 'HAMSIK Winery',
    region: 'Valdobbiadene',
    appellation: 'DOCG',
    style: 'Dry',
    rating: 0,
    reviewCount: 0,
    price: '€23.90',
    priceRange: '€€€',
    vintage: 2022,
    image: hamsikCartizze,
    grapes: ['Glera'],
    alcohol: '11%',
    servingTemp: '6-8°C',
    flavorTags: ['Med', 'Broskyňa', 'Mandľa', 'Kvetinový'],
  },
  {
    id: 'hamsik-doc-spumante',
    name: 'Prosecco DOC Treviso Spumante',
    producer: 'HAMSIK Winery',
    region: 'Treviso',
    appellation: 'DOC',
    style: 'Spumante',
    rating: 0,
    reviewCount: 0,
    price: '€9.90',
    priceRange: '€',
    vintage: 2023,
    image: hamsikDocSpumante,
    grapes: ['Glera'],
    alcohol: '11%',
    servingTemp: '6-8°C',
    flavorTags: ['Citrus', 'Zelené Jablko', 'Kvetinový'],
  },
  {
    id: 'hamsik-doc-rose',
    name: 'Prosecco DOC Rosé Millesimato',
    producer: 'HAMSIK Winery',
    region: 'Treviso',
    appellation: 'DOC',
    style: 'Rosé',
    rating: 0,
    reviewCount: 0,
    price: '€12.90',
    priceRange: '€€',
    vintage: 2022,
    isRose: true,
    image: hamsikDocRose,
    grapes: ['Glera', 'Pinot Nero'],
    alcohol: '11%',
    servingTemp: '6-8°C',
    flavorTags: ['Jahoda', 'Malina', 'Ružový Grapefruit'],
  },
  {
    id: 'hamsik-zero',
    name: 'Prosecco ZERO Valdobbiadene Extra Brut',
    producer: 'HAMSIK Winery',
    region: 'Valdobbiadene',
    appellation: 'DOCG',
    style: 'Extra Brut',
    rating: 0,
    reviewCount: 0,
    price: '€19.00',
    priceRange: '€€',
    vintage: 2022,
    image: hamsikZero,
    grapes: ['Glera'],
    alcohol: '11.5%',
    servingTemp: '6-8°C',
    flavorTags: ['Citrus', 'Minerálny', 'Zelené Jablko'],
  },
];

export const producers: Producer[] = [
  { id: '1', name: 'HAMSIK Winery', slug: 'hamsik-winery', region: 'Treviso / Valdobbiadene', proseccoCount: 8, avgRating: 0, initials: 'HW' },
];

export const reviews: Review[] = [];

export const styles = ['Extra Brut', 'Brut', 'Extra Dry', 'Dry', 'Frizzante', 'Spumante', 'Rosé'];
export const filterStyles = ['Tutti', 'Extra Dry', 'Brut', 'Rosé', 'DOCG', 'Frizzante'];
