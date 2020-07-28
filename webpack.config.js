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
     * 
     * entry 单入口是一个字符串
     * entry: './src/index.js',
     * 
     *  */
    entry: {
        index: './src/index.js',
        search: './src/search.js',
    },

    // 指定 webpack 打包编译后的文件输出到磁盘
    output: {
        /**
         * ouput 只有单出口的设置
         * entry:{
         *  filename'[name].js',  //  [占位符] ，多入口使用占位符确保打包文件命名的唯一。
         *  path.join(__dirname, 'dist'),
         * }
         *  */
        // 
        path: path.join(__dirname, 'dist'), // 输出文件夹
        filename: '[name].js' // 打包的文件名
    },
    mode: 'production'
}