const sql = require("./db.js");

// constructor
const Users = function(users) {
  this.FirstName = users.FirstName;
  this.LastName = users.LastName;
  this.Gender = users.Gender;
  this.DateOfBirth = users.DateOfBirth;
  this.Email = users.Email;
};

function getName(v) {
  return v.FirstName;
}


Users.findBirth = result => {
  const month = new Date().getMonth()+1;
  const date = new Date().getDate();
  const filter = [month,date]
  var birthdayUser = [];
  var msg = [];
  sql.query("SELECT * FROM users WHERE MONTH(DateOfBirth)=? AND DAY(DateOfBirth)=?",filter, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    res.forEach(element => {
      birthdayUser.push(getName(element))
    })
    birthdayUser.forEach(element => {
      msg.push(`Subject: Happy birthday!
      Happy birthday, dear ${element}!`
      )
    })
    result(null,msg);
  });

};

module.exports = Users;
