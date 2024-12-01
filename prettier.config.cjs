/** @type {import('prettier').Config} */
const config = {
  printWidth: 100,
  singleQuote: true,
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
};

module.exports = config;
