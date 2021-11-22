module.exports = ({ config }) => {
  const rules = config.module.rules;

  // modify storybook's file-loader rule to avoid conflicts with your inline svg
  const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
  fileLoaderRule.exclude = /\.inline.svg$/;

  return config;
};
