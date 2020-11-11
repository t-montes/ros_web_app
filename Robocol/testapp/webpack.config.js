var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,

    // output: {
    //     path: path.resolve('./assets/bundles/'),
    //     filename: "[name]-[hash].js",
    //     publicPath: 'http://localhost:3000/assets/bundles/',
    // },
    
    plugins: [
        new BundleTracker({ path: __dirname, filename: './webpack-stats.json' })
    ]
};