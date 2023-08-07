import ddbClient from "./ddbClient";
import { Table } from "sst/node/table";

export async function getOrderById(orderId: string) {
  console.log("this is the orderId", orderId);

  const params = {
    TableName: Table.Orders.tableName,
    Key: {
      orderId: orderId,
    },
  };
  const results = await ddbClient.get(params).promise();

  console.log("results", JSON.stringify(results));

  return {
    statusCode: 200,
    body: results.Item,
  };
}
