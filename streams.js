const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunck) => {
//     console.log('---- NEW CHUNCK ----')
//     console.log(chunck);
//     writeStream.write('\nNEW CHUNCK\n')
//     writeStream.write(chunck);
// })

// piping (forma mais simples de escrever o código acima)
readStream.pipe(writeStream)

