import { Api, ReactStaticSite, StackContext, Table } from "sst/constructs";

export function JellyBeanStack({ stack }: StackContext) {
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
      "POST /createProduct": "packages/functions/src/createProduct.main",
      // "POST /sendEmail": "packages/functions/src/sendEmail.main",
      // "POST /findOrderById": "packages/functions/src/findOrderById.main",
      "GET /findOrderById/{orderId}":
        "packages/functions/src/findOrderById.main",
    },
  });

  // Show the URLs in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
