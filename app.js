
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./database/conn');

app.use(cors());
app.use(bodyParser.json()); // to convert any data json to string.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./routes/registerRouter'));

const dotenv = require('dotenv');
dotenv.config({ path:'config.env'});
const PORT = process.env.PORT||5001;

// const Patient = require('./server/model/patientSchema');



app.get("/", (req, res)=>
              {
                res.send(`hello world from app.js`);
              }
        );


app.listen(PORT , () =>
                  {
                      console.log(`Server is running on http://localhost:${PORT}`);
                  }
          );
