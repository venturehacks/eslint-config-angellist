module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:compat/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
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
    // NOTE(drew): Tried this one out, wasn't exceptionally useful.
    // Often, we list the most important type first, or there is a
    // natual progression to string literal types (sm, md, lg, ...)
    // '@typescript-eslint/sort-type-union-intersection-members': ['error'],

    // NOTE(drew): Tried this one out.. looks pretty useful, but
    // also quite a big hammer. There are cases where I'm not sure
    // our typecasting matches data flow. Would be cool to enable
    // this one in future.
    // '@typescript-eslint/no-unnecessary-condition': [
    //   'error',
    //   {
    //     allowConstantLoopConditions: true,
    //   },
    // ],

    // NOTE(drew): turning off until a dedicated PR adds it
    '@typescript-eslint/no-explicit-any': 'off',

    // NOTE(drew): could be useful in the future to reduce bogus types
    '@typescript-eslint/ban-types': 'off',

    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // too strict
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/prefer-includes': ['error'],
    '@typescript-eslint/ban-tslint-comment': ['error'],
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 10, // characters
      },
    ],
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
    '@typescript-eslint/unified-signatures': 'error',
    'arrow-body-style': 'off',
    'arrow-parens': ['off', 'as-needed'],
    'camelcase': 'off',
    'class-methods-use-this': 'off',
    'complexity': 'off',
    'consistent-return': 'off',
    'constructor-super': 'error',
    'curly':  ['error', 'multi-line', 'consistent'],
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
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off', // covered by TypeScript
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
