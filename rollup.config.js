import babel from "rollup-plugin-babel"
import commonJS from "rollup-plugin-commonjs"
import pkg from "./package.json"
import resolve from "rollup-plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"
import minify from 'rollup-plugin-babel-minify'

export default [
    {
        input: "src/index.ts",
        external: Object.keys(pkg.peerDependencies || {}),
        plugins: [
            typescript({
                typescript: require("typescript"),
                tsconfig: "./tsconfig.json"
            }),
            resolve(),
            commonJS({
                include: "node_modules/**"
            }),
            babel({
                exclude: [/\/core-js\//],
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            useBuiltIns: "usage",
                            corejs: 3
                        }
                    ]
                ]
            }),
            minify({})
        ],
        output: [{ file: pkg.main, format: "cjs" }, { file: pkg.module, format: "es" }]
    }
]
