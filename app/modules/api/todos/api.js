var router = require('express').Router();
var db = require('../../../lib/database')();

// /api/todos
router.get('/', (req, res) => {
    db.query('SELECT * FROM todos', (err, results, fields) => {
        if (err) return res.status(400).send({ error: err });
        res.status(200).send(results);
    });
});

// /api/todos
router.post('/', (req, res) => {
    db.query('INSERT INTO todos (`title`, `description`, `done`) VALUES (?, ?, false)', [req.body.title, req.body.description], (err, results, fields) => {
        if (err) return res.status(400).send({ error: err.toString() });
        res.status(200).send({ message: 'Successfully added todo!' });
    });
});

// /api/todos/:id
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM todos WHERE id=?', [req.params.id], (err, results, fields) => {
        if (err) return res.status(400).send({ error: err.toString() });
        res.status(200).send(results[0]);
    });
});

// /api/todos/:id
router.put('/:id', (req, res) => {
    db.query('UPDATE todos SET title=?, description=? WHERE id=?', [req.body.title, req.body.description, req.params.id], (err, results, fields) => {
        if (err) return res.status(400).send({ error: err.toString() });
        res.status(200).send({ message: 'Successfully updated item.' });
    });
});

module.exports = router;