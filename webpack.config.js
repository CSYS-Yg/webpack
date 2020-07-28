'use strict'

const path = require('path')

// .\node_modules\.bin\webpack  运行无需加 cd 
module.exports = {
    // entry 指定 webpack 的打包入口

    /**
     * // entry 多入口 是一个对象
     * entry:{
     *  app：'./src/app.js',
     *  adminApp：'./src/adminApp.js',
     * }
     *  */
    // entry 单入口是一个字符串
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'), // 输出文件夹
        filename: 'bundle.js' // 打包的文件名
    },
    mode: 'production'
}