export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Teamgeist",
    price: 10.99,
    image: "/imgs/Teamgeist.jpg",
    description: "Official 2006 World Cup match ball.",
    category: "Ball",
  },
  {
    id: 2,
    name: "Jabulani",
    price: 5000,
    image: "/imgs/Jabulani.jpg",
    description: "Official 2010 World Cup match ball.",
    category: "Ball",
  },
  {
    id: 3,
    name: "Brazuca",
    price: 1100.99,
    image: "/imgs/BrazucaImg.jpg",
    description: "Official 2014 World Cup match ball.",
    category: "Ball",
  },
  {
    id: 4,
    name: "Rihla",
    price: 10.99,
    image: "/imgs/RihlaImg.jpg",
    description: "Official 2022 World Cup match ball.",
    category: "Ball",
  },
  {
    id: 5,
    name: "Trionda",
    price: 49.99,
    image: "/imgs/Trionda.png",
    description: "Official 2026 World Cup match ball.",
    category: "Ball",
  },

  // Shoes
  //   {
  //   id: 5,
  //   name: "Trionda",
  //   price: 49.99,
  //   image: "/imgs/Trionda.png",
  //   description: "Official 2026 World Cup match ball.",
  // },
];
