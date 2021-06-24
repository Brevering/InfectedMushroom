"use strict";

const path = require("path");
const getRootPath = path.normalize(path.join(__dirname, "/../../"));
const localHostConnectionString = "mongodb+srv://Brevering:Parol@ribame4@clusterzero.lqsso.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

module.exports = {
    development: {
        rootPath: getRootPath,
        db: localHostConnectionString,
        port: Number(process.env.PORT || 80)
    },
    production: {
        rootPath: getRootPath,
        db: process.env.MONGO_DB_CONN_STRING,
        port: Number(process.env.PORT || 80)
    }
};
