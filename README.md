# eslint-config-angellist

This package provides AngelList's `.eslintrc.js` as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+, React, presets inherited, etc. Thus, there are a ton of peer dependencies to satisfy.

### 1. Install config as dependency

```sh
yarn add --dev 'git+https://github.com/venturehacks/eslint-config-angellist#1.0.0'
```

### 2. Install all peer dependencies

If this were a public repository on the npm registry, we could abstract peer dependency installation to one command. Unfortunately, it's private. The dependency list is crudely maintained in this README:

```sh
yarn add --dev \
  '@typescript-eslint/eslint-plugin@5.13.0' \
  '@typescript-eslint/parser@5.13.0' \
  'eslint@8.10.0' \
  'eslint-config-airbnb-base@15.0.0' \
  'eslint-config-prettier@8.4.0' \
  'eslint-import-resolver-typescript@2.5.0' \
  'eslint-plugin-compat@4.0.2' \
  'eslint-plugin-import@2.25.4' \
  'eslint-plugin-jest@26.1.1' \
  'eslint-plugin-jsx-a11y@6.5.1' \
  'eslint-plugin-prettier@4.0.0' \
  'eslint-plugin-react@7.29.2' \
  'eslint-plugin-react-hooks@4.3.0' \
  'eslint-plugin-typescript-sort-keys@2.1.0'
```

### 3. Modify your ESLint config

Add `"extends": "angellist"` to your `.eslintrc.js`

---

## Example Config

```js
module.exports = {
  extends: ['angellist'],

  // TypeScript: you must specify where your tsconfig(s) are located
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.server.json'],
  },

  // rule overrides
  rules: {
    // warning: has dangerous autofix;
    // ok to set to 'warn' w/o husky autofix hook
    'react-hooks/exhaustive-deps': 'off',
  },

  // declare which API's are polyfilled (and thus ignored)
  settings: {
    polyfills: [
      'Promise',
      'Object.values',
      'window.scrollTo',
      'window.scrollY',
      'URLSearchParams',
    ],
  },
};
```

## Useful package scripts

Place these in `package.json`

```json
{
  "scripts": {
    "eslint": "eslint '**/*.ts*'",
    "eslint:fix": "eslint '**/*.ts*' --fix",
  }
}
```
