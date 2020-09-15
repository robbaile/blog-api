const express = require('express');
const cors = require('cors');

const routes = require('./routes/routes');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});


