"use strict";

const path = require("path");
const getRootPath = path.normalize(path.join(__dirname, "/../../"));


module.exports = {
    // development: {
    //     rootPath: getRootPath,
    //     db: "mongodb://localhost:27017/shroomportal",
    //     port: 1337
    // },
    development: {
        rootPath: getRootPath,
        db: "mongodb://commodore:pass1@ds159377.mlab.com:59377/infected_mushroom",
        port: 59377
    }
    // production: {
    //     rootPath: getRootPath,
    //     db: process.env.MONGO_DB_CONN_STRING,
    //     port: process.env.port
    // }
};