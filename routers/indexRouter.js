const express = require('express');
const router = express.Router();
const log = require('../controlers/indexController.js');

router.use(log);
router.get('/', (req, res) => res.send("hello"));
router.post('/new', (req, res) => res.send("hello"));

module.exports = router;