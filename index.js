
const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes); 

app.listen(process.env.PORT || 4000, () => console.log(`Server is running on the port ${process.env.PORT}`))