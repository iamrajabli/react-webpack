import webpack from 'webpack';
import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  };

  const DEVELOPMENT = 'development';

  const mode = env.mode || DEVELOPMENT;
  const isDev = mode === DEVELOPMENT;
  const port = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({ mode, paths, isDev, port });

  return config;
};
