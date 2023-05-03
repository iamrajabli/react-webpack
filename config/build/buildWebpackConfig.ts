import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
