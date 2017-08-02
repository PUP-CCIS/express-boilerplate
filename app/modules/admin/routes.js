var router = require('express').Router();

router.use('/users', require('./users/routes'));

exports.admin = router;