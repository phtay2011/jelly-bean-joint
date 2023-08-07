import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { AddOrderParams, addOrder } from "../db/addOrder";

// Sample JSON Body
// {
//     "user": "a",
//     "address": "asd",
//     "orderedItems": [
//         {
//             "id": "m4",
//             "name": "Ice Lychee",
//             "amount": 1,
//             "price": 16
//         },
//         {
//             "id": "m1",
//             "name": "lemon",
//             "amount": 1,
//             "price": 16
//         }
//     ]
// }

export const main: APIGatewayProxyHandlerV2 = async (event) => {
  // 1. Validate JSON Body
  let data: AddOrderParams;
  try {
    data = JSON.parse(event.body!);
    console.log("JSON valid, going to add to dynamo:", data);
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Failed to add order, check JSON format.",
      }),
    };
  }

  // 2. Add to DB
  try {
    const orderId = await addOrder(data);
    return {
      statusCode: 200,
      body: JSON.stringify({
        text: `Successfully submitted Order ${orderId}`,
        orderId: orderId,
      }),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to insert into dynamo.",
      }),
    };
  }
};
