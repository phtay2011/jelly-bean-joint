import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { mailService } from "../helpers/mailService";

export const main: APIGatewayProxyHandlerV2 = async () => {
  try {
    let to = ["tphtphtphtph@hotmail.com"]; // Email address must be an array

    // Subject of your email
    let sub = "Confirm Registration";

    // In this email we are sending HTML
    let content = "<body><p>Please verify your email.</p></body>";
    // Use the Email function of our send email utility

    const res = await mailService(to, sub, content);
    return {
      statusCode: 200,
      body: `${res}`,
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
