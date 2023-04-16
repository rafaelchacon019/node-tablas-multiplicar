const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(n, listar = false, h = 10) => {

    try {
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= h; i++) {  
            salida += `${n} ${'X'} ${i} = ${n*i}\n`;  
            consola += `${n} ${'X'.yellow} ${i} ${'='.yellow} ${n*i}\n`;  
        }

        if (listar) {
            console.log('==========================='.green);
            console.log('Tabla de:'.yellow, colors.yellow(n));
            console.log('==========================='.green); 

            console.log(consola); 
        }

        fs.writeFileSync(`./salida/tabla-${n}.txt`, salida);

    return `tabla-${n}.txt`;
   
    } catch (err) {
        throw err;
    }  
}

module.exports = {
    crearArchivo
}