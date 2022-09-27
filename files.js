const fs = require('fs');

// reading files
// fs. readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// writing files
// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//     console.log('file was written')
// });

// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//     console.log('file was written')
// }); 
// como o arquivo não existe, ele é criado

// directories

// uma exclamação na frente da condição significa o oposto (nesse caso, só vai criar a pasta de ela já NÃO existir)
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created')
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// mkdir = make directory
// rmdir = remove directory

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}