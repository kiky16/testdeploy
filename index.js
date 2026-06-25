import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 
const app = express();
const port = 3000;
const hostname = '127.0.0.1';
 
app.use(express.static('public'));
app.get('/', (req, res)=>{
    res.sendFile(__dirname+ '/public/index.html');
});
 
app.get('/about', (req, res)=>{
    res.sendFile(__dirname+'/public/about.html');
});
 
app.get('/special', (req, res)=>{
    res.sendFile(__dirname+'/public/special-item.html');
});
 
app.get('/popular', (req,res)=>{
    res.sendFile(__dirname+'/public/popular-item.html');
});
 
app.get('/product/:name', (req, res)=>{
    const name = req.params.name;
    res.send(`
            <h1>${name}</h1>
            <a href='/'>kembali</a>
        `);
});
 
app.use((req, res) =>{
    res.status(404).send('halaman tak ditemukan');
});
 
app.listen(port, ()=>{
    console.log(`server berjalan di port ${port}`)
})
 