module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true
  },
  rules: {
    semi: ['error', 'never'],
    'react/prop-types': 0,
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'react/jsx-filename-extension': 0,
    'consistent-return': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-mixed-operators': 0,
    'react/prefer-stateless-function': 0,
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'space-before-function-paren': ['error', 'always'],
    'arrow-parens': [2, 'as-needed'],
    'no-console': 0,
    'no-alert': 0,
    'no-nested-ternary': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline'
      }
    ],
    'no-shadow': 0,
    'no-param-reassign': 0,
    'jsx-a11y/href-no-hash': 0,
    radix: 0,
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'no-underscore-dangle': 0,
    'global-require': 0
  }
}