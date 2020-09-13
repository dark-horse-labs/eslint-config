module.exports = {
   extends: [
      'universe/native', 
      // 'plugin:unused-imports/recommended'
      // 'plugin:import/errors',
      // 'plugin:import/warnings',
      // 'plugin:react-hooks/recommended',
      // 'plugin:prettier/recommended', 
      'prettier',
      'prettier/react',
   ],
   plugins: ['prettier','unused-imports', 'import', 'react-hooks'],
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