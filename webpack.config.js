const path= require ("path");

const postCSSPlugins =[
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("postcss-preset-env"),
    require("autoprefixer")
];
module.exports={
    entry:"./src/App.js",
    output:{
        filename:'bundled.js',
        path:path.resolve(__dirname,"app")
            },
    mode:"development",
    watch: true,
    module:{
        rules:[
            {
                test:/\.(s[ac]|c)ss$/i,
                use:[
                    "style-loader",
                    "css-loader", 
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                    ],
                                ],
                            },
                        },
                    },
                    ],
            },
        ],
    },        
};