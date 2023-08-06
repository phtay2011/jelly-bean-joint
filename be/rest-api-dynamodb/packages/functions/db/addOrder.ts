import ddbClient from "../db/ddbClient";
import { Table } from "sst/node/table";
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";
moment.tz.setDefault("Asia/Singapore");

export type AddOrderParams = {
  user: string;
  address: string;
  orderedItems: any;
};

export async function addOrder(addOrderParams: any) {
  const { orderId } = addOrderParams;

  const params = {
    TableName: Table.Orders.tableName,
    Item: {
      ...addOrderParams,
      orderId: uuidv4(),
      createdAt: moment().format(),
    },
  };

  await ddbClient.put(params).promise();

  console.log(`Added claim ${orderId}`, addOrderParams);

  return orderId;
}
