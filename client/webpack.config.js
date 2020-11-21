const path = require('path');

module.exports = {
    webpackFinal: (config) => {
        config.plugins.push({
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: 'babel-loader',
                },
                {
                    loader: '@svgr/webpack',
                    options: {
                        babel: false,
                        icon: true,
                    },
                },
            ],
        });
        return config;
    },
};
