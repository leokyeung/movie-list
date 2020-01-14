const Models = require('./models.js');

module.exports = {
    getList: (req, res) => {
        Models.getList((err, data) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send(data);
            }
        });
    },

    postMovie: (req, res) => {
        Models.postMovie(req.body, (err, data) => {
            if(err) {
                res.status(400).send(err);
            } else {
                res.send(data);
            }
        });
    },

    deleteMovie: (req, res) => {
        Models.deleteMovie( req.body, (err, data) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send(data);
            }
        })
    }
}