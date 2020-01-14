var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'leodb1'
});

connection.connect();

module.exports = {
  getList: callback => {
    const query = "select * from movielist";
    connection.query(query, function (error, results) {
      if(error) {
        callback(error);
      } else {
        callback(null,results);
      }
    });
  },
  postMovie: (data, callback) => {
    const query = `insert movielist (title, year, score, total_vote, img) values ('${data.original_title}' , ${data.release_date}, ${data.vote_average}, ${data.vote_count}, '${data.poster_path}')`

    connection.query(query, function(err, results){
      if(err){
        callback(err)
      } else{
        //console.log(results);
        callback(null, results);
      }
    })
  },

  deleteMovie: (data, callback) => {
    const query = `delete from movielist where id=${data.id};`

    connection.query(query, function(err, results){
      if(err) {
        callback(err)
      } else {
        callback(null, results);
      }
    })
  }
}