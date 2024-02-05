import Product from '../products/Product';

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 900,
    description: 'Powerful laptop for all your computing needs.',
    postalCode: '12345',
    category: 'Laptop',
    image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true'
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 600,
    description: 'Latest smartphone with advanced features.',
    postalCode: '54320',
    category: 'Smartphone',
    image: 'https://m.media-amazon.com/images/I/81la+dAkb7L.jpg'
  },
  {
    id: 3,
    name: 'Headphones',
    price: 125,
    description: 'High-quality headphones for immersive audio experience.',
    postalCode: '98765',
    category: 'Headphones',
    image: 'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/global/serp/studiopro-pdp-global-serp-black.jpg'
  },
];

export default products;