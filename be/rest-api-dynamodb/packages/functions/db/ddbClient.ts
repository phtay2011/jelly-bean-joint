import AWS from "aws-sdk";

const ddbClient = new AWS.DynamoDB.DocumentClient();

export default ddbClient;
