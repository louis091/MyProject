const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const dbConnection = require('./database/dbConnect')
const authRoute = require('./routes/authRoute')
const cors = require('cors')



const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

dbConnection;

app.use('/api', authRoute)

app.listen(PORT, () => {
  console.log('Server is listenning on PORT 3000');
})