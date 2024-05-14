// controllers/userController.js
const connection = require('../db/dbconfig')

const registerUser = (req, res) => {
  const { name, email, password, mobileNumber } = req.body;

  connection.query('INSERT INTO users (name, email, password, mobileNumber) VALUES (?, ?, ?, ?)', 
    [name, email, password, mobileNumber], 
    (error, results) => {
      if (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Error registering user' });
        return;
      }
      console.log('User registered successfully:', results);
      res.status(200).json({ message: 'User registered successfully' });
    }
  );
};

module.exports={registerUser};
