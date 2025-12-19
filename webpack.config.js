
module.exports = ({
    production = true,
    development = false,
    clean = false
}) => {
    
    const mode = production ? 'production' : development ? 'development' : 'none';

    return {
        entry: './src/idcreate.js',
        output: { clean, filename: 'idcreate.js' },
        mode
    }
}