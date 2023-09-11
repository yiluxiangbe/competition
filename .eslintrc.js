module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    // 自带的两条规则
    // 还可以追加规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': ['warn', 'always'],
    // 忽视命名规范
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-components': 'off', // 当存在定义而未使用的组件时，关闭报错
    'no-unused-vars': 'off', // 当存在定义而未使用的变量时，关闭报错
    'prefer-const': [
      0,
      {
        ignoreReadBeforeAssign: false
      }
    ]
  }
}
