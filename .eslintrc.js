module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin: react-hooks/recommended",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react","import","jsx-a11y",
    ],
    "rules": {
        "react/prop-types": 0,
        "react/react-in-jsx-scope":0
    },
    "settings":{
        "react":{
            "version":"detect"
        },
        "import/resolver":{
            "node":{
               "extensions":[".js",".jsx"] 
            }
        }
    }
}
