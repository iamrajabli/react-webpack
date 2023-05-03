export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
}

export interface BuildEnv {
  port: number;
  mode: BuildMode;
}

export interface BuildOptions extends BuildEnv {
  paths: BuildPaths;
  isDev: boolean;
}
