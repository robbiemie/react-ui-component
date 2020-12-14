const path = require('path');

module.exports = ({
  config
}) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, "../src"),
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve('babel-preset-react-app')]
        }
      }, 
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          shouldExtractLiteralValuesFromEnum: true,
          propFilter: (prop) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes("node_modules");
            }
            return true;
          },
        }
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx");
  return config
}