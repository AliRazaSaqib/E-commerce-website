/** @format */

// /** @format */

// const Products = [
//   {
//     id: "1",
//     clothing: [
//       {
//         mixProducts: [
//           {
//             id: 15,
//             title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//             price: 56.99,
//             description:
//               "Note:The Jackets is US standard size, Please choos…t season and help you adapt to different climates",
//             category: "women's clothing",
//             url: "/1",
//           },
//           {
//             id: 16,
//             title:
//               "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//             price: 29.95,
//             description:
//               "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75…ASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//             category: "women's clothing",
//             url: "/2",
//           },
//           {
//             id: 17,
//             title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//             price: 39.99,
//             description:
//               "Lightweight perfet for trip or casual wear---Long …djustable Drawstrings give it a real styled look.",
//             category: "women's clothing",
//             url: "/3",
//           },
//           {
//             id: 18,
//             title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
//             price: 9.85,
//             description:
//               "95% RAYON 5% SPANDEX, Made in USA or Imported, Do …ves and neckline / Double stitching on bottom hem",
//             category: "women's clothing",
//             url: "/4",
//           },
//           {
//             id: 19,
//             title: "Opna Women's Short Sleeve Moisture",
//             price: 7.95,
//             description:
//               "100% Polyester, Machine wash, 100% cationic polyes…sleek, more feminine silhouette and Added Comfort",
//             category: "women's clothing",
//             url: "/5",
//           },
//           {
//             id: 20,
//             title: "DANVOUY Womens T Shirt Casual Cotton Short",
//             price: 12.99,
//             description:
//               "95%Cotton,5%Spandex, Features: Casual, Short Sleev…Home/Street. Season: Spring,Summer,Autumn,Winter.",
//             category: "women's clothing",
//             url: "/6",
//           },
//         ],
//       },
//     ],
//   },
// ];

// fetch("https://run.mocky.io/v3/23113518-9cd3-41ab-b216-8866629b56ad")
//   .then((res) => res.json())
//   .then((d) => console.log("data", d));

// console.log("pro", Products);

// export default Products;

/** @format */

import { v4 as uuidv4 } from "uuid";

const Products = [
  {
    id: "1",
    clothing: [
      {
        mixProducts: [
          {
            id: uuidv4(),
            title: "Ethnic Wear",
          },
          {
            id: uuidv4(),
            title: "Bags and Purses",
          },
          {
            id: uuidv4(),
            title: "Nightsuits",
          },
          {
            id: uuidv4(),
            title: "Kurtas and Kurtis",
          },
          {
            id: uuidv4(),
            title: "Anarkali Suits",
          },
          {
            id: uuidv4(),
            title: "Sports Wear",
          },
          {
            id: uuidv4(),
            title: "Nightdresses",
          },
          {
            id: uuidv4(),
            title: "Dress Material",
          },
          {
            id: uuidv4(),
            title: "Trousers and Capris",
          },
          {
            id: uuidv4(),
            title: "Jwellery",
          },
          {
            id: uuidv4(),
            title: "Shorts and Skirts",
          },
        ],
      },
    ],
  },
];

fetch("https://run.mocky.io/v3/23113518-9cd3-41ab-b216-8866629b56ad")
  .then((res) => res.json())
  .then((d) => console.log("data", d));

console.log("pro", Products);

export default Products;
