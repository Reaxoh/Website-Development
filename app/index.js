console.log("Hello world");

const express = require('express');
const app   = express();
const fs    = require('fs');
const port  = 80;
const mysql = require('mysql2');


var mysqlAdmin = require('node-mysql-admin');


const connection = mysql.createConnection({
    host: 'mariadb',
    user: 'root',
    password: 'root',
    database: 'mydatabase'
});

filepath('/',          './html/index.html', 'html');
filepath('/style', './css/style.css'  , 'css');

function filepath(path , linkpath, type) { 
    app.get(path, (req, res) => {
        const data = fs.readFileSync(linkpath, 'utf-8');
        // const bufferLen = Buffer.byteLength(data, 'utf8');
        let myHead = { 
                        "Content-Type": `text/${type}; charset=utf-8`
                        // "Content-Length": bufferLen
                     };

        res.writeHead(200, myHead);
        res.write(data);
        res.send();
    });
}

connection.connect((err) => {
    if (err) { 
        console.error(err);
        return;
    }
    console.log("Connected to mariadb database");
});

app.use(mysqlAdmin(app));

app.listen(port);