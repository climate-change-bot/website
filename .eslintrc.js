module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'object-curly-spacing': 'off',
    'space-before-function-paren': 'off'
  },
  ignorePatterns: ['matomo.js']
}
