import axios from "axios";

// const data = {
//   description: "5000",
//   price: 18,
//   name: "Mango Milkshake",
//   productId: "m1",
//   isAvailable: true,
// };

function updateData(data) {
  const config = {
    method: "post",
    url: "https://xn6pxrnc58.execute-api.ap-southeast-1.amazonaws.com/createProduct",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

const datas = [
  {
    name: "Mango Milkshake",
    description: "5000",
    price: 18,
    productId: "m1",
    isAvailable: true,
  },
  {
    name: "Lush Ice",
    description: "5000",
    price: 18,
    productId: "m2",
    isAvailable: true,
  },
  {
    name: "Grape",
    description: "5000",
    price: 18,
    productId: "m3",
    isAvailable: true,
  },
  {
    name: "Skittles",
    description: "5000",
    price: 18,
    productId: "m4",
    isAvailable: true,
  },
  {
    name: "Guava",
    description: "5000",
    price: 18,
    productId: "m5",
    isAvailable: true,
  },
  {
    name: "Taro",
    description: "5000",
    price: 18,
    productId: "m6",
    isAvailable: true,
  },
  {
    name: "Oolong",
    description: "5000",
    price: 18,
    productId: "m7",
    isAvailable: true,
  },
  {
    name: "Peppermint",
    description: "5000",
    price: 18,
    productId: "m8",
    isAvailable: true,
  },
  {
    name: "Apple",
    description: "5000",
    price: 18,
    productId: "m9",
    isAvailable: true,
  },
  {
    name: "Passion Fruit",
    description: "5000",
    price: 18,
    productId: "m10",
    isAvailable: true,
  },
  {
    name: "Peach",
    description: "5000",
    price: 18,
    productId: "m11",
    isAvailable: true,
  },
  {
    name: "Root Beer",
    description: "5000",
    price: 18,
    productId: "m12",
    isAvailable: true,
  },
  {
    name: "Coke",
    description: "5000",
    price: 18,
    productId: "m13",
    isAvailable: false,
  },
  {
    name: "Lychee",
    description: "5000",
    price: 18,
    productId: "m14",
    isAvailable: true,
  },
  {
    name: "TGY",
    description: "5000",
    price: 18,
    productId: "m15",
    isAvailable: true,
  },
  {
    name: "Strawberry Milk",
    description: "5000",
    price: 18,
    productId: "m16",
    isAvailable: true,
  },
  {
    name: "Cranberry",
    description: "5000",
    price: 18,
    productId: "m17",
    isAvailable: false,
  },
  {
    name: "Peach Grape Banana",
    description: "5000",
    price: 18,
    productId: "m18",
    isAvailable: true,
  },
  {
    name: "Strawberry Watermelon",
    description: "5000",
    price: 18,
    productId: "m19",
    isAvailable: false,
  },
  {
    name: "Surfing Lemon",
    description: "5000",
    price: 18,
    productId: "m20",
    isAvailable: true,
  },
  {
    name: "Peach Oolong",
    description: "5000",
    price: 18,
    productId: "m21",
    isAvailable: true,
  },
  {
    name: "Banana Ice",
    description: "5000",
    price: 18,
    productId: "m22",
    isAvailable: false,
  },
  {
    name: "Chocolate Mint",
    description: "5000",
    price: 18,
    productId: "m23",
    isAvailable: false,
  },
  {
    name: "Vanilla Ice Cream",
    description: "5000",
    price: 18,
    productId: "m24",
    isAvailable: true,
  },
  {
    name: "Cappuccino",
    description: "5000",
    price: 18,
    productId: "m25",
    isAvailable: false,
  },
  {
    name: "Chcolate Strawberry",
    description: "5000",
    price: 18,
    productId: "m26",
    isAvailable: true,
  },
  {
    name: "Blueberry Ice cream",
    description: "5000",
    price: 18,
    productId: "m27",
    isAvailable: true,
  },
  {
    name: "Banana Milkshake",
    description: "5000",
    price: 18,
    productId: "m28",
    isAvailable: false,
  },
  {
    name: "Mange Ice Cream",
    description: "5000",
    price: 18,
    productId: "m29",
    isAvailable: true,
  },
  {
    name: "Strawberry Ice Cream",
    description: "5000",
    price: 18,
    productId: "m30",
    isAvailable: true,
  },
  {
    name: "Tea King",
    description: "5000",
    price: 18,
    productId: "m31",
    isAvailable: true,
  },
  {
    name: "Pu Er Tea",
    description: "5000",
    price: 18,
    productId: "m32",
    isAvailable: true,
  },
  {
    name: "Lychee Longan",
    description: "5000",
    price: 18,
    productId: "m33",
    isAvailable: true,
  },
  {
    name: "Super Mint",
    description: "5000",
    price: 18,
    productId: "m34",
    isAvailable: true,
  },
  {
    name: "Sweet Peach Tea",
    description: "5000",
    price: 18,
    productId: "m35",
    isAvailable: true,
  },
  {
    name: "Menthol Exta",
    description: "5000",
    price: 18,
    productId: "m36",
    isAvailable: true,
  },
];

for (const i in datas) {
  updateData(datas[i]);
}
// updateData(data);
