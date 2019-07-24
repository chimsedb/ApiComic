const connection = require('../config/configdb');

exports.manga = (req,res,next)=>{

    connection.query('select * from manga', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);

        if(results){
            res.status(200).json(results);
        }
    });
}