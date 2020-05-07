'use strict'

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');

router.get('/users', userCtrl.getUsers);
router.get('/users/:userId', userCtrl.getUsersById);
router.post('/users', userCtrl.createUser);
router.delete('/users', userCtrl.deleteUser);
router.put('/users', userCtrl.updateUser);

module.exports = router;
