const express =require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5100;
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('build'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build'));
})

app.listen(port, () => {
    console.log('Server is running on port: '+port)
})