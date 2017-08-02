var router = require('express').Router();

router.get('/', (req, res) => {
    var db = require('../../../lib/database')();

    db.query('SELECT * FROM users', function (err, results, fields) {
        return res.render('admin/users/views/index', { users: results });
    });
});

module.exports = router;