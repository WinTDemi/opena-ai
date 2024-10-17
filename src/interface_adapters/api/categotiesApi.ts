import { Categotie } from "../../domain/Categotie";

import veggiesImg from '../../assets/categoties/veggies.png';
import fruitImg from '../../assets/categoties/fruit.png';
import meatImg from '../../assets/categoties/meat.png';
import dairyImg from '../../assets/categoties/dairy.png';


const categories: Categotie[] = [
    {
        id: 1,
        name: "Veggies",
        img: veggiesImg,
    },
    {
        id: 2,
        name: "Fruits",
        img: fruitImg,
    },
    {
        id: 3,
        name: "Meat",
        img: meatImg,
    },
    {
        id: 4,
        name: "Dairy",
        img: dairyImg,
    }
];

export default categories;
