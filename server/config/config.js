"use strict";

const path = require("path");
const getRootPath = path.normalize(path.join(__dirname, "/../../"));
const localHostConnectionString = "";

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
