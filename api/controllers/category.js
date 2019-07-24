const config = require('../config/configdb');
const sql = require("mssql");

exports.category = (req,res,next)=>{
    
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from category', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.status(200).send(recordset);
            sql.close();
        });
    });
}