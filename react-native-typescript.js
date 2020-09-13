module.exports = {
   parser: "@typescript-eslint/parser", // Specifies the ESLint parser
3  parserOptions: {
4    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
5    sourceType: "module", // Allows for the use of imports
ecmaFeatures: {
         jsx: true // Allows for the parsing of JSX
       }
6  },
settings: {
       react: {
         version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
       }
     },
   extends: [
      'universe/native', 
      'universe/shared/typescript-analysis',
      "plugin:@typescript-eslint/recommended",
      // 'plugin:unused-imports/recommended'
      // 'plugin:import/errors',
      // 'plugin:import/warnings',
      // 'plugin:react-hooks/recommended',
      // 'plugin:prettier/recommended', 
      "prettier/@typescript-eslint",
      'prettier',
      'prettier/react',
   ],
   plugins: ['prettier','unused-imports', 'import', 'react-hooks'],
    overrides: [
         {
           files: [
             '*.ts',
             '*.tsx',
             '*.d.ts'
           ],
           parserOptions: {
             project: './tsconfig.json'
           },
         },
       ],
   rules: {
     'prettier/prettier': 'error',
     'react-hooks/rules-of-hooks': 'error',
     'react-hooks/exhaustive-deps': 'warn',
     'react/jsx-filename-extension': 0,
     'no-unused-vars': 'off',
     'unused-imports/no-unused-imports': 'error',
     'unused-imports/no-unused-vars': [
       'error',
       {
         vars: 'all',
         varsIgnorePattern: '^_',
         args: 'after-used',
         argsIgnorePattern: '^_',
       },
     ],
     'import/order': [
       'error',
       {
         'newlines-between': 'always',
         groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
       },
     ],
   },
 };