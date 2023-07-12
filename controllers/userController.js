// controllers/userController.js
const User = require('../models/user.js');

// Creates list of users with given input array
async function createUsersWithArray(req, res) {
  const usersData = req.body;
console.log("checkinggg========")
  try {
    const users = await User.bulkCreate(usersData);
    res.json(users);
  } catch (error) {
    res.sendStatus(500);
  }
}

// Get user by username
async function getUserByUsername(req, res) {
  const { username } = req.params;

  try {
    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid username supplied' });
  }
}

// Update user
async function updateUser(req, res) {
  const { username } = req.params;
  const userData = req.body;

  try {
    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      await user.update(userData);
      res.json(user);
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid user supplied' });
  }
}

// Delete user
async function deleteUser(req, res) {
  const { username } = req.params;

  try {
    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      await user.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid username supplied' });
  }
}

// Logs user into the system
async function loginUser(req, res) {
  console.log("check==")
  const { username, password } = req.query;
console.log(req.query);
  try {
    const user = await User.findOne({ where: { username } });

    if (!user || user.password !== password) {
      // Invalid credentials
      res.status(400).json({ error: 'Invalid username/password supplied' });
    } else {
      // Successful login
      
      res.json({ message: 'Login successful' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid username/password supplied' });
  }
}

async function logoutUser(req, res) {
  // Implement logic to log out user session
  // Not provided in the Swagger documentation
  // Example logic to clear user session
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ error: 'Unable to logout' });
    } else {
      res.json({ message: 'Logout successful' });
    }
  });
}

// Create user
async function createUser(req, res) {
  const userData = req.body;

  try {
    const user = await User.create(userData);
    res.json(user);
  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = {
  createUsersWithArray,
  getUserByUsername,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
  createUser,
};
