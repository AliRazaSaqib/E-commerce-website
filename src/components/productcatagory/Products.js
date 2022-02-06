/** @format */

import { v4 as uuidv4 } from "uuid";

const Products = [
  {
    id: uuidv4(),
    womenCatagory: [
      {
        women: "THE WOMEN'S",
        womenProducts: [
          {
            id: uuidv4(),
            name: "Ethnic Wear",
          },
          {
            id: uuidv4(),
            name: "Bags and Purses",
          },
          {
            id: uuidv4(),
            name: "Nightsuits",
          },
          {
            id: uuidv4(),
            name: "Kurtas and Kurtis",
          },
          {
            id: uuidv4(),
            name: "Anarkali Suits",
          },
          {
            id: uuidv4(),
            name: "Sports Wear",
          },
          {
            id: uuidv4(),
            name: "Nightdresses",
          },
          {
            id: uuidv4(),
            name: "Dress Material",
          },
          {
            id: uuidv4(),
            name: "Trousers and Capris",
          },
          {
            id: uuidv4(),
            name: "Jwellery",
          },
          {
            id: uuidv4(),
            name: "Shorts and Skirts",
          },
        ],
      },
    ],
    menCatagory: [
      {
        men: "THE MEN'S",
        menProducts: [
          {
            id: uuidv4(),
            name: "Sweatshirts",
          },
          {
            id: uuidv4(),
            name: "Suits & Blazers",
          },
          {
            id: uuidv4(),
            name: "Bottom wear",
          },
          {
            id: uuidv4(),
            name: "Footwear",
          },
          {
            id: uuidv4(),
            name: "Sneakers",
          },
          {
            id: uuidv4(),
            name: "Jackets",
          },
          {
            id: uuidv4(),
            name: "Sunglasses",
          },
          {
            id: uuidv4(),
            name: "T-Shirts",
          },
          {
            id: uuidv4(),
            name: "Trousers",
          },
          {
            id: uuidv4(),
            name: "Wallets & Belts",
          },
          {
            id: uuidv4(),
            name: "Hoodies",
          },
        ],
      },
    ],
  },
];

// fetch("https://run.mocky.io/v3/23113518-9cd3-41ab-b216-8866629b56ad")
//   .then((res) => res.json())
//   .then((d) => console.log("data", d));

// console.log("pro", Products);

export default Products;
