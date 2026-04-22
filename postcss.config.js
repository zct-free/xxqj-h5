export default {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"],
      selectorBlackList: [".ignore", ".hairlines"],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: /node_modules/,
    },
  },
};
