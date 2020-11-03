module.exports = {
    env: {
        'node': true
    },
    extends: 'standard',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module"
    },
    rules: {
        // allow console
        'no-console': 0,
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': 0
    }
}