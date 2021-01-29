const HtmlWebpackPlugin = require('html-webpack-plugin')
const path=require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = [
  "none",
	"eval",
	"eval-cheap-source-map",
	"eval-cheap-module-source-map",
  "eval-source-map",
	"cheap-source-map",
	"cheap-module-source-map",
	"inline-cheap-source-map",
	"inline-cheap-module-source-map",
	"source-map",
	"inline-source-map",
	"hidden-source-map",
	"nosources-source-map"
].map(devtool => ({
  devtool:devtool==='none'?undefined:devtool,
	entry:'./src/index.js',
	output: {
		filename: `js/${devtool}.js`
	},
	module:{
    rules:[
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename:`${devtool}.html`,
      template: path.resolve(__dirname, './index.html'),
    })
  ]
}));


// module.exports={
//   mode:'none',
//   entry:'./src/index.js',
//    output:{
//      filename:'bundle.js',
//      path:path.join(__dirname,'dist')
//    }
// }