import AWS from "aws-sdk";
import { Table } from "sst/node/table";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main() {
  // 1. Get all claims from dynamoDB
  const params = {
    TableName: Table.Products.tableName,
  };
  const results = await dynamoDb.scan(params).promise();

  console.log(results);

  return {
    statusCode: 200,
    body: JSON.stringify(results.Items),
  };
}
