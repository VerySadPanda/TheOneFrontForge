module.exports = {
    "extends": ["airbnb-base", "plugin:react/all", "plugin:import/react",],
    "plugins": ["react", "react-hooks"],
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".js",".jsx"],
            "paths": ["."]
          }
        }
    },
    "rules": {
        "react/jsx-sort-props": 0,
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-props-no-spreading": 0,
        "react/forbid-component-props": 0,
        "react/jsx-max-depth": ["error", { "max": 5 }],
        "react/sort-prop-types": 0
    }
};