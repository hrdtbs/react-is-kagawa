module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 9,
        project: "./tsconfig.json",
        sourceType: "module"
    },
    env: {
        es6: true,
        browser: true
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint"
    ],
    plugins: ["@typescript-eslint", "sort-imports-es6-autofix"],
    rules: {
        // sort系
        "sort-imports-es6-autofix/sort-imports-es6": [2, { // 通常のsort-importsではautofixが効かないパターンが多いため
            "ignoreCase": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
          }]
    },
    settings: {
        react: {
            version: "detect"
        },
        node: {
            tryExtensions: [".ts"]
        }
    },
    overrides: [
        {
            files: ["**/*.ts", "**/*.tsx"],
            rules: {
                "no-undef": "off",
                // typescript
                "node/no-unsupported-features/es-syntax": 0,

                "no-dupe-class-members": 0,
                "no-unused-vars": 0,
                "@typescript-eslint/no-unused-vars": [2, { args: "none" }],

                "no-array-constructor": 0,
                "@typescript-eslint/no-array-constructor": 2,

                "@typescript-eslint/adjacent-overload-signatures": 2,
                "@typescript-eslint/no-namespace": [2, { allowDeclarations: true }],
                "@typescript-eslint/prefer-namespace-keyword": 2,

                "@typescript-eslint/no-require-imports": 2,
                "@typescript-eslint/no-var-requires": 2,
                "@typescript-eslint/no-unnecessary-type-assertion": 2,
                "@typescript-eslint/restrict-plus-operands": 2,

                // es2018
                "prefer-object-spread": "error",

                "@typescript-eslint/interface-name-prefix": [2, "never"],
                "no-console": 2,

                "no-case-declarations": 2,
            }
        },
        {
            files: ["**/*.test.tsx", "**/*.test.ts", "**/__tests__/*.js"],
            env: {
                jest: true
            },
            rules: {
                "no-invalid-this": 0
            }
        },{
            files: ["*.config.js", "config.js"],
            env: {
                node: true
            }
        }
    ]
}
