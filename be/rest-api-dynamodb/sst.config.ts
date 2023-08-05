import { SSTConfig } from "sst";
import { ExampleStack } from "./stacks/ExampleStack";

export default {
  config(_input) {
    return {
      name: "rest-api-dynamodb",
      region: "ap-southeast-1",
    };
  },
  stacks(app) {
    app.stack(ExampleStack);
  },
} satisfies SSTConfig;
