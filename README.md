# eslint-config-angellist

This package provides AngelList's `.eslintrc.js` as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+, React, TSLint compat bindings, presets inherited, etc. Thus, there are a ton of peer dependencies to satisfy.

### 1. Install config as dependency

```sh
yarn add --dev 'git+https://github.com/venturehacks/eslint-config-angellist#0.3.1'
```

### 2. Install all peer dependencies

If this were a public repository on the npm registry, we could abstract peer dependency installation to one command. Unfortunately, it's private. The dependency list is crudely maintained in this README:

```sh
yarn add --dev \
  '@typescript-eslint/eslint-plugin-tslint@^2.15.0' \
  '@typescript-eslint/eslint-plugin@^2.15.0' \
  '@typescript-eslint/parser@^2.15.0' \
  'eslint-config-airbnb-base@^14.0.0' \
  'eslint-config-prettier@^6.9.0' \
  'eslint-import-resolver-typescript@^2.0.0' \
  'eslint-plugin-compat@^3.3.0' \
  'eslint-plugin-import@^2.20.0' \
  'eslint-plugin-jest@^23.6.0' \
  'eslint-plugin-jsx-a11y@^6.2.3' \
  'eslint-plugin-prettier@^3.1.2' \
  'eslint-plugin-react-hooks@^2.3.0' \
  'eslint-plugin-react@^7.17.0' \
  'eslint-plugin-sort-keys-fix@^1.1.0' \
  'eslint-plugin-typescript-sort-keys@^0.5.0' \
  'eslint@^6.8.0' \
  'tslint-config-prettier@^1.18.0' \
  'tslint-react@^4.1.0' \
  'tslint@^5.20.1'
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
    // eslint tyepscript only
    "eslint": "eslint '**/*.ts*' --format codeframe",
    "eslint:fix": "eslint '**/*.ts*' --format codeframe --fix",
    // tslint helpers
    "tslint": "tslint --project . -t grouped",
    "tslint:fix": "tslint  --project . --fix -t grouped",
    "tslint:vscode": "tslint --project . -t vscode"
  }
}
```
