const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.end ('<h1>HOME page</h1>') 
})

app.get('/about', (req, res) => {
    res.end ('<h1>About page</h1>') 
})

app.listen(PORT, ()=>
{
console.log('server win');

})
