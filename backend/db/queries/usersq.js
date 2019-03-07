const { db } = require('../index.js')
const authHelpers = require("../../auth/helpers");

const getAllUsers = (req, res, next) => {
    db.any('SELECT * FROM users')
    .then(users => {
        res.status(200).json({
            status: 'success',
            users: users,
            message: 'all users'
        })
    })
    .catch((err) => {
        next(err)
    })
}

const getSingleUser = (req, res, next) => {
    let userId = req.params.name
    db.one('SELECT * FROM users WHERE username=$1', [userId])
    .then(user => {
        res.status(200).json({
            status: 'success',
            user: user,
            message: 'single user'
        })
    })
    .catch(err => {
        next(err)
    })
}

const editUser = (req, res, next) => {
    db.none('UPDATE users SET full_name = ${full_name}, username = ${username}, password_digest = ${password_digest}, email = ${email}, pic_url = ${pic_url} WHERE id = ${id}', {
        id: parseInt(req.params.id),
        full_name: req.body.full_name,
        username: req.body.username,
        email: req.body.email,
        password_digest: req.body.password_digest,
        pic_url: req.body.url
    })
    .then(() => {
        res.status(200)
        .json({
            status: "success",
            message: "updated user"
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const addUser = (req, res, next) => {
    const hash = authHelpers.createHash(req.body.password);
  
    db.none(
      "INSERT INTO users (username, email, full_name, password_digest) VALUES (${username}, ${email}, ${full_name}, ${password})",
      { username: req.body.username, 
        full_name: req.body.full_name, 
        email: req.body.email, 
        password: hash }
    )
      .then(() => {
        res.status(200).json({
          message: "Registration successful."
        });
      })
      .catch(err => {
        res.status(500).json({
          message: err
        });
      });
  }


const deleteUser = (req, res, next) => {
    let userId = parseInt(req.params.id)
    db.none('DELETE FROM users WHERE id=$1', userId)
    .then(() => {
        res.status(200).json({
            status: success,
            message: 'you have deleted a user'
        })
    })
    .catch((err) => {
        next(err)
    })
}

const logoutUser = (req, res, next) => {
    req.logout();
    res.status(200).send("log out success");
  }
  
const loginUser = (req, res) => {
res.json(req.user);
}

const isLoggedIn = (req, res) => {
    if (req.user) {
        res.json({ username: req.user });
    } else {
        res.json({ username: null });
    }
}

module.exports = { getAllUsers, getSingleUser, editUser, addUser, logoutUser, loginUser, isLoggedIn }