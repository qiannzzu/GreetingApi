module.exports = app => {
  const Users = require("../controllers/controller.js");

  var router = require("express").Router();

  router.get("/greeting", Users.findBirth);

  app.use('/', router);
};
