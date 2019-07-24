const sql = require('mssql');
const config = require('../config/configdb');

exports.manga = (req,res,next)=>{
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from manga', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            sql.close();
        });
    });
}