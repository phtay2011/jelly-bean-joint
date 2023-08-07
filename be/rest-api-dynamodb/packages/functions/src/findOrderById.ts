import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { getOrderById } from "../db/getOrderbyId";

// Sample JSON Body
// {
//     "orderId": "cf2ef346-e918-47e9-bbf7-ac59805bacaf"
// }

export const main: APIGatewayProxyHandlerV2 = async (event: any) => {
  // 1. Validate JSON Body
  try {
    const data = event.pathParameters.orderId;
    console.log("JSON valid, going to add to dynamo:", data);
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Failed to add order, check JSON format.",
      }),
    };
  }

  // 2. call DB
  try {
    const data = event.pathParameters.orderId;
    const response = await getOrderById(data);
    console.log(response);
    return {
      statusCode: 200,
      body: JSON.stringify(response),
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
