module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["*.astro"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:astro/jsx-a11y-recommended",
      ],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      extends: ["plugin:svelte/recommended"],
    },
  ],
  rules: {},
};
