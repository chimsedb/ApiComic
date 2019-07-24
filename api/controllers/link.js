const connection = require('../config/configdb');

exports.link = (req,res,next)=>{

    connection.query('select * from link', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);

        if(results){
            res.status(200).json(results);
        }
    });

}