const mysql = require('mysql');
var config = require('../config/database.json');

class DataLink
{

    constructor()
    {
        this.connection = mysql.createConnection(config);
    }

    query(sql, args)
    {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if(err){
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }

    close()
    {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if(err){
                    return reject(err);
                }
                resolve();
            });
        });
    }

}

module.exports = new DataLink();