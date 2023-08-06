import ddbClient from "../db/ddbClient";
import { Table } from "sst/node/table";
import moment from "moment-timezone";
moment.tz.setDefault("Asia/Singapore");

export type AddProductParams = {
  productId: string;
  name: string;
  description: string;
  price: number;
};

export async function main(addProductParam: AddProductParams) {
  const { productId } = addProductParam;

  const params = {
    TableName: Table.Products.tableName,
    Item: {
      ...addProductParam,
    },
  };
  await ddbClient.put(params).promise();
  console.log(`Added Product ${productId}`);

  return {
    statusCode: 200,
    body: JSON.stringify(params.Item),
  };
}
