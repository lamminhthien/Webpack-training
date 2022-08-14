module.exports = {
  trailingComma: 'none',
  arrowParens: 'avoid',
  parser: 'flow',
  tabWidth: 2,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  jsxBracketSameLine: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: true,
  vueIndentScriptAndStyle: true,
  importOrder: [
    'Vendor/',
    'Script/',
    'Layout/',
    'Partial/',
    'AppTShirtAutoUploader/',
    '@(.*)/',
    '(.*)/api',
    '(.*)/hooks/',
    '(.*)/state/',
    '(.*)/core-ui$',
    '(.*)/components/',
    'assets',
    'style',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  overrides: [
    {
      files: '*.yaml|*.yml',
      options: {
        singleQuote: false
      }
    },
    {
      files: '.editorconfig',
      options: { parser: 'yaml' }
    },
    {
      files: 'LICENSE',
      options: { parser: 'markdown' }
    }
  ]
};
