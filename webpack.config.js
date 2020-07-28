'use strict'

const path = require('path')

// .\node_modules\.bin\webpack  运行无需加 cd 
module.exports = {
    entry: './src/index.js',
    output: { 
        path: path.join(__dirname, 'dist'), // 输出文件夹
        filename: 'bundle.js' // 打包的文件名
    },
    mode: 'production'
}