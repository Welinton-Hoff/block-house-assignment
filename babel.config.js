module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            /**
             * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
             */
            "^~(.+)": "./src/\\1",
          },
          extensions: [
            ".js",
            ".ts",
            ".jsx",
            ".tsx",
            ".json",
            ".ios.js",
            ".native.js",
            ".android.js",
          ],
        },
      ],
    ],
  };
};
