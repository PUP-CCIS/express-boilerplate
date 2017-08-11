var router = require('express').Router();
var db = require('../../../lib/database')();

router.get('/', (req, res) => {
    db.query('SELECT * FROM todos', (err, results, fields) => {
        if (err) return res.status(400).send({ error: err });
        res.status(200).send(results);
    });
});

router.post('/', (req, res) => {
    db.query('INSERT INTO todos (`title`, `description`, `done`) VALUES (?, ?, false)', [req.body.title, req.body.description], (err, results, fields) => {
        if (err) return res.status(400).send({ error: err.toString() });
        res.status(200).send({ message: 'Successfully added todo!' });
    });
});

module.exports = router;