module.exports = {
    // Use single quotes for string literals
    singleQuote: true,
    // Use 2 spaces for indentation
    tabWidth: 2,
    // Use a trailing comma in multi-line objects and arrays
    trailingComma: 'all',
    // Format code width to fit within 80 characters per line
    printWidth: 80,
    // Use semicolons at the end of statements
    semi: true,
    // Indent JSX tags with 2 spaces
    jsxSingleQuote: false,
    // Add a space before opening braces in object literals
    bracketSpacing: true,
    // Format HTML and XML files as well
    htmlWhitespaceSensitivity: 'ignore',
    "no-inline-styles": false,
    // Specify which file types should be formatted
    // You can add more file types as needed
    // "*.css", "*.scss", "*.json", etc.
    overrides: [
      {
        files: '*.html',
        options: {
          parser: 'html',
        },
      },
    ],
  };