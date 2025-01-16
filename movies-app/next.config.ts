import { NextConfig } from 'next'

const config: NextConfig = {  
  basePath: '/playwright-movies-app',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  output: 'export',
};

export default config;
