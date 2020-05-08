'use strict'
const User = require('../models/users');

/**
 *  Module exports
 */
module.exports.firstMidFromGetUsers = firstMidFromGetUsers;
module.exports.firstMidFromGetSettings = firstMidFromGetSettings;
module.exports.getUsers = getUsers;
module.exports.getUsersById = getUsersById;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;

function firstMidFromGetUsers(req, res, next) {
  console.log("firs mid from users");
  next({message: 'error from firstMid'});
}
function firstMidFromGetSettings(req, res, next) {
  console.log("firs mid from settings");
  next();
}

function getUsers(req, res, next) {
  User.find(function(err, result) {
    if(err) {
      console.log('err', err)
    }

    res.json({ data: result });
  })
}

function getUsersById(req, res, next) {
  User.find({_id: req.params.userId}, function (err, users) {
    if (err) {
      console.log('err', err);
    }

    res.json({ data: users})
  })
}

function createUser(req, res, next) {
  const user = new User(req.body);

  user.save(function(err, result) {
    if (err) {
      return next(err)
    }

    console.log('result', result)
    return res.json({ data: result });
  })
}


function updateUser(req, res, next) {
  if(true) {
    return next({message: 'asda'})
  }

  console.log(1111)
  User.findOneAndUpdate({_id: req.params.userId}, req.body, function (err, users) {
    if (err) {
      return next(err)
    }

    res.json({ data: users})
  })
}

function deleteUser(req, res, next) {
  console.log('DELETE users');
  return res.json({message: 'Message success DELETE'});
}

