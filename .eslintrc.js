/*
 * @Author: skychx
 * @Date: 2021-02-03 22:23:55
 * @LastEditors: skychx
 * @LastEditTime: 2021-02-04 11:59:15
 * @FilePath: /Toy-Data-Structures/.eslintrc.js
 */
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'no-var': 'error',
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        'eqeqeq': ['error', 'always'],
        'quotes': ['error', 'single'],
        // 优先使用 interface 而不是 type
        '@typescript-eslint/consistent-type-definitions': [
            'error',
            'interface'
        ]
    }
}