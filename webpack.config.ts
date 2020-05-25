import slsw from 'serverless-webpack';
// sd
module.exports = {
  entry: slsw.lib.entries,
  optimization: { minimize: true },
};
