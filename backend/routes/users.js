var express = require('express');
var router = express.Router();
const passport = require('../auth/local');
const { loginRequired } = require("../auth/helpers");
const { getAllUsers, getSingleUser, editUser, addUser, logoutUser, loginUser, isLoggedIn } = require ('../db/queries/usersq')

/* GET users listing. */
router.get('/', getAllUsers)
router.get('/:name', getSingleUser)
router.patch('/:id', editUser)
router.post('/', addUser)

// router.post("/new", db.createUser);
router.post("/login", passport.authenticate("local", {}), loginUser);
router.post("/isLoggedIn", isLoggedIn);
router.post("/logout", loginRequired, logoutUser);

module.exports = router;
