const colors = require('colors');

const argv = require('yargs')
                    .option('n', {
                        alias: 'num',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la tabla de la tabla de multiplicar'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Limite de la tabla de multiplicar'
                    })
                    .option('l', {
                        alias: 'list',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .check((argv, options)=>{
                        if(isNaN(argv.n)){
                            throw 'La base tiene que ser un número'.red
                        }
                        return true;
                    })                    
                    .argv;

module.exports = argv;                     