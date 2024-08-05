const express = require('express');
const path = require('path');
const router = require('./routers/indexRouter.js')


const app = express();
router.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));