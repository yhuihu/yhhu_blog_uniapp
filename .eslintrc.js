module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'plugin:vue/essential',
        'standard'
    ],
    globals: {
        uni:'readonly',
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    plugins: [
        'vue'
    ],
    rules: {
        'camelcase': 0,
    }
}