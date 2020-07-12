module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module", // es modules 模式
    ecmaFeatures: {
      globalReturn: false, // 不允许return 语句出现在global环境下
      impliedStrict: true, // 启用全局严格模式
      jsx: true // 启用jsx
    }
  },
  root: true,
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'airbnb-base'
  ],  
  rules: {
    "linebreak-style": 'off', // 不限制使用一致的换行符风格\n  \r\n
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'always', {
      js: 'off',
      vue: 'off'
    }], // 禁用增加or不增加后缀错误提示
    'import/order': 'off', // 禁用import引入排序
    'comma-dangle': ['error', 'never'], // 禁用拖尾逗号
    semi: 'off', // 不提示是否添加分号
    quotes: 'off', // 不强制区分使用双引号、单引号
    'quote-props': ["error", "as-needed"], // 当对象的key如: { 'a-b': 1, '0x0'：1 } 需要加引号
    'space-before-blocks': 'off', // 不强制在块之前使用一致的空格
    'space-before-function-paren': 'off', // 强制在'function'的左括号之前使用一致的空格
    'key-spacing': 'off',
    'import/first': 'off',
    'func-names': 'off',
    'arrow-parens': 'off',
    'spaced-comment': 'off',
    'no-restricted-globals': [
      'error',
      {
        name: 'location',
        message: 'Use window.location'
      }
    ],
    'eol-last': 'off',
    indent: 'off', // 强制统一的缩进
    'object-curly-newline': 'off', // 强制在花括号内使用一致的换行符
    camelcase: 'off' // 强制使用驼峰
  }
}