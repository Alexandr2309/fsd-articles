import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderArgs extends BuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderArgs) {
  const isProd = !isDev;

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          '@babel/plugin-transform-runtime',
          isTsx && isProd && [
            babelRemovePropsPlugin,
            {
              props: ['data-testid'],
            },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
