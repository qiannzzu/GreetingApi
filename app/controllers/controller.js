const Users = require("../models/model.js");

exports.findBirth = (req, res) => {
  Users.findBirth((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};