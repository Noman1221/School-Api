const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


const schoolsRouter = require('./routes/schools');


const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Basic health check
app.get('/', (req, res) => res.json({ ok: true, message: 'School API running' }));


app.use('/', schoolsRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));