const express = require('express');
const router = express.Router();
const {addMessage, getMessages, getForm} = require('../controlers/indexController.js');


// router.use(express.json())
router.use(express.urlencoded({extended: false}))

router.get('/new', getForm)
router.post('/new', addMessage);
router.post('/new', (req, res) => res.send("hello"));

router.get('/', getMessages);

module.exports = router;