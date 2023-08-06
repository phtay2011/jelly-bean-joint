import { Api, ReactStaticSite, StackContext, Table } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  // Create the table
  const productsTable = new Table(stack, "Products", {
    fields: {
      productId: "string",
    },
    primaryIndex: { partitionKey: "productId" },
  });

  // Create the HTTP API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        // Bind the table name to our API
        bind: [productsTable],
      },
    },
    routes: {
      "POST /addProduct": "packages/functions/src/addProducts.main",
      "GET /listProduct": "packages/functions/src/listProducts.main",
    },
  });

  // Show the URLs in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
