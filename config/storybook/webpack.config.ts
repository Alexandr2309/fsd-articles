import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    html: '',
    build: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
    buildLocales: path.resolve(__dirname, '..', '..', 'build', 'locales'),
  };

  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');
  config!.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': paths.src,
  };

  // eslint-disable-next-line no-param-reassign

  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg/ };
    }
    if (/jpg|png|jpeg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.jpg|\.png|\.jpeg/ };
    }
    return rule;
  });

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config!.module!.rules.push({
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  });

  config!.module!.rules.push(buildCssLoader(true));

  config!.plugins!.push(new DefinePlugin({
    __IS__DEV__: true,
    __API__: JSON.stringify('https://testapi.ru'),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
