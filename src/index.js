const express = require("express");
const bodyParser = require("body-parser");


// differentiate different exports together by a line gap
const { PORT } = require('./config/serverConfig')
const CityRepository =  require('./repository/city-repository')


const setupAndStartServer = async () => {
    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    const PORT = 3000;
    app.listen(PORT,() =>{
        console.log(`Server started at ${PORT}`);
        const repo = new CityRepository(); //first you need to create an object 
        repo.createCity({name : "New Delhi"});

    } );
} 

setupAndStartServer();