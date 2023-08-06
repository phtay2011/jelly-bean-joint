import { Api, ReactStaticSite, StackContext, Table } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  // Create the table
  const productsTable = new Table(stack, "Products", {
    fields: {
      productId: "string",
    },
    primaryIndex: { partitionKey: "productId" },
  });

  const ordersTable = new Table(stack, "Orders", {
    fields: {
      orderId: "string",
    },
    primaryIndex: { partitionKey: "orderId" },
  });

  // Create the HTTP API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        // Bind the table name to our API
        bind: [productsTable, ordersTable],
      },
    },
    routes: {
      "GET /listProduct": "packages/functions/src/listProducts.main",
      "POST /sendOrder": "packages/functions/src/sendOrder.main",
    },
  });

  // Show the URLs in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
