module.exports = function(app){
    app.get('/informacao/professores', function(req,res){
    const sql = require ('mssql/msnodesqlv8');
    const sqlConfig = {
    user: 'BD2021004',
    password: 'Edu15981705102',
    database: 'BD',
    server: '192.168.1.6',//Caso o nome tenha uma instância, colocar duas barras, ex: ‘DESKTOP\\SQLSERVER
    }
   
    async function getProfessores() {
    try {
    const pool = await sql.connect(sqlConfig);
   
    const results = await pool.request().query('SELECT * from PROFESSORES')
   
    res.send(results.recordsets)
   
    } catch (err) {
    console.log(err)
    }
    //res.render('informacao/professores');
    }
    const professores = getProfessores();
    });
   }
   
