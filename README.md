# 1
npx react-native init AwesomeTSProject --template react-native-template-typescript

# 2
yarn add native-base react-native-svg react-native-safe-area-context react-native-web react-scripts
yarn add react@18 react-dom@18

# 3
yarn add -D @types/react@18  @types/react-dom@18
yarn add -D @types/react-native react-dom babel-plugin-react-native-web babel-plugin-module-resolver typescript @types/jest @types/react @types/react-native @types/react-test-renderer
babel-plugin-react-native-web webpack webpack-cli webpack-dev-server html-webpack-plugin react-dom babel-loader url-loader @svgr/webpack webpack-bundle-analyzer

# Executando
yarn run ios
yarn run android
yarn run web


# WebPack:

```
    splitChunks: {
      minSize: 0,
      chunks: 'all',
      maxInitialRequests: Infinity,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
  
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
```