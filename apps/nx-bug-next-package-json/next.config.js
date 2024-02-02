//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

const packageJsonAppVersion = require('./package.json').version;

// https://nx.dev/recipes/next/next-config-setup#composing-plugins-using-utility-nx-16-and-later
module.exports = composePlugins(...plugins, function debug(config) {
  // The debug plugin will be called last
  // console.log({ config });
  console.log({ packageJsonAppVersion });
  return config;
})(nextConfig);
