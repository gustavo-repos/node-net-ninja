const express = require('express');

// express
const app = express();

// register view engine
app.set('view engine', 'ejs')

// Para o caso de os arquivos htmls estejam em outra pasta, por exemplo, se estivem na pasta myviews:
// app.set('views', 'myviews') 

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    //res.send('<p>about</p>');
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
// precisa ir no fim do código!
// nesse caso precisa setar o código manualmente
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
}) 