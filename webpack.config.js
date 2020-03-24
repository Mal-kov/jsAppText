module.exports = {
    // точка входа
    entry: ['./src/index.js'],
    // куда складывать проект
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/dist'
    }
}

