import storybook from "eslint-plugin-storybook";
import reactConfig from "./react.js";

export default [
  ...reactConfig,
  ...storybook.configs["flat/recommended"]
];
