/**
  Copyright (c) 2015, 2022, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
module.exports = {
    "parserOptions": {
        "ecmaVersion": 5
    },
    "extends": "airbnb-base/legacy", // use for ESLint5
    "plugins": [
    ],
    "env": {
        "jquery": true
    },
    "globals": {
        "oj": true
    },
    "rules": {
        "comma-dangle": "off",
        "func-names": "off",
        "function-paren-newline": "off",
        "linebreak-style": "off",
        "no-use-before-define" : ["error", {"functions" : false, "classes" : true}],
        "no-plusplus": ["error", {"allowForLoopAfterthoughts": true }],
        "no-underscore-dangle": "off", 
        "vars-on-top": "off",
        "max-len": ['error', 100, 2, {
          ignoreUrls: true,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        }],
        "prefer-promise-reject-errors": "off",
        "object-curly-newline": "off",
        'spaced-comment': ['error', 'always', {
            line: {
              exceptions: ['-', '+'],
              markers: ['=', '!'], // space here to support sprockets directives
            },
            block: {
              exceptions: ['-', '+'],
              markers: ['=', '!'], // space here to support sprockets directives
              balanced: false,
            }
          }],
        "switch-colon-spacing": "off",
    }
}
