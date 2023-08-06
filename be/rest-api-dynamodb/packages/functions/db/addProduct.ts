import ddbClient from "../db/ddbClient";
import { Table } from "sst/node/table";

export type AddProductParams = {
  productId: string;
  description: string;
  isAvailable: boolean;
  name: string;
  price: number;
};

export async function addProduct(addProductParams: AddProductParams) {
  const { productId } = addProductParams;

  const params = {
    TableName: Table.Products.tableName,
    Item: {
      ...addProductParams,
    },
  };

  await ddbClient.put(params).promise();

  console.log(`Added claim ${productId}`, addProductParams);

  return productId;
}
