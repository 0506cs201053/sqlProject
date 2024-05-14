// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs=require('fs');
const connection = require('./db/dbconfig');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

  // Run create table script
  connection.query(fs.readFileSync('./db/createTable.sql').toString(), (error, results) => {
    if (error) {
      console.error('Error creating table:', error);
      return;
    }
    console.log('Table created successfully');
  });
//});

app.get("/",(req,res)=>{
    res.send("welcome")
    // console.log(users);
})

// Routes
app.use('/', userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
