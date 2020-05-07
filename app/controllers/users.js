'use strict'
const User = require('../models/users');

/**
 *  Module exports
 */
module.exports.getUsers = getUsers;
module.exports.getUsersById = getUsersById;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;

function getUsers(req, res, next) {
  console.log('GET users from controller');
  console.log('QUERY', req.query);
  return res.json({message: 'Message success GET'});
}
function getUsersById(req, res, next) {
  console.log('GET users by ud', req.params);
  const userId = req.params.userId;
  console.log('userId', userId);
  return res.json({message: `Message success GET from ID = ${userId}`});
}

function createUser(req, res, next) {
  const user = new User({ name: 'serban', email: 'serban2@evo.com'});
  console.log('user', user);

  user.save(function(err, result) {
    if (err) {
      console.log('err', err);
    }

    console.log('result', result)
    return res.json({ data: result });
  })
}

function deleteUser(req, res, next) {
  console.log('DELETE users');
  return res.json({message: 'Message success DELETE'});
}

function updateUser(req, res, next) {
  console.log('PUT users');
  return res.json({message: 'Message success PUT'});
}
