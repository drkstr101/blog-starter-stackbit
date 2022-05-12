const path = require("path");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  plugins: [
    {
      module: require("sourcebit-source-filesystem"),
      options: {
        watch: isDev,
        sources: [
          { name: "data", path: path.join(__dirname, "content/data") },
          { name: "pages", path: path.join(__dirname, "content/pages") },
        ],
      },
    },
    {
      module: require("sourcebit-target-next"),
      options: { flattenAssetUrls: true },
    },
  ],
};
