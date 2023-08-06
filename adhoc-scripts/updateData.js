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
    description: "L5000",
    price: 18,
    productId: "m1",
    isAvailable: true,
  },
  {
    name: "Lush Ice",
    description: "L5000",
    price: 18,
    productId: "m2",
    isAvailable: true,
  },
  {
    name: "Grape",
    description: "L5000",
    price: 18,
    productId: "m3",
    isAvailable: true,
  },
  {
    name: "Skittles",
    description: "L5000",
    price: 18,
    productId: "m4",
    isAvailable: true,
  },
  {
    name: "Guava",
    description: "L5000",
    price: 18,
    productId: "m5",
    isAvailable: true,
  },
  {
    name: "Taro",
    description: "L5000",
    price: 18,
    productId: "m6",
    isAvailable: true,
  },
  {
    name: "Oolong",
    description: "L5000",
    price: 18,
    productId: "m7",
    isAvailable: true,
  },
  {
    name: "Peppermint",
    description: "L5000",
    price: 18,
    productId: "m8",
    isAvailable: true,
  },
  {
    name: "Apple",
    description: "L5000",
    price: 18,
    productId: "m9",
    isAvailable: true,
  },
  {
    name: "Passion Fruit",
    description: "L5000",
    price: 18,
    productId: "m10",
    isAvailable: true,
  },
  {
    name: "Peach",
    description: "L5000",
    price: 18,
    productId: "m11",
    isAvailable: true,
  },
  {
    name: "Root Beer",
    description: "L5000",
    price: 18,
    productId: "m12",
    isAvailable: true,
  },
  {
    name: "Coke",
    description: "L5000",
    price: 18,
    productId: "m13",
    isAvailable: true,
  },
  {
    name: "Lychee",
    description: "L5000",
    price: 18,
    productId: "m14",
    isAvailable: true,
  },
  {
    name: "TGY",
    description: "L5000",
    price: 18,
    productId: "m15",
    isAvailable: true,
  },
  {
    name: "Strawberry Milk",
    description: "L5000",
    price: 18,
    productId: "m16",
    isAvailable: true,
  },
  {
    name: "Cranberry",
    description: "L5000",
    price: 18,
    productId: "m17",
    isAvailable: true,
  },
  {
    name: "Peach Grape Banana",
    description: "L5000",
    price: 18,
    productId: "m18",
    isAvailable: true,
  },
  {
    name: "Strawberry Watermelon",
    description: "L5000",
    price: 18,
    productId: "m19",
    isAvailable: true,
  },
  {
    name: "Surfing Lemon",
    description: "L5000",
    price: 18,
    productId: "m20",
    isAvailable: true,
  },
  {
    name: "Peach Oolong",
    description: "L5000",
    price: 18,
    productId: "m21",
    isAvailable: true,
  },
  {
    name: "Banana Ice",
    description: "L5000",
    price: 18,
    productId: "m22",
    isAvailable: true,
  },
  {
    name: "Chocolate Mint",
    description: "L5000",
    price: 18,
    productId: "m23",
    isAvailable: true,
  },
  {
    name: "Vanilla Ice Cream",
    description: "L5000",
    price: 18,
    productId: "m24",
    isAvailable: true,
  },
  {
    name: "Cappuccino",
    description: "L5000",
    price: 18,
    productId: "m25",
    isAvailable: true,
  },
  {
    name: "Chcolate Strawberry",
    description: "L5000",
    price: 18,
    productId: "m26",
    isAvailable: true,
  },
  {
    name: "Blueberry Ice cream",
    description: "L5000",
    price: 18,
    productId: "m27",
    isAvailable: true,
  },
  {
    name: "Banana Milkshake",
    description: "L5000",
    price: 18,
    productId: "m28",
    isAvailable: true,
  },
  {
    name: "Mange Ice Cream",
    description: "L5000",
    price: 18,
    productId: "m29",
    isAvailable: true,
  },
  {
    name: "Strawberry Ice Cream",
    description: "L5000",
    price: 18,
    productId: "m30",
    isAvailable: true,
  },
];

for (const i in datas) {
  updateData(datas[i]);
}
// updateData(data);
