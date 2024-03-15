const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './assets/scripts/index.js',
    output: {
        'path': path.resolve(__dirname, 'app', 'static'),
        'filename': 'bundle.js'
    },
    module: {
        rules: [

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|woff2|ttf)$/, // Add 'ttf' here
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        // ... other plugins ...
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'assets', 'images'),
                    to: path.resolve(__dirname, 'app', 'static', 'images'),
                },
                {
                    from: path.resolve(__dirname, 'assets', 'fonts'),
                    to: path.resolve(__dirname, 'app', 'static', 'fonts'),
                },
            ],
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'app', 'static'), // Serve static files from this directory
        hot: true, // Enable Hot Module Replacement (HMR)
    }
}