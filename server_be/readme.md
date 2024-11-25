Postup

tu nájdem všetko: https://www.npmjs.com/

Inicializácia Node proejktu
    npm init -y

Pridanie scriptu do package.json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "devStart": "node index.js",
    },

Spustenie serveru
    npm run devStart

Inštalácia express package
    npm install express

Začíname so serverom (index.js)
    const express = require("express");
    const app = express();

    app.get("/", function (req, res) {
    res.send("Hello World");
    });

    app.listen(3000);

Test serveru na ceste: http://localhost:3000/
    Hello World
    (response.status = 200)

Inštalácia nodemon package (-D = lokálna inštalácia)
    npm install nodemon -D 

Pridanie scriptu do package.json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "devStart": "node index.js",
        "dev": "nodemon index.js"
    },

Spustenie serveru s nodemon
    npm run dev

Stiahnutie mongodb + prepojenie s Compassom
    (https://www.youtube.com/watch?v=_7UQPve99r4)

Pridanie mongodb packages 
    npm install mongodb

Pridanie mongoose packages
    npm install mongoose

Require mongoose packages v index.js
    const mongoose = require("mongoose");

Pripojenie sa na databázu pomocou connection stringu 
    mongoose
        .connect( "mongodb+srv://<username>:<password>@<cluster_name>.usgh8.mongodb.net/")
        .then(() => console.log("Connected!"))
        .catch(() => console.log("Connection failed!"));