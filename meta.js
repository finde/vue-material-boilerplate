module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Name of the project"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Description",
      "default": "An awesome Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author(s)"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler (recommended)",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: 6KB min+gzip",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "lintConfig": {
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "AirBNB (https://github.com/airbnb/javascript) + Softbox lint",
          "value": "airbnb",
          "short": "AirBNB"
        }
      ]
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  "skipInterpolation": "src/**/*.vue",
  "filters": {
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "test/e2e/**/*": "e2e"
  },
  "completeMessage": "To run the project:\n\n cd {{destDirName}}\n yarn install\n yarn run dev\n\nThe official documentation can be read at https://vuejs-templates.github.io/webpack"
};
