const products = [
  {
    id: 1,
    name: "Apple iMac 27, 1TB HDD, Retina 5K",
    price: 169999,
    originalPrice: 1999,
    discount: "35% OFF",
    rating: 5.0,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Desktops/Images/311754_0_p4etiv.png",
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Apple iPhone 17 Pro Max, 1TB",
    price: 129999,
    rating: 4.9,
    discount: "15% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/317417_0_7ISiBcc4Y.png?updatedAt=1757529273198",
    isBestSeller: true,
  },
  {
    id: 3,
    name: "iPad Pro 13-Inch (M4): XDR Display, 512GB",
    price: 89999,
    rating: 4.9,
    discount: "35% OFF",
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264226_fefcjf.png",
  },
  {
    id: 4,
    name: "PlayStation 5 Console - 1TB, PRO Controller",
    price: 68999,
    rating: 4.8,
    discount: "10% OFF",
    image:
      "https://media.tatacroma.com/Croma%20Assets/Gaming/Gaming%20Consoles/Images/305985_ilpfe3.png",
  },
  {
    id: 5,
    name: "Samsung Galaxy S24 Ultra, 512GB",
    price: 119999,
    rating: 4.8,
    discount: "18% OFF",
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/303820_hxjq29.png",
    isBestSeller: true,
  },
  {
    id: 6,
    name: "MacBook Air M3, 13-inch, 256GB SSD",
    price: 114900,
    rating: 4.9,
    discount: "12% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305382_uvrdrb.png?tr=w-640",
  },
  {
    id: 7,
    name: "Sony WH-1000XM5 Noise Cancelling Headphones",
    price: 29990,
    rating: 4.7,
    discount: "20% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/262565_0_cMTz4dVUv.png?updatedAt=1758554204931?tr=w-400",
    isBestSeller: true,
  },
  {
    id: 8,
    name: "Dell XPS 15, Intel i7, 16GB RAM, 1TB SSD",
    price: 164999,
    rating: 4.6,
    discount: "22% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306604_0_bcvgzw.png?tr=w-400",
  },
  {
    id: 9,
    name: "Apple Watch Series 9 GPS, 45mm",
    price: 41999,
    rating: 4.8,
    discount: "15% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/317745_0_9CJQDL61E.png?updatedAt=1757599365909?tr=w-400",
  },
  {
    id: 10,
    name: "Bose SoundLink Revolve+ II Bluetooth Speaker",
    price: 24999,
    rating: 4.7,
    discount: "25% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/234895_0_snktsa.png?tr=w-400",
  },
  {
    id: 11,
    name: "LG 55-inch OLED evo 4K Smart TV",
    price: 139999,
    rating: 4.9,
    discount: "30% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Television/Images/316299_0_udgulm.png?tr=w-400",
    isBestSeller: true,
  },
  {
    id: 12,
    name: "Canon EOS R6 Mark II Mirrorless Camera",
    price: 218999,
    rating: 4.8,
    discount: "10% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/259484_ut2ku2.png?tr=w-400",
  },
  {
    id: 13,
    name: "HP Omen 16 Gaming Laptop, RTX 4060",
    price: 129990,
    rating: 4.6,
    discount: "18% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/315367_0_L8SqpdqXa.png?updatedAt=1758638361381?tr=w-400",
  },
  {
    id: 14,
    name: "Logitech MX Master 3S Wireless Mouse",
    price: 9995,
    rating: 4.9,
    discount: "28% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/258454_0_1bdnWCNcL.png?updatedAt=1758555097829?tr=w-400",
  },
  {
    id: 15,
    name: "Samsung 980 Pro 2TB NVMe SSD",
    price: 18999,
    rating: 4.8,
    discount: "35% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Storage%20Devices/Images/271277_0_zolpo1.png?tr=w-400",
  },
  {
    id: 16,
    name: "Asus ROG Strix G16 Gaming Laptop",
    price: 149999,
    rating: 4.7,
    discount: "17% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/316162_0_3T9HPjUfKA.png?updatedAt=1763117702877?tr=w-400",
  },
  {
    id: 17,
    name: "GoPro HERO12 Black Action Camera",
    price: 45999,
    rating: 4.6,
    discount: "14% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/300424_0__0PMDfQWpC.png?updatedAt=1758554112861?tr=w-400",
    isBestSeller: true,
  },
  {
    id: 18,
    name: "Nothing Phone (2), 256GB",
    price: 44999,
    rating: 4.5,
    discount: "12% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/314525_0_hxqlxn.png?tr=w-400",
  },
  {
    id: 19,
    name: "Amazon Kindle Paperwhite (11th Gen)",
    price: 13999,
    rating: 4.7,
    discount: "20% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/262838_pllhhx.png?tr=w-400",
  },
  {
    id: 20,
    name: "Microsoft Surface Pro 9, 13-inch, 256GB",
    price: 124999,
    rating: 4.6,
    discount: "16% OFF",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/308518_0_VgjK9AQdw.png?updatedAt=1762329370455?tr=w-400",
  },
];

export default products;
