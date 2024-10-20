import avocadoImg from '../../assets/products/avocado.png';
import kiwiImg from '../../assets/products/kiwi.png';
import mangoImg from '../../assets/products/mango.png';
import strawberryImg from '../../assets/products/strawberry.png';
import bananasImg from '../../assets/products/bananas.png';
import lemonImg from '../../assets/products/lemon.png';
import orangeImg from '../../assets/products/orange.png';
import watermelonImg from '../../assets/products/watermelon.png';
import { Product } from '../../domain/Product';

const productsApi: Product[] = [
    {
        id: 1,
        name: 'avocado',
        img: avocadoImg,
        price: 2.99,
        isFavorite: false,
        rating: 4,
        description: 'Avocado is a green, pear-shaped fruit often called an "alligator pear." It is loaded with healthy fats, fiber and various important nutrients.',
    },
    {
        id: 2,
        name: 'kiwi',
        img: kiwiImg,
        price: 1.99,
        isFavorite: false,
        rating: 4,
        description: 'Kiwis are small fruits that pack a lot of flavor and plenty of health benefits. Their green flesh is sweet and tangy.',
    },
    {
        id: 3,
        name: 'mango',
        img: mangoImg,
        price: 3.99,
        isFavorite: false,
        rating: 4,
        description: 'Mango is a tropical stone fruit, plump and oval in shape and about the size of a grapefruit. Its flesh is sweet and tangy.',
    },
    {
        id: 4,
        name: 'strawberry',
        img: strawberryImg,
        price: 2.99,
        isFavorite: false,
        rating: 4,
        description: 'The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit.',
    },
    {
        id: 5,
        name: 'bananas',
        img: bananasImg,
        price: 1.99,
        isFavorite: false,
        rating: 4,
        description: 'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.',
    },
    {
        id: 6,
        name: 'lemon',
        img: lemonImg,
        price: 0.99,
        isFavorite: false,
        rating: 4,
        description: 'The lemon is a species of small evergreen tree native to South Asia, primarily North eastern India.',
    },
    {
        id: 7,
        name: 'orange',
        img: orangeImg,
        price: 1.99,
        isFavorite: false,
        rating: 4,
        description: 'The orange is the fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus sinensis, which is also called sweet orange.',
    },
    {
        id: 8,
        name: 'watermelon',
        img: watermelonImg,
        price: 4.99,
        isFavorite: false,
        rating: 4,
        description: 'Watermelon is a scrambling and trailing vine in the flowering plant family Cucurbitaceae. The species was long thought to have originated in southern Africa.',
    }
]

export default productsApi;