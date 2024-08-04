const express = require('express');
const path = require('path');
const router = require('./routers/indexRouter.js')


const app = express();
app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));