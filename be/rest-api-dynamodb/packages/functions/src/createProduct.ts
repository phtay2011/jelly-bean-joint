import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { AddProductParams, addProduct } from "../db/addProduct";

// Sample JSON Body
// {
//     "description": "5000",
//     "price": 16,
//     "name": "Ice Lychee",
//     "productId": "m4",
//     "isAvailable": true
// }

export const main: APIGatewayProxyHandlerV2 = async (event) => {
  // 1. Validate JSON Body
  let data: AddProductParams;
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
    const productId = await addProduct(data);
    return {
      statusCode: 200,
      body: `Successfully submitted Order ${productId}`,
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
