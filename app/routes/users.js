'use strict'

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');

router.get('/users', userCtrl.firstMidFromGetUsers, userCtrl.getUsers);
router.get('/users/:userId', userCtrl.getUsersById);
router.post('/users', userCtrl.createUser);
router.delete('/users', userCtrl.deleteUser);
router.put('/users/:userId', userCtrl.updateUser);
router.get('/settings', userCtrl.firstMidFromGetUsers, userCtrl.firstMidFromGetSettings, userCtrl.getUsers);

module.exports = router;
