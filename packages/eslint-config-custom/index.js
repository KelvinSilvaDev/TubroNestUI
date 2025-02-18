module.exports = {
  extends: ["next", "turbo", "prettier"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
    project: "./tsconfig.json",
  },
};
