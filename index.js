module.exports = {
  extends: [
    'airbnb-base',
    'plugin:compat/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'jest',
    'typescript-sort-keys',
    '@typescript-eslint',
    'react',
    'react-hooks',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
      }
    ],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '(React|T$)',
      },
    ],
    '@typescript-eslint/no-use-before-declare': 'off',
    '@typescript-eslint/no-use-before-define': 'off', // typescript compiler covers this rule
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    'arrow-body-style': 'off',
    'arrow-parens': ['off', 'as-needed'],
    camelcase: 'off',
    'class-methods-use-this': 'off',
    complexity: 'off',
    'consistent-return': 'off',
    'constructor-super': 'error',
    curly: 'error',
    'default-case': 'off',
    'dot-notation': 'error',
    'eol-last': 'off',
    'func-names': 'off',
    'guard-for-in': 'error',
    // TypeScript compiler itself handles these rules
    'import/extensions': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-cycle': 'off',
    'import/default': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.*', '**/lib/testing/**/*'],
      },
    ],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/aria-role': [
      'error',
      {
        'ignoreNonDOM': true,
      }
    ],
    'linebreak-style': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'max-classes-per-file': ['error', 1],
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-debugger': 'error',
    'no-duplicate-case': 'error',
    'no-else-return': [
      'error',
      {
        allowElseIf: true,
      },
    ],
    'no-empty': 'error',
    'no-extra-bind': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__typename',
          '__STATE__',
          '__init',
          '__schema',
          '_fs_init',
          '__SHA',
        ],
      },
    ],
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': 'off',
    'no-shadow': 'off', // covered by @typescript-eslint/no-shadow
    '@typescript-eslint/no-shadow': ['error'],
    'no-use-before-define': 'off',  // covered by @typescript-eslint/no-use-before-define
    "@typescript-eslint/no-use-before-define": 'off', // TS compiler covers this, and it's more annoying than useful otherwise
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
    ],
    'prefer-object-spread': 'error',
    'prettier/prettier': 'off', // prettier is expensive, so we don't run it as part of eslint
    'quote-props': 'off',
    radix: 'error',
    'react-hooks/exhaustive-deps': 'off', // has dangerous autofix; ok to set to 'warn' w/o husky autofix hook
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        reservedFirst: true,
        shorthandLast: true,
      },
    ],
    'react/jsx-uses-vars': 'error',
    // "react/jsx-handler-names": ['error', {
    //   "eventHandlerPrefix": '(handle|submit|select)',
    //   "eventHandlerPropPrefix": 'on',
    // }],
    'react/prop-types': 'off',
    'react/sort-comp': [
      'error',
      {
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'state',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          'everything-else',
          '/^on.+$/',
          'render',
        ],
      },
    ],
    'sort-keys': 'off',
    'sort-vars': 'error',
    'space-before-function-paren': 'off',
    'typescript-sort-keys/interface': [
      'error',
      'asc',
      {
        caseSensitive: false,
      },
    ],
    'typescript-sort-keys/string-enum': [
      'error',
      'asc',
      {
        caseSensitive: false,
      },
    ],
    'use-isnan': 'error',
    'valid-typeof': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
