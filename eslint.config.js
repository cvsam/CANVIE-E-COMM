import globals from "globals";  
import pluginJs from "@eslint/js";  
import pluginReact from "eslint-plugin-react";  
import pluginPrettier from "eslint-plugin-prettier";  

const config = {  
    env: {  
        browser: true,  
        es2021: true,  
    },  
    extends: [  
        "eslint:recommended",  
        "plugin:react/recommended",  
        "plugin:prettier/recommended", // If using Prettier plugin for ESLint  
    ],  
    parser: "@babel/eslint-parser", // Ensure Babel is installed  
    parserOptions: {  
        ecmaFeatures: {  
            jsx: true,  
        },  
        ecmaVersion: "latest",  
        sourceType: "module",  
    },  
    plugins: ["react", "prettier"], // Including Prettier plugin  
    rules: {  
        "react/react-in-jsx-scope": "off", // Not required in React 17+  
        "no-console": "warn", // Warn on console logs  
        "prettier/prettier": "warn", // Warn on Prettier formatting issues  
    },  
    settings: {  
        react: {  
            version: "detect", // Automatically detect the React version  
        },  
    },  
    overrides: [  
        {  
            files: ["**/*.{js,mjs,cjs,jsx}"],  
            languageOptions: {  
                globals: globals.browser,  
            },  
        },  
    ],  
};  

export default config;