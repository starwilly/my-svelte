/** @type {import("snowpack").SnowpackUserConfig } */
const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    [
      "@snowpack/plugin-svelte",
      {
        preprocess: sveltePreprocess({
          postcss: {
            plugins: [require("tailwindcss"), require("autoprefixer")],
          },
        }),
      },
    ],
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-webpack",
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
