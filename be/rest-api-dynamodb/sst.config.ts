import { SSTConfig } from "sst";
import { JellyBeanStack } from "./stacks/JellyBeanStack";

export default {
  config(_input) {
    return {
      name: "jelly-bean-joint",
      region: "ap-southeast-1",
    };
  },
  stacks(app) {
    app.stack(JellyBeanStack);
  },
} satisfies SSTConfig;
